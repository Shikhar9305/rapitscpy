import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "../RestaurantResult.css";
import Navbar from "./Navbar";
import DishCard from "./DishCard";
import CartContext from "./CartContext";
import Navbar2 from "./Navbar2";

const dishes = [
  {
    name: "Cold Coffee",
    price: 230,
    rating: 4.1,
    reviews: 1632,
    description: "A refreshing blend of chilled coffee and milk.",
    image: "/dish_images/f3.jpg",
  },
  {
    name: "Momos",
    price: 250,
    rating: 4.3,
    reviews: 1256,
    description: "Steamed dumplings filled with fresh vegetables and spices.",
    image: "/dish_images/f2.jpg",
  },
  {
    name: "Noodles",
    price: 180,
    rating: 4.2,
    reviews: 1120,
    description: "Stir-fried noodles with mixed vegetables and soy sauce.",
    image: "/dish_images/f5.jpg",
  },
  {
    name: "Paneer Tikka",
    price: 280,
    rating: 4.5,
    reviews: 1450,
    description: "Grilled paneer cubes marinated in aromatic spices.",
    image: "/dish_images/f7.jpg",
  },
  {
    name: "Veg Biryani",
    price: 300,
    rating: 4.4,
    reviews: 1650,
    description: "Aromatic rice cooked with fresh vegetables and spices.",
    image: "/dish_images/f10.jpg",
  },
  {
    name: "Veg Burger",
    price: 150,
    rating: 4.0,
    reviews: 950,
    description: "Crispy vegetable patty with fresh lettuce and sauces in a soft bun.",
    image: "/dish_images/f9.jpeg",
  },
];



