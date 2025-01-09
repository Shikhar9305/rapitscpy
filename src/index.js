import React from "react";
import ReactDOM from "react-dom/client"; // Ensure you import from 'react-dom/client'
import App from "./App";
import { CartProvider } from "./Components/CartContext";
import { ClerkProvider } from "@clerk/clerk-react";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement); // Use createRoot instead of render

// Fetch the Clerk Publishable Key from the environment
const clerkPublishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

// Log to make sure the key is loaded
console.log('Clerk Publishable Key:', clerkPublishableKey);

if (!clerkPublishableKey) {
  throw new Error("Missing Clerk Publishable Key in .env.local file");
}

root.render(  // Use root.render instead of react_dom.render
  <React.StrictMode>
    <ClerkProvider 
      frontendApi={process.env.REACT_APP_CLERK_FRONTEND_API}
      publishableKey={process.env.REACT_APP_CLERK_PUBLISHABLE_KEY}
    >
      <CartProvider>
        <App />
      </CartProvider>
    </ClerkProvider>
  </React.StrictMode>
);
