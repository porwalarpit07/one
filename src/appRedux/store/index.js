
// import { createStore, applyMiddleware } from 'react-redux';
// import thunk from 'redux-thunk';
// import rootReducer from '../Reducers/index';

// const configureStore = () => {
//   return createStore(rootReducer, applyMiddleware(thunk));
// }

// export default configureStore;

import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../Reducers/slice";

export const store = configureStore({
  reducer: {
    user: userReducer
  }
})