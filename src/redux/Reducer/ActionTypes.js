// export const GET_PRODUCT = 'GET_PRODUCT'
// export const ADD_TO_BASKET = 'ADD_TO_BASKET'
// export const ADD_TO_BASKETS = 'ADD_TO_BASKETS'
// export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE'
// export const DELETE_FAVORITE = 'DELETE_FAVORITE'
// export const DELETE_BASKET = 'DELETE_BASKET'

// export const ActionTypes = {
//     GET_PRODUCT : 'GET_PRODUCT' ,
//     ADD_TO_BASKET : 'ADD_TO_BASKET  ',
//     ADD_TO_BASKETS : 'ADD_TO_BASKETS  ',
//     ADD_TO_FAVORITE : 'ADD_TO_FAVORITE ',
//     DELETE_FAVORITE : 'DELETE_FAVORITE' ,
//     DELETE_BASKET : 'DELETE_BASKET'
// }
export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
  });
  
  export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId,
  });
  export const increaseProductCount = (productId) => ({
    type: 'INCREASE_PRODUCT_COUNT',
    payload: productId,
  });
  
  export const decreaseProductCount = (productId) => ({
    type: 'DECREASE_PRODUCT_COUNT',
    payload: productId,
  });
