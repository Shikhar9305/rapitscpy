import React, { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Cart.css";
import CartContext from "./CartContext";

const Cart = () => {
  const { cartItems, bookingDetails, updateQuantity, removeFromCart ,removeBookingDetails} =
    useContext(CartContext);

  const handleQuantityChange = (name, quantity) => {
    if (quantity === 0) {
      removeFromCart(name); // Remove the item if quantity reaches 0
    } else {
      updateQuantity(name, quantity); // Update quantity otherwise
    }
  };

  const calculateTotal = () => {
    const dishTotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const serviceAndTax = dishTotal * 0.1; // 10% service and tax
    const tableCharges = bookingDetails && cartItems.length > 0 ? 150 : 0;
    return dishTotal + serviceAndTax + tableCharges;
  };

  const isBookingValid = bookingDetails && cartItems.length > 0;

  return (
    <div>
      <Navbar />
      <div className="cart-page">
        <h1>Your Cart</h1>
        {cartItems.length === 0 && !bookingDetails ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-content">
            {cartItems.length > 0 && (
              <div className="cart-items">
                {cartItems.map((item, index) => (
                  <div className="cart-item" key={index}>
                    <img src={item.image} alt={item.name} />
                    <div className="cart-item-details">
                      <h3>{item.name}</h3>
                      <p>Rs. {item.price}</p>
                      <div className="quantity-controls">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.name, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.name, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                      <p>Total: Rs. {item.price * item.quantity}</p>
                      <button
                        className="rmv"
                        onClick={() => removeFromCart(item.name)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {bookingDetails && (
              <div className="booking-details">
                <p>Restaurant: {bookingDetails.restaurantId}</p>
                <p>Guests: {bookingDetails.numberOfGuests}</p>
                <p>Date: {bookingDetails.date}</p>
                <p>Time Slot: {bookingDetails.timeSlot}</p>
                
                {cartItems.length === 0 && (
                  <p className="warning">Please select at least one dish to book a table.</p>
                )}
                <button
                className="remove-booking"
                onClick={removeBookingDetails}
              >
                Remove Booking
              </button>
              </div>
            )}

            <div className="cart-summary">
              <h2>Cart Summary</h2>
              <p>Dish Total: Rs. {cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}</p>
              <p>Service & Tax (10%): Rs. {cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) * 0.1}</p>
              {isBookingValid && <p>Table Charges: Rs. 150</p>}
              <h3>Total Payment: Rs. {calculateTotal()}</h3>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
