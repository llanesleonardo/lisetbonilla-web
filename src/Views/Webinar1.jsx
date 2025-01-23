import React from "react";
import "../App.css";
import CafeSpa from "../assets/cafespa.jpeg";
import ContactForm from "../Components/WebinarContactForm"
import ResponsiveMenu from '../Components/ResponsiveMenu';


const Webinar1 = () => {
  return (
    <div className="bgpink">
        <ResponsiveMenu />
    <div className="containerWebinar">
    <div>
      <div className="cafespaimg">
        <img src='https://resumev1sa.blob.core.windows.net/treseledata/treseleweb/img/webinar1liset/webinar1liset2.jpeg' />
      </div>
    </div>
      <div className="contact_container">
        <h1 className="contact_title font-face-psb">Registro oficial</h1>
        <p className="contact_content font-face-psr">
          Completa el formulario y <br/>únete al grupo de whatsapp.
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
        <p style={{ color:'black',textAlign:'center'}}>
        Tus datos estarán protegidos.</p>
      </div>
      </div>
    </div>
  );
};

export default Webinar1;

