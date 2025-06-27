import React from "react";
import wa from "../assets/whatsapp.png";
import "../App.css";
import header from "../assets/header.png";
import phone from "../assets/phone.png";
import tiktok from "../assets/tiktok2.png";
import faceinsta from "../assets/faceinsta2.png";
import world from "../assets/world2.png";
import portada1 from "../assets/portada1.png";
import portada2 from "../assets/portada2.png";
import portada3 from "../assets/portada3.png";
import portada4 from "../assets/portada4.jpg";
import ResponsiveMenu from "../Components/ResponsiveMenu";
import Books from "../Components/Books";

const HomePage = () => {
  return (
    <>
      <div id="container">
        <div id="headerwrapper">
          <ResponsiveMenu />
          <div id="header" style={{ marginTop: "10px", borderRadius: "50px" }}>
            <img src={header} className="headerimg"style={{ border: "5px solid #d82e87",margin: "10px -4px"}} />
          </div>
        </div>

        <div id="maincontentwrapper" >
          <div
            id="maincontent"
            style={{ marginBottom: "50px", borderRadius: "10px",border: "5px solid #d82e87" }}>
<h1 className="title-desc">Soy Escritora y Conferencista</h1>

<p>
Por más de veinte años he acompañado a mujeres en su crecimiento y
transformación, ayudándolas a vivir en su máximo potencial dado
por Dios.
</p>

<p>
Promuevo la esencia de poder y grandeza que hay dentro de cada
mujer.
</p>

<p>
Yo igual que tú, he enfrentado mis propios miedos y complejos y he
podido diseñar mi poder personal y amor propio, a través de un
trabajo interno doloroso, pero necesario; implementé una nueva
psicología y forma de ver la vida para lograr resultados en mi
vida.
</p>

<p>
Estoy convencida que la confusión y estancamiento emocional,
físico y financiero, no es lo que Dios planeó para tu vida. Cuando
Dios te creó, no pensó en llevarte al sufrimiento y al dolor, su
propósito es que seas una mujer feliz, bendecida y plena en todas
las áreas de tu vida.
</p>

<p>
Por eso te comparto en mis cuatro libros y en mis talleres en
línea y presenciales, los principios poderosos que no fallan si
los aplicas reiteradamente.
</p>

<p>
Si estás dispuesta a trabajar en ti misma y le das la oportunidad
a Dios a ser parte de tu transformación, inevitablemente vivirás
una transformación poderosa a tal grado que ni tú misma te podrás
reconocer.
</p>

<p>
Cada mujer merece estar en contacto con las herramientas poderosas
que le ayudarán a trabajar en sí misma.
</p>

<p>
Date cuenta que tú eres la obra de arte que Dios está esculpiendo,
pero necesita tu participación, recuerda que él te hizo una mujer
maravillosa y con una esencia de poder y de grandeza, es el sello
y el ADN que Dios puso en ti.
</p>

<p>
Será una gran experiencia acompañarte en esta nueva etapa que
estás a punto de iniciar.
</p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "32px",
              }}
            >
              <a
                href="https://chat.whatsapp.com/HNXRtl536nX4Dd8RCjcIru"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#d82f87",
                  color: "#fff",
                  padding: "14px 28px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "1.1em",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  transition: "background 0.2s",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 32 32"
                  style={{ marginRight: "12px" }}
                  fill="#fff"
                >
                  <path d="M16 2.938c-7.285 0-13.188 5.903-13.188 13.188 0 2.326.602 4.6 1.745 6.593l-1.823 6.678a1.05 1.05 0 0 0 1.293 1.293l6.678-1.823A13.11 13.11 0 0 0 16 29.25c7.285 0 13.188-5.903 13.188-13.188S23.285 2.938 16 2.938zm0 2.125c6.105 0 11.063 4.958 11.063 11.063 0 6.105-4.958 11.062-11.063 11.062-2.095 0-4.15-.594-5.903-1.726a1.062 1.062 0 0 0-.697-.137l-5.032 1.373 1.373-5.032a1.062 1.062 0 0 0-.137-.697A10.91 10.91 0 0 1 4.937 16c0-6.105 4.958-11.063 11.063-11.063zm-4.25 6.375c-.378 0-.75.116-1.062.344-.776.573-1.27 1.53-1.27 2.5 0 2.957 2.406 5.893 4.344 7.406 1.938 1.513 3.86 2.094 4.75 2.094.97 0 1.927-.494 2.5-1.27a1.063 1.063 0 0 0-.125-1.406l-2.125-2.125a1.062 1.062 0 0 0-1.5 0l-.5.5c-.353.353-.917.353-1.27 0l-2.125-2.125c-.353-.353-.353-.917 0-1.27l.5-.5a1.062 1.062 0 0 0 0-1.5l-2.125-2.125a1.063 1.063 0 0 0-.75-.312z" />
                </svg>
                Únete al Grupo Esencia en WhatsApp
              </a>
            </div>
          </div>
        </div>
        {/* <div id="bookswrapper">
          <div id="books">
            <div className="titlebooks">
              <p>Cuenta con cuatro libros:</p>
            </div>
          </div>
          <div className="booklist_wrapper">
            <ul className="booklist">
              <li className="booklist_item">
                <img src={portada1} className="portadas" />

              </li>
              <li className="booklist_item">
                <img src={portada2} className="portadas" />
           
              </li>
              <li className="booklist_item">
                <img src={portada3} className="portadas" />
      
              </li>
              <li className="booklist_item">
                <img src={portada4} className="portadas" />

              </li>
            </ul>
            <div></div>
            <div className="waContainerpc">
              <a
                className="waLink"
                target="_blank"
                href="https://wa.me/15209919203?text=Estoy%20interesad@%20en%20alguno%20de%20tus%20libros"
              >
                <span>
                  <img className="waImg" src={wa} />{" "}
                </span>
              </a>
              <p> {`Mándame WhatsApp para adquirir tu libro.`}</p>
            </div>
            <div className="waContainermovil">
              <a
                className="waLink"
                target="_blank"
                href="https://wa.me/15209919203?text=Estoy%20interesad@%20en%20alguno%20de%20tus%20libros"
              >
                <span>
                  <img className="waImg" src={wa} />{" "}
                </span>
              </a>
              <p> {`Mándame WhatsApp para adquirir tu libro.`}</p>
            </div>
          </div>
        </div>  */}
        <div id="bookscontentwrapper">
          <Books />
        </div>
        <div id="businesscontactwrapper">
          <div id="businesscontact">
            {/**
        <div className="imagebusinesscontact">
        <img src={phone} className="imagebusinesscontact_img"/>
        </div>
        <div className="phonebusinesscontact">
        </div>
 */}

            <img src={phone} className="imagebusinesscontact_img" />
            <p>Para contrataciones: (520)991 9203</p>
          </div>
        </div>
        <div id="socialcontactwrapper">
          <div id="socialcontact">
            <div id="socialcontact1">
              <p>
                {" "}
                <img src={world} className="imagebusinesscontact_img1" />
                www.lisetbonilla.com
              </p>
            </div>
            <div id="socialcontact2">
              <p>
                {" "}
                <img src={faceinsta} className="imagebusinesscontact_img2" />
                Liset Bonilla
              </p>
            </div>
            <div id="socialcontact3">
              <p>
                {" "}
                <img src={tiktok} className="imagebusinesscontact_img3" />
                Liset Bonilla.422
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
