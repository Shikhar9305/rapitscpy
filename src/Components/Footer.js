import React from 'react';
import '../Footer.css';  // Add your styles for the footer here

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Rapits</h3>
          <p>© 2024 By Shikhar</p>
        </div>
        
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Rapits One</a></li>
            <li><a href="#">Rapits Instamart</a></li>
            <li><a href="#">Rapits Genie</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li><a href="#">Help & Support</a></li>
            <li><a href="#">Partner with us</a></li>
            <li><a href="#">Ride with us</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Investor Relations</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>We deliver to:</h3>
          <ul>
            <li><a href="#">Bangalore</a></li>
            <li><a href="#">Gurgaon</a></li>
            <li><a href="#">Hyderabad</a></li>
            <li><a href="#">Delhi</a></li>
            <li><a href="#">Mumbai</a></li>
            <li><a href="#">Pune</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
