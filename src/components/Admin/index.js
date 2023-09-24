import React, { useState } from "react";
import food from "../../img/food.png";

const Admin = ({ onAddMenuItem }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const createProduct = () => {
    const productData = {
      name: productName,
      price: productPrice,
      image: selectedImage,
    };

    if (onAddMenuItem) {
      onAddMenuItem(productData);
    }

    setProductName("");
    setProductPrice("");
    setSelectedImage(null);
  };

  return (
    <div id="admin">
      <div className="container"></div>
      <div className="admin">
        <div className="admin-title">
          <h1>CREATE PRODUCT</h1>
        </div>
        <div className="info">
          <div className="admin-inputs">
            <input
              className="in1"
              placeholder="choose file"
              type="file"
              onChange={handleImageChange}
            />
            <input
              className="in2"
              type="text"
              placeholder="food name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <input
              className="in3"
              type="text"
              placeholder="price"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
          <div className="foto">
            {selectedImage ? (
              <img src={selectedImage} alt="" />
            ) : (
              <img
                src={food}
                alt=""
                style={{
                  marginTop: "60px",
                  width: "477px",
                  height: "289px",
                }}
              />
            )}
          </div>
        </div>
        <div className="admin-btn">
          <button onClick={createProduct}>create</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
