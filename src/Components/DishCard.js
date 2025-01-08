import React, { useState, useContext } from "react";
import "../DishCard.css";
import CartContext from "./CartContext";

const DishCard = ({ name, price, rating, reviews, description, image }) => {
  const { addToCart, updateQuantity } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const [showNutrition, setShowNutrition] = useState(false);
  const [nutrition, setNutrition] = useState(null);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);

    if (quantity === 0) {
      addToCart({ name, price, image, quantity: 1 });
    } else {
      updateQuantity(name, newQuantity);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);

      if (newQuantity === 0) {
        updateQuantity(name, 0);
      } else {
        updateQuantity(name, newQuantity);
      }
    }
  };

  const fetchNutritionData = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/guessNutrition?title=${encodeURIComponent(name)}&apiKey=f8c787f27df841558b206cf2b9e9788a`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch nutritional data");
      }

      const data = await response.json();
      console.log(data);
      setNutrition({
        protein: data.protein?.value || "N/A",
        carbs: data.carbs?.value || "N/A",
        fats: data.fat?.value || "N/A",
        calories: data.calories?.value || "N/A",
      });
    } catch (error) {
      console.error("Error fetching nutrition data:", error);
      setNutrition({ error: "Unable to fetch nutritional data" });
    }
  };

  const handleShowNutrition = async () => {
    if (!nutrition) {
      await fetchNutritionData();
    }
    setShowNutrition(!showNutrition);
  };

  return (
    <div className="dish-card">
      {/* Nutrition Info Button */}
      <button className="nutrition-button" onClick={handleShowNutrition}>
      !
      </button>

      {showNutrition && (
        <div className="nutrition-modal">
          <h4>Nutritional Information</h4>
          {nutrition?.error ? (
            <p>{nutrition.error}</p>
          ) : (
            <ul>
              <li>Protein: {nutrition.protein}g</li>
              <li>Carbs: {nutrition.carbs}g</li>
              <li>Fats: {nutrition.fats}g</li>
              <li>Calories: {nutrition.calories}kcal</li>
            </ul>
          )}
        </div>
      )}

      <div className="dish-details1">
        <h3>{name}</h3>
        <p>Rs. {price}</p>
        <div className="dish-rating">
          <span>⭐ {rating}</span> ({reviews})
        </div>
        <p className="dish-description">{description}</p>
      </div>
      <div className="dish-details2">
        <img src={image} alt={name} className="dish-image" />
        <div className="dish-actions">
          <button
            className="dish-quantity-button"
            onClick={handleDecrement}
            disabled={quantity === 0}
          >
            -
          </button>
          <span className="dish-quantity">
            {quantity === 0 ? "Add" : quantity}
          </span>
          <button className="dish-quantity-button" onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
