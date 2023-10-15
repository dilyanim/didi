// import {createStore} from 'redux'
// import { Reducer } from './Reducer'


// export const store = createStore(Reducer)
import { createStore, combineReducers } from 'redux';
// import menuReducer from '../redux/Reducer/menuReducer';
// import  from '../redux/Reducer/ActionTypes';
import { composeWithDevTools } from 'redux-devtools-extension';
import orderReducer from '../redux/Reducer/index';

const rootReducer = combineReducers({
//   menu: menuReducer,
  order: orderReducer,
}, composeWithDevTools());

const store = createStore(rootReducer);

export default store;

