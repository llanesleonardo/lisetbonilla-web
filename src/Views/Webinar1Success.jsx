import React from "react";
import "../App.css"; // Assuming styles are defined here
import { FaWhatsapp, FaFacebook } from "react-icons/fa"; // Icons for WhatsApp and Facebook

const Webinar1Success = () => {
  return (
    <div className="webinar-container">
      {/* Welcome Message */}
      <h1 className="webinar-title">Welcome to Our Exclusive Webinar</h1>
      <div className="cafespaimg">
        <img src='http://localhost:5173/src/assets/profileliset.png' />
      </div>
      {/* Dummy Content */}
      <div className="webinar-content">
        <p>
          Join us for an engaging session filled with insights and opportunities
          to connect with industry leaders.
        </p>
        <p>
          In this webinar, we will explore the latest trends and best practices
          in the field.
        </p>
        <p>
          Don’t miss out on this chance to learn and grow with a community of
          like-minded individuals.
        </p>
        <p>
          Stay tuned for interactive Q&A sessions, expert panels, and much
          more!
        </p>
        <p>
          We look forward to having you with us. Secure your spot now and get
          ready for an unforgettable experience.
        </p>
      </div>


      {/* WhatsApp and Facebook Icons */}
      <div className="social-links">
        <a
          href="https://wa.me/1234567890" // Replace with actual WhatsApp link
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon whatsapp"
        >
          <FaWhatsapp size={50} />
        </a>
        <a
          href="https://facebook.com" // Replace with actual Facebook link
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon facebook"
        >
          <FaFacebook size={50} />
        </a>
      </div>
      <div>

    </div>
      {/* Thank You Message */}
      <div className="webinar-thank-you">
        <p>Thank you for joining us. We can't wait to see you at the webinar!</p>
      </div>
    </div>
  );
};

export default Webinar1Success;