const RestaurantResult = () => {
  const { id } = useParams();
  const [isBooking, setIsBooking] = useState(false);
  const { addBookingDetails } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleBookTable = () => {
    setIsBooking(true);
  };

  const handleBackToMenu = () => {
    setIsBooking(false);
  };

  const handleBookingSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const numberOfGuests = form.elements.guests.value;
    const date = form.elements.date.value;
    const timeSlot = form.elements.timeSlot.value;

    addBookingDetails({
      restaurantId: id,
      numberOfGuests,
      date,
      timeSlot,
    });

    alert("Booking details added to cart!");
    setIsBooking(false);
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredDishes = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(searchQuery)
  );
  return (
    <div>
      <Navbar />
      <div className="panel">
        <div className="res-info">
          <div className="left-section">
            <h1>{id}</h1>
            <p className="tags">
              <a href="#">Chinese</a>, <a href="#">Pasta</a>, <a href="#">Beverages</a>, 
              <a href="#">Shake</a>, <a href="#">Pizza</a>, <a href="#">Desserts</a>
            </p>
            <div className="rating">
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-regular fa-star-half-stroke"></i>
            </div>
            <p className="location">Indira Nagar, Lucknow</p>
            <p className="open">Opens at 4pm</p>
            <div className="buttons">
              <button> <i className="fa-sharp fa-solid fa-map-pin"></i>LOCATION</button>
              <button> <i className="fa-sharp fa-solid fa-phone"></i>CONTACTS</button>
              <button><i className="fa-sharp fa-solid fa-share"></i>SHARE</button>
              <button><i className="fa-sharp fa-solid fa-bookmark"></i>WISHLIST</button>
            </div>
            <h2>Reviews</h2>
            <div className="reviews">
              <div className="review">
  <div className="user-avatar"><i className="fa-sharp fa-solid fa-circle-user"></i></div>
  <p><strong>Ananya</strong><br />The Alfredo white sauce pasta was creamy and delicious. Perfectly cooked, and the flavor was spot on!</p>
</div>

<div className="review">
  <div className="user-avatar"><i className="fa-sharp fa-solid fa-circle-user"></i></div>
  <p><strong>Rohan</strong><br />The pasta was undercooked, and the sauce tasted bland. Definitely not worth the hype.</p>
</div>

<div className="review">
  <div className="user-avatar"><i className="fa-sharp fa-solid fa-circle-user"></i></div>
  <p><strong>Meera</strong><br />Absolutely loved the Alfredo pasta! It was rich, cheesy, and the portion size was generous.</p>
</div>

<div className="review">
  <div className="user-avatar"><i className="fa-sharp fa-solid fa-circle-user"></i></div>
  <p><strong>Aryan</strong><br />Too oily and lacked seasoning. The pasta was swimming in sauce, and it just didn’t taste fresh.</p>
</div>

              <button className="view-all">View all</button>
            </div>
      
          </div>
          <div className="right-section">
            <h2>Photos</h2>
            <div className="photos">
              <div className="prow1">
                <img src="/restaurant_pics/p1.jpg" alt="Photo 1" />
              </div>
              <div className="prow2">
                <img src="/restaurant_pics/p2.jpg" alt="Photo 2" />
                <img src="/restaurant_pics/p3.jpg" alt="Photo 3" />
                <div className="photo-more">
                  <img src="/restaurant_pics/p4.jpg" alt="Photo 4" />
                  <div className="view-more">View more</div>
                </div>
              </div>
            </div>
            <div className="action-buttons">
              <button className="action-btn" onClick={handleBookTable}>BOOK TABLE</button>
              <button className="action-btn"onClick={handleBackToMenu}>ORDER ONLINE</button>
            </div>
          </div>
        </div>

        <div className="menu">
          <div className="menu-left">
            <div className="dropdowns">
              <h3>"Craft Your Ideal Plate 🍽️🥘"</h3>
              <div className="dropdown">
                <button className="dropbtn">Rapits Recommends <i className="fa-sharp fa-solid fa-chevron-down"></i></button>
                <div className="dropdown-content">
                  <a href="#">Biryani</a>
                  <a href="#">Paneer Butter Masala</a>
                  <a href="#">Palak Paneer</a>
                  <a href="#">Masala Dosa</a>
                  <a href="#">Rogan Dosa</a>
                  <a href="#">Butter Chicken</a>
                </div>
              </div>

              <div className="dropdown">
                <button className="dropbtn">Best Offers <i className="fa-sharp fa-solid fa-chevron-down"></i></button>
                <div className="dropdown-content">
                  <a href="#">Chole Bhature</a>
                  <a href="#">Tandoori Chicken</a>
                  <a href="#">Vada Pav</a>
                  <a href="#">Masala Dosa</a>
                  <a href="#">Rogan Dosa</a>
                  <a href="#">Dal Makhani</a>
                </div>
              </div>

              <div className="dropdown">
                <button className="dropbtn">Starter <i className="fa-sharp fa-solid fa-chevron-down"></i></button>
                <div className="dropdown-content">
                  <a href="#">Samosa</a>
                  <a href="#">Paneer Tikka</a>
                  <a href="#">Vada Pav</a>
                  <a href="#">Chicken Tikka</a>
                  <a href="#">Rogan Dosa</a>
                  <a href="#">Aloo Tikki</a>
                </div>
              </div>

              <div className="dropdown">
                <button className="dropbtn">Main Course <i className="fa-sharp fa-solid fa-chevron-down"></i></button>
                <div className="dropdown-content">
                  <a href="#">Special Thali</a>
                  <a href="#">Plain Thali</a>
                  <a href="#">South Indian</a>
                  <a href="#">North Indian</a>
                  <a href="#">Chole Rice</a>
                </div>
              </div>

              <div className="dropdown">
                <button className="dropbtn">Desserts <i className="fa-sharp fa-solid fa-chevron-down"></i></button>
                <div className="dropdown-content">
                  <a href="#">Gulab Jamun</a>
                  <a href="#">Halwa</a>
                  <a href="#">Malpua</a>
                  <a href="#">Rasmalai</a>
                  <a href="#">Brownies</a>
                </div>
              </div>

              <div className="dropdown">
                <button className="dropbtn">Ice Creams <i className="fa-sharp fa-solid fa-chevron-down"></i></button>
                <div className="dropdown-content">
                  <a href="#">Vanilla</a>
                  <a href="#">Chocolate</a>
                  <a href="#">Strawberry</a>
                  <a href="#">Mint Chocolate Chip</a>
                  <a href="#">Cookies and Cream</a>
                </div>
              </div>

              <div className="dropdown">
                <button className="dropbtn">Add-Ons <i className="fa-sharp fa-solid fa-chevron-down"></i></button>
                <div className="dropdown-content">
                  <a href="/#">Rice Bowl</a>
                  <a href="/#">Chapati</a>
                  <a href="/#">Naan</a>
                  <a href="/#">Raita</a>
                  <a href="/#">Pickles</a>
                </div>
              </div>
            </div>
          </div>

          <div className="menu-right">
            {/* Toggle between dish cards and booking form */}
            {isBooking ? (
              <div className="booking-form">
              <h2>Book Your Table</h2>
              <form onSubmit={handleBookingSubmit}>
                <label>
                  Number of Guests:
                  <input type="number" name="guests" min="1" max="20" required />
                </label>
                <label>
                  Select Date:
                  <input type="date" name="date" required />
                </label>
                <label>
                  Select Time Slot:
                  <select name="timeSlot" required>
                    <option>6:00 PM</option>
                    <option>6:30 PM</option>
                    <option>7:00 PM</option>
                    <option>7:30 PM</option>
                    <option>8:00 PM</option>
                  </select>
                </label>
                <button type="submit">Submit Booking</button>
              </form>
            </div>
            ) : (
              <div>
              <Navbar2 onSearch={handleSearch} />
              <div className="dish-cards-container">
                {filteredDishes.map((dish, index) => (
                  <DishCard
                    key={index}
                    name={dish.name}
                    price={dish.price}
                    rating={dish.rating}
                    reviews={dish.reviews}
                    description={dish.description}
                    image={dish.image}
                  />
                ))}
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantResult;
