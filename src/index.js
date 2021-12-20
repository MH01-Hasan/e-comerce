import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import productsReducer, { productsFetch } from "./Redux/ProductSlics";
import cardReducer, { getTotals } from "./Redux/cardSlics";
// import  detailsReducer,   { detailsFetch } from "./Redux/detailsSlics";



const store = configureStore({
  reducer: {
    products: productsReducer,
    cart:cardReducer,
    // details:detailsReducer,
  
    
  },
  
});

store.dispatch(productsFetch());
// store.dispatch(detailsFetch());
store.dispatch(getTotals());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);