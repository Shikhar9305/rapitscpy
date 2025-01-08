import React from 'react';
import '../RestaurantCard.css'; 
import { useNavigate } from 'react-router-dom'; // For navigation

const RestaurantCard = ({ restaurant }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Navigate to the RestaurantResult page and pass the restaurant's name
    navigate(`/restaurant/${restaurant.name}`);
  };

  return (
    <div className="restaurant-card" onClick={handleCardClick}>
      <img src={restaurant.image} alt={restaurant.altText} className="restaurant-image" />
      <h3 className="restaurant-name">{restaurant.name}</h3>
      <p className="restaurant-rating">{restaurant.rating}</p>
      <p className="restaurant-delivery-time">{restaurant.deliveryTime}</p>
      <p className="restaurant-cuisine">{restaurant.cuisine}</p>
    </div>
  );
};

export default RestaurantCard;
