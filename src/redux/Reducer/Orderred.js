import { ActionTypes } from "../ActionTypes";

const initialstate = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};
export const BasketRed = (state = initialstate, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_BASKET:
      const foundProduct = state.basket.find(
        (el) => el.id === action.payload.id
      );
      if (foundProduct) {
        return {
          ...state,
          basket: state.basket.map((el) =>
            el.id === foundProduct.id ? { ...el, count: el.count + 1 } : el
          ),
        };
      }
      return {
        ...state,
        basket: [...state.basket, { ...action.payload, count: 1 }],
      };

    case ActionTypes.ADD_TO_BASKETS:
      const foundProduct1 = state.basket.find(
        (el) => el.id === action.payload.id
      );
      if (foundProduct1) {
        return {
          ...state,
          basket: state.basket.map((el) =>
            el.id === foundProduct1.id
              ? { ...el, count: el.count > 1 ? el.count - 1 : el.count - 0 }
              : el
          ),
        };
      }
      return {
        ...state,
        basket: [...state.basket, { ...action.payload, count: 1 }],
      };
    case "ADD_MONEY":
      if (state.money !== 200) {
        return { ...state, money: state.money + action.payload };
      } else {
        return { ...state, money: state.money + 0 };
      }

    case "GET_MONEY":
      if (state.money !== 0)
        return { ...state, money: state.money - action.payload };
    case ActionTypes.DELETE_BASKET:
      return { ...state, busket: [] };
    default: {
      return state;
    }
  }
};
