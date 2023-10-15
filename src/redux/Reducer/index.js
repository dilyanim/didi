// import { ActionTypes } from "./ActionTypes";

// const initialState = {
//   money: 0,
// };

// export const Reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ActionTypes.ADD_TO_BASKET:
//       const foundProduct = state.basket.find(
//         (el) => el.id === action.payload.id
//       );
//       if (foundProduct) {
//         return {
//           ...state,
//           basket: state.basket.map((el) =>
//             el.id === foundProduct.id ? { ...el, count: el.count + 1 } : el
//           ),
//         };
//       }
//       return {
//         ...state,
//         basket: [...state.basket, { ...action.payload, count: 1 }],
//       };

//     case ActionTypes.ADD_TO_BASKETS:
//       const foundProduct1 = state.basket.find(
//         (el) => el.id === action.payload.id
//       );
//       if (foundProduct1) {
//         return {
//           ...state,
//           basket: state.basket.map((el) =>
//             el.id === foundProduct1.id
//               ? { ...el, count: el.count > 1 ? el.count - 1 : el.count - 0 }
//               : el
//           ),
//         };
//       }
//       return {
//         ...state,
//         basket: [...state.basket, { ...action.payload, count: 1 }],
//       };
//     case "ADD_MONEY":
//       if (state.money !== 200) {
//         return { ...state, money: state.money + action.payload };
//       } else {
//         return { ...state, money: state.money + 0 };
//       }

//     case "GET_MONEY":
//       if (state.money !== 0)
//         return { ...state, money: state.money - action.payload };
//     default: {
//       return state;
//     }
//   }
// };
const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    
    // case 'ADD_TO_CART':
    //   const foundCart = state.cart.find(product => product.id === action.payload.id);

    //   if (foundCart) {
    //     return state;
    //   } else {
    //     return {
    //       ...state,
    //       cart: [...state.cart, { ...action.payload, quantity: 1 }],
    //     };
    //   }

    case 'ADD_TO_CART':
  if (action.payload && action.payload.id) {
    const foundCart = state.cart.find((product) => product.id === action.payload.id);

    if (foundCart) {
      return state;
    } else {
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }
  }
  return state;

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };

    case 'INCREASE_PRODUCT_COUNT':
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: (product.quantity || 1) + 1 }
            : product
        ),
      };

    case 'DECREASE_PRODUCT_COUNT':
      return {
        ...state,
        cart: state.cart
          .map((product) =>
            product.id === action.payload
              ? { ...product, quantity: (product.quantity || 1) - 1 }
              : product
          ).filter((product) => product.quantity > 0),
      };

    default:
      return state;
  }
};

export default orderReducer;

