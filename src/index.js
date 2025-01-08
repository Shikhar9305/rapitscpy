import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18+
import App from "./App";
import { CartProvider } from "./Components/CartContext";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement); // New API for rendering

root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
