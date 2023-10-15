import React, { useState, useEffect } from "react";

const Menu = ({ add, menuItems, onAddMenuItem }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

 



  const createProduct = () => {
    const productData = {
      name: productName,
      price: productPrice,
      image: selectedImage,
    };

    if (onAddMenuItem) {
      onAddMenuItem([...menuItems, productData]);
    }

    setProductName("");
    setProductPrice("");
    setSelectedImage(null);
  };

  return (
    <div id="menu">
      <div className="container"></div>
      <div className="menu">
        <div className="m-title">
          <h1>MENU</h1>
        </div>

        <div class="max-w-sm p-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-300 dark:border-gray-400">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item">
              <img src={item.image} alt={item.name} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                className="title"
              >
                <div className="sub">
                  <h2 class="mb-3 font-normal text-gray-900 dark:text-gray-900">
                    {item.name}
                  </h2>
                  <p>{item.price}</p>
                </div>

                <div className="btn">
                  <button
                    onClick={() => {
                      add();
                    }}
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                  >
                    to order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
