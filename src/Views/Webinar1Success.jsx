import React from "react";
import "../App.css"; // Assuming styles are defined here
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

import { FaWhatsapp, FaFacebook } from "react-icons/fa"; // Icons for WhatsApp and Facebook

const Webinar1Success = () => {

  const navigate = useNavigate(); // Initialize navigate function

  const handleGoBackHome = () => {
    navigate("/"); // Redirect to the home page
  };

  return (
    <div className="webinar-container">
      {/* Welcome Message */}
      <h1 className="webinar-title">PODER Y AUTOCONFIANZA</h1>
      <div className="cafespaimg">
        {/* <img style={{width:'200px'}} src='https://resumev1sa.blob.core.windows.net/treseledata/treseleweb/img/webinar1liset/profileliset.png' />
      */}</div>
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
            {/* WhatsApp and Facebook Icons */}
            <hr className="linepink"/>
      <div className="whatsappwrapper">
        <div style={{paddingTop:'20px',paddingBottom:'20px'}}>
        <video width="720" height="420" controls>
          <source src='https://lisetwebrgbac6.blob.core.windows.net/webresources/Webinar1.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        <p style={{fontWeight:'bold'}}>
        ÚNETE a mi comunidad de MUJERES ESENCIALES y recibe notificaciones diarias.
        </p>
        <a
          href="https://chat.whatsapp.com/HNXRtl536nX4Dd8RCjcIru" // Replace with actual WhatsApp link
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon whatsapp"
        >
          CLICK AQUI - <FaWhatsapp size={50} />
        </a>

      </div>
      <div></div>
      </div>


      {/* WhatsApp and Facebook Icons */}
      <div className="social-links">
        <button 
        onClick={handleGoBackHome} 
        className="go-back-home-btn"
      >
        Regresar a la página principal
      </button>
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
