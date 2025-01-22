import React from "react";
import "../App.css"; // Assuming styles are defined here
import { FaWhatsapp, FaFacebook } from "react-icons/fa"; // Icons for WhatsApp and Facebook

const Webinar1Success = () => {
  return (
    <div className="webinar-container">
      {/* Welcome Message */}
      <h1 className="webinar-title">PODER Y AUTOCONFIANZA</h1>
      <div className="cafespaimg">
        <img src='http://localhost:5173/src/assets/profileliset.png' />
      </div>
      {/* Dummy Content */}
      <div className="webinar-content">
        <p>
        Que emoción que estés aquí Bienvenida ! 

        </p>
        <p>
        Soy tu amiga Liset Bonilla y he preparado todo a detalle para que éste Reto y webinar sea una experiencia maravillosa para ti .

        </p>
        <p>
        Te prometo que después de esto vas a tener una nueva visión de la vida y sobre todo de ti misma.

        </p>
        <p>
        La vida que te mereces está esperando por ti .

        </p>
        <p>
        Comencemos !
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
        <p>Gracias por unirte a nosotros. ¡Estamos ansiosos por verte en el webinar!







</p>
      </div>
    </div>
  );
};

export default Webinar1Success;
