import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import CartProvider from "./Context/CartContext.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/webPizzeria">
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
