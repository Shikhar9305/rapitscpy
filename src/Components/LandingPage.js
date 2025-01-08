import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import deliveryAnimation from '../Assets/DeliveryAnimation.mp4';
import logo from '../Assets/loogo3.png';
import '../LandingPage.css';

const LandingPage = () => {
  const [coordinates, setCoordinates] = useState(null);
  const [location, setLocation] = useState('Fetching Location...');
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const navigate = useNavigate();

  // Fetch coordinates based on geolocation
  const getCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setCoordinates({ latitude, longitude });
          console.log("Coordinates fetched:", { latitude, longitude });
          fetchLocation(latitude, longitude);  // Fetch location after coordinates
        },
        (error) => {
          console.error("Error getting coordinates:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  // Fetch location from OpenCage Geocoding API
  const fetchLocation = (latitude, longitude) => {
    const key = "5a1903b7ea1c4f9d924c7a5e0a22e337";
    const endpoint = `https://api.opencagedata.com/geocode/v1/json?lat=${latitude}&lon=${longitude}&key=${key}`;
    
    fetch(endpoint)
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

  // Handle video end event
  const handleVideoEnd = () => {
    console.log("Video has ended.");
    setIsVideoEnded(true);
  };

  // Fetch coordinates immediately when the video starts
  useEffect(() => {
    console.log("Video is starting. Fetching coordinates...");
    getCoordinates();
  }, []);  // Empty dependency array means this effect runs only once

  // Redirect to home page once coordinates are fetched and video ends
  useEffect(() => {
    if (isVideoEnded && coordinates) {
      console.log("Video ended and coordinates are fetched. Redirecting to Home...");
      navigate('/home');
    }
  }, [isVideoEnded, coordinates, navigate]);  // No need to add getCoordinates here

  return (
    <div>
      {/* Navbar */}
      <div className="nav1">
        <img src={logo} alt="Logo" />
        <p className="logo">Rap<span>its</span></p>
        <div className="location">
          <i className="fa-solid fa-location-dot"></i>
          <span>{location}</span>  {/* Display the location here */}
        </div>
      </div>

      {/* Video on the landing page */}
      <div className="rapit">
        <video
          id="deliveryAnimation"
          width="100%"
          height="auto"
          autoPlay
          onEnded={handleVideoEnd}
          muted // Optional, to mute the video
        >
          <source src={deliveryAnimation} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1>“Foodie magic is happening… 🍛 Hold on while we find the yummiest places nearby!”</h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
