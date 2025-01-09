import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load cart items from localStorage if available
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [bookingDetails, setBookingDetails] = useState(() => {
    // Load booking details from localStorage if available
    const savedBooking = localStorage.getItem("bookingDetails");
    return savedBooking ? JSON.parse(savedBooking) : null;
  });

  // Sync cartItems with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Sync bookingDetails with localStorage whenever it changes
  useEffect(() => {
    if (bookingDetails) {
      localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    } else {
      localStorage.removeItem("bookingDetails");
    }
  }, [bookingDetails]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.name === item.name
      );
  
      if (existingItemIndex !== -1) {
        // Update the quantity of the existing item
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity =
          (updatedItems[existingItemIndex].quantity || 0) + (item.quantity || 1);
        return updatedItems;
      } else {
        // Add the new item to the cart
        return [...prevItems, { ...item, quantity: item.quantity || 1 }];
      }
    });
  };

  const updateQuantity = (name, quantity) => {
    setCartItems((prevItems) =>
      quantity === 0
        ? prevItems.filter((item) => item.name !== name)
        : prevItems.map((item) =>
            item.name === name ? { ...item, quantity } : item
          )
    );
  };

  const removeFromCart = (name) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.name !== name)
    );
  };

  const addBookingDetails = (details) => {
    setBookingDetails(details);
  };
  
  const removeBookingDetails = () => {
    setBookingDetails(null);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        bookingDetails,
        addBookingDetails,
        removeBookingDetails
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
