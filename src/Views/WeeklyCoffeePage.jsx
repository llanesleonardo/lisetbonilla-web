import React from "react";
import "../App.css";
import CafeSpa from "../assets/cafespa.jpeg";
import ContactForm from "../Components/WeeklyCoffeeContactForm"

const WeeklyCoffeePage = () => {
  return (
    <>
    <div className=" bgpink">
    <div>
      <div className="cafespaimg">
        <img src={CafeSpa} />
      </div>
    </div>
      <div className="contact_container">
        <h1 className="contact_title font-face-psb">Registro oficial para el <br/> CAFE SPA - LISET BONILLA</h1>
        <p className="contact_content font-face-psr">
          Completa los datos y únete a link de whatsapp.<br/> 
          Sus datosestarán protegidos.
        </p>
        {/*<p className="contact_content font-face-psr">
          Puedes consultar el Aviso de Privacidad simplificado{" "}
          <a
            className="contact_content_link"
            target="_blank"
            href="#"
          >
            aquí
          </a>
        </p>*/}
        <div id="contactForm">
          <ContactForm />
        </div>
      </div>
      </div>
    </>
  );
};

export default WeeklyCoffeePage;


