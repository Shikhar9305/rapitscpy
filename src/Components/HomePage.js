import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import Footer from './Footer';
import Navbar from './Navbar';

import '../HomePage.css';

const HomePage = () => {
  const [coordinates, setCoordinates] = useState(null);
  const [location, setLocation] = useState('Fetching Location...');
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); 

  const getCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setCoordinates({ latitude, longitude });
          fetchLocation(latitude, longitude);
        },
        (error) => {
          console.error("Error getting coordinates:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const fetchLocation = (latitude, longitude) => {
    const key = "5a1903b7ea1c4f9d924c7a5e0a22e337";
    const endpoint = "https://api.opencagedata.com/geocode/v1/json?";
    const URL = `${endpoint}q=${encodeURIComponent(latitude + ',' + longitude)}&key=${key}`;

    fetch(URL)
      .then(response => response.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          setLocation(data.results[0].formatted);
        } else {
          setLocation("Location not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching location:", error);
        setLocation("Location not available");
      });
  };
  // Fetching restaurant data (This can be from a JSON file or an API)
  useEffect(() => {
    // Replace this with actual fetch if it's an API request.
    const restaurantData = [
      { "image": "/restaurant_images/R1.jpg", "altText": "Restaurant 1", "name": "Pasta Palace", "rating": "★★★★☆", "deliveryTime": "25 mins", "cuisine": "Italian" },
      { "image": "/restaurant_images/R2.avif", "altText": "Restaurant 2", "name": "Dragon Wok", "rating": "★★★☆☆", "deliveryTime": "35 mins", "cuisine": "Chinese" },
      { "image": "/restaurant_images/R3.avif", "altText": "Restaurant 3", "name": "Taco Fiesta", "rating": "★★★★☆", "deliveryTime": "20 mins", "cuisine": "Mexican" },
      { "image": "/restaurant_images/R4.avif", "altText": "Restaurant 4", "name": "Spice Street", "rating": "★★★☆☆", "deliveryTime": "40 mins", "cuisine": "Indian" },
      { "image": "/restaurant_images/R5.avif", "altText": "Restaurant 5", "name": "Basil Thai", "rating": "★★★☆☆", "deliveryTime": "30 mins", "cuisine": "Thai" },
      { "image": "/restaurant_images/R6.jpg", "altText": "Restaurant 6", "name": "Sushi Zen", "rating": "★★★★☆", "deliveryTime": "25 mins", "cuisine": "Japanese" },
      { "image": "/restaurant_images/R7.avif", "altText": "Restaurant 7", "name": "Korean BBQ House", "rating": "★★★☆☆", "deliveryTime": "30 mins", "cuisine": "Korean" },
      { "image": "/restaurant_images/R8.avif", "altText": "Restaurant 8", "name": "Le Petit Bistro", "rating": "★★★☆☆", "deliveryTime": "35 mins", "cuisine": "French" },
      { "image": "/restaurant_images/R9.avif", "altText": "Restaurant 9", "name": "Opa's Greek Grill", "rating": "★★★★☆", "deliveryTime": "20 mins", "cuisine": "Greek" },
      { "image": "/restaurant_images/R10.avif", "altText": "Restaurant 10", "name": "La Paella", "rating": "★★★☆☆", "deliveryTime": "45 mins", "cuisine": "Spanish" },
      { "image": "/restaurant_images/R11.avif", "altText": "Restaurant 11", "name": "Anatolia Grill", "rating": "★★★☆☆", "deliveryTime": "40 mins", "cuisine": "Turkish" },
      { "image": "/restaurant_images/R12.avif", "altText": "Restaurant 12", "name": "Big Apple Diner", "rating": "★★★★☆", "deliveryTime": "30 mins", "cuisine": "American" }
    ];

    setRestaurants(restaurantData);
    getCoordinates();
  }, []);
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
       <Navbar location={location} searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <div className="restaurant-grid">
        {filteredRestaurants.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </div>
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default HomePage;
