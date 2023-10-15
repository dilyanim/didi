import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
const Order = ({ task }) => {
  const balance = useSelector((state) => {
    console.log(state);
    return state.money;
  });
  const dispatch = useDispatch();

  return (
    <div id="order">
      <div className="container"></div>
      <div className="order">
        <h1>MY ORDERS</h1>
        <div>{task.title}</div>
        {task.map((el) => (
          <div key={el.id}>
            <h1>{el.name}</h1>
            <p>{el.price}</p>

            <img src={el.image} />
            <div className="flex m-40">
              <button
                        style={{
                          display: el.count === 1 ? "none" : "block",
                        }}
                        className="btn2"
                      >
                        -
                      </button>
              <h1
                style={{
                  fontSize: "30px",
                }}
                className="m-2"
              >
                {el.price}
              </h1>
              <button className="btn1">+</button>
            </div>
            {/* <td className="px-6 py-4 text-2xl">
                    $ {el.price * el.count}
                  </td> */}
          </div>
        ))}
        <NavLink to={"/"}>
          <button className="order-btn">TO ORDER</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Order;
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart, increaseProductCount, decreaseProductCount, addToCart } from '../../redux/Reducer/ActionTypes';
// import { NavLink } from 'react-router-dom';

// const saveOrder = (orderData) => {
//   localStorage.setItem('cart', JSON.stringify(orderData));
// };

// const Order = () => {
//   const cart = useSelector((state) => state.order.cart);
//   const dispatch = useDispatch();
//   let total=0;

//   const removeProduct = (productId) => {
//     dispatch(removeFromCart(productId));
//     localStorage.removeItem("cart")
//   };

//   const increaseQuantity = (productId) => {
//     dispatch(increaseProductCount(productId));
//   };

//   const decreaseQuantity = (productId) => {
//     dispatch(decreaseProductCount(productId));
//   };

//   useEffect(() => {
//     const local = localStorage.getItem('cart');
//     if (local && local !== 'null') {
//       dispatch(addToCart(local));
//     }
//   }, [dispatch]);

// useEffect(() => {
//   saveOrder(cart)
// }, [cart]);

//   return (
//     <div id="order" className="bg-blue-300">
//       <center><h1>MY ORDERS</h1></center>
//       <div className="container">
//         <div className="order">
//           <ul>
//             {cart && cart.length > 0 ? (
//               cart.map((product) => {
//                 total += product.price * (product.quantity);
//                 return (
//                   <li key={product.id}>
//                     <div className="order-block">
//                       <img src={product.image} alt="" />
//                       <div className="order-title">
//                         <h1>{product.title}</h1>
//                         <h3>{product.price * (product.quantity || 1)}$</h3>
//                       </div>
//                       <div className="order-btn">
//                         <button onClick={() => removeProduct(product.id)} className="btn-delete">
//                           Delete Order
//                         </button>
//                         <div className="btn-bottom">
//                           <button
//                             style={{ display: product.quantity === 1 ? "none" : "block" }}
//                             onClick={() => decreaseQuantity(product.id)} className="btn-minus">
//                             -
//                           </button>
//                           <h3>{product.quantity || 1}</h3>
//                           <button onClick={() => increaseQuantity(product.id)} className="btn-plus">
//                             +
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                 );
//               })
//             ) : (
//               <p>Your order is empty</p>
//             )
//             }
//           </ul>
//           {cart.length > 0 && (
//            <div className="total">
//             <p style={{margin:"50px 0 0 710px"}}>Total: {total}$</p>
//            <NavLink to="/menu">
//             <button className="to-order">to order</button>
//            </NavLink>
//            </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Order;
