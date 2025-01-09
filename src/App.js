
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import HomePage from './Components/HomePage';
import RestaurantResult from './Components/RestaurantResult';
import Cart from './Components/Cart';
import { SignIn } from "@clerk/clerk-react";  
import { SignUp } from "@clerk/clerk-react"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/restaurant/:id" element={<RestaurantResult />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign-in" element={<SignIn forceRedirectUrl="/cart" />} /> {/* Clerk SignIn */}
        <Route path="/sign-up" element={<SignUp forceRedirectUrl="/cart" />} /> {/* Clerk SignIn */}
      </Routes>
    </Router>
  );
}
export default App;