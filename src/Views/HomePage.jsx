import React from 'react'
import wa from "../assets/whatsapp.png";
import '../App.css'
import header from '../assets/header.png'
import phone from '../assets/phone.png'
import tiktok from '../assets/tiktok2.png'
import faceinsta from '../assets/faceinsta2.png'
import world from '../assets/world2.png'
import portada1 from '../assets/portada1.png';
import portada2 from '../assets/portada2.png';
import portada3 from '../assets/portada3.png';
import portada4 from '../assets/portada4.jpg';
import ResponsiveMenu from '../Components/ResponsiveMenu';


 const HomePage = () => {
  return (
    <>
      <div id="container">
      <div id="headerwrapper">
        <ResponsiveMenu />
      <div id="header">
        
          <img src={header} className="headerimg"/>
          </div>
        </div>
        <div id="bookswrapper">
        <div id="books">
        <div className="titlebooks">
            <p>Cuenta con cuatro libros:</p>
            </div>
        </div>
        <div className="booklist_wrapper">
          <ul className="booklist">
            <li className="booklist_item"><img src={portada1} className="portadas"/></li>
            <li className="booklist_item"><img src={portada2} className="portadas" /></li>
            <li className="booklist_item"><img src={portada3} className="portadas" /></li>
            <li className="booklist_item"><img src={portada4} className="portadas" /></li>
          </ul>
          <div className="waContainerpc"><a className="waLink" target="_blank" href="https://wa.me/15209919203?text=Estoy%20interesad@%20en%20alguno%20de%20tus%20libros"><span><img className="waImg" src={wa} /> </span></a><p> {`Mándame WhatsApp para adquirir tu libro.`}</p></div>
          <div className="waContainermovil"><a className="waLink" target="_blank" href="https://wa.me/15209919203?text=Estoy%20interesad@%20en%20alguno%20de%20tus%20libros"><span><img className="waImg" src={wa} /> </span></a><p> {`Mándame WhatsApp para adquirir tu libro.`}</p></div>

        </div>
      </div>
      <div id="maincontentwrapper">
      <div id="maincontent">
          <p>Han sido de mucha aceptación por su aplicación práctica a la vida diaria del lector.</p>
          <p>Sus obras manejan un lenguaje claro y ameno y son usados en grupos de autoayuda y clínicas como el Hospital de higiene mental Dr. Nava (en Hermosillo Sonora).</p>
          <p>Ha colaborado como columnista en la revista estatal Boda y Vida en Sonora por seis años.</p>
          <p>También cuenta con cuatro discos con canciones de su autoría con letras de espiritualidad e inspiracionales para la audiencia.</p>
          <p>Liset está convencida que la vida no es solamente algo que te tocó vivir, sino que cada uno tiene la oportunidad de crear su vida de plenitud, felicidad y abundancia desde sus decisiones acertadas y autoestima reforzada y una fé en Dios como fuente de todo bien.</p>
          <p>Su misión es ayudar a la mujer a conectar con su esencia de poder y a convertirse en lo que siempre ha necesitado ser, trabajando sus miedos y creencias limitantes.</p>
          <p>Así mismo comparte la importancia de que la niña interior dentro de cada mujer sea sanada y desde la adulta que ahora es, aprenda a amarse y suelte los patrones que la llevan a repetir el dolor una y otra vez.</p>
          <p>Actualmente comparte talleres y conferencias y acompaña a grupos de alumnas a través de sus cursos online y presenciales.</p>
      </div>
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
        
        <img src={phone} className="imagebusinesscontact_img"/>
        <p>Para contrataciones: (520)991 9203</p>
   
      </div>
      </div>
      <div id="socialcontactwrapper">
      <div id="socialcontact">
      <div id="socialcontact1">
   
                <p>    <img src={world} className="imagebusinesscontact_img1"/>www.lisetbonilla.com</p>
        </div>
        <div id="socialcontact2">
                
                <p> <img src={faceinsta} className="imagebusinesscontact_img2"/>Liset Bonilla</p>
        </div>
        <div id="socialcontact3">
        
                <p> <img src={tiktok} className="imagebusinesscontact_img3"/>Liset Bonilla.422</p>
        </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default HomePage;