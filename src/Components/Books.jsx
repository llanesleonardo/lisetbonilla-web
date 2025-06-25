import React from 'react'
import portada1 from '../assets/portada1.png';
import portada2 from '../assets/portada2.png';
import portada3 from '../assets/portada3.png';
import portada4 from '../assets/portada4.jpg';
import StripeBuyButton from "./StripeBuyButton";

export default function Books() {
 
    const books = [
        {
          id: "buy_btn_1QrWWADfn64ZgLlpAgn8EI6v",
          title: "En las manos del padre",
        },
        {
          id: "buy_btn_1QrWdnDfn64ZgLlpAyAcbLDW",
          title: "Vive tu esencia de poder",
        },
        {
          id: "buy_btn_1QrWemDfn64ZgLlpChIwwwL0",
          title: "Nueva y atractiva",
        },
        {
          id: "buy_btn_1QqKPCDfn64ZgLlpENXRMHgg",
          title: "Reinvéntate en 7 pasos",
        },
      ];
 
    return (
    <div className='books'>       
     {books.map((book) => (
        <div key={book.id} class="bookwrapper" style={{backgroundColor:'transparent',border:'none'}}>
          <div >
          <h2 style={{color:'black'}}>{book.title}</h2>
          <StripeBuyButton buyButtonId={book.id} />
          </div>
          
        </div>
      ))}
        
    </div>
  )
}


/**
 * <div className='bookwrapper'>

            <div className='book'>
                <img src={portada1} className="portadas"/>
            </div>
            <div className='bookdesc'>
                <h3>REINVÉNTATE EN 7 PASOS</h3>
                <p>
                Si se te ha olvidado vivir por sumergirte en el deber, este libro es para ti .
                En cada capítulo encontrarás verdades que te harán reflexionar sobre tu propia vida, lo que va contigo y lo que no, tus sueños y anhelos estancados en el tiempo y cómo ponerlos en marcha desde ahora, desde tu nueva versión actualizada lista para el segundo tiempo del partido!
                </p>
                <br/>
                <a href="#" className='stripebutton'>
                Adquiérelo aquí
                </a>

            </div>

        </div>
        <div className='bookwrapper'>
            <div className='book'>
                <img src={portada2} className="portadas"/>
            </div>
            <div className='bookdesc'>
                <h3>EN LAS MANOS DEL PADRE</h3>
                <p>
                Embárcate en un viaje cálido de amor y sanacion donde encontrarás paz, calma y aceptación absoluta. Descubrirás a Dios como un padre que siempre ha estado y está contigo en todas las áreas de tu vida . Al leer éste libro te sentirás centrada y en confianza para seguir viviendo en paz y en armonía.     </p>
                <br/>
                <a href="#" className='stripebutton'>
                Adquiérelo aquí
                </a>
            </div>
        </div>
        <div className='bookwrapper'>
            <div className='book'>
                <img src={portada3} className="portadas"/>
            </div>
            <div className='bookdesc'>
                <h3>VIVE TU ESENCIA DE PODER</h3>
                <p>
                Éste libro es para mujeres que quieren conectar con su esencia de poder nuevamente.
                Te ayudará a identificar en dónde perdiste tu esencia y cómo recuperarla para vivir desde la valía personal y poniendo a funcionar todo el potencial que ha estado listo para salir y manifestarse .      </p>
                <br/>
                <a href="#" className='stripebutton'>
                Adquiérelo aquí
                </a>
            </div>
        </div>
        <div className='bookwrapper'>
            <div className='book'>
                <img src={portada4} className="portadas"/>
            </div>
            <div className='bookdesc'>
                <h3>NUEVA Y ATRACTIVA</h3>
                <p>
                Es una obra transformadora para mujeres que quieren hacer un extreme make over en su vida e ir por su mejor versión .
                Habla de todo lo que hay que sacar del closet emocional y mental y cómo integrar nuevos valores que aporten a tu brillo de mujer.      </p>
                <br/>
                <a href="#" className='stripebutton'>
                Adquiérelo aquí
                </a>
            </div>
        </div>
 * 
 */