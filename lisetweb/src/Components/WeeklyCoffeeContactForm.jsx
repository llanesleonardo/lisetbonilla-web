import React, { useState } from "react";
import "../App.css";
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from "react-router-dom";
import { Spinner  } from "react-activity";
import "react-activity/dist/library.css";

const WeeklyCoffeeContactForm = () => {
  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [message,setMessage] = useState('');
  const [linkWhatsapp, setLinkWhatsapp] = useState(false);
  const [loading,setLoading] = useState(false);
  //const [recaptchaValue, setRecaptchaValue] = useState('');

/*
  const apiKey = import.meta.env.VITE_MC_API_KEY;
  const listId = import.meta.env.VITE_MC_LIST_ID;
*/
const navigate = useNavigate();
/*
const handleRecaptchaChange = (value) => {
  // This function will be called when the user interacts with reCAPTCHA
  console.log('reCAPTCHA value:', value);
  setRecaptchaValue(value);
};*/

  const handleSubmit = async event => {
    event.preventDefault();
  setLinkWhatsapp(false);
    if (!username.trim()) {
      setErrors(prevErrors => ({
        ...prevErrors,
        username: "Nombre es requerido.",
      }));
    }

    if (!lastname.trim()) {
      setErrors(prevErrors => ({
        ...prevErrors,
        lastname: "Apellido es requerido.",
      }));
    }

    if (!email) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: "El Correo electrónico es requerido.",
      }));
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: "Formato no es válido.",
      }));
    }

    if (!phone.trim()) {
      setErrors(prevErrors => ({
        ...prevErrors,
        phone: "El Teléfono es requerido",
      }));
    }

    
   /* if (!recaptchaValue.trim()) {
      setErrors(prevErrors => ({
        ...prevErrors,
        recaptchaValue: "Debes verificar reCAPTCHA.",
      }));
    }*/

    try {
      const objectValues ={
        "email_address": email,
        "status": "subscribed",
        "merge_fields": {
          "FNAME": username,
          "LNAME": lastname,
          "PHONE": phone
        }
      }

    //  console.log("import.meta.VITE_FUNCTIONS_KEY",import.meta.env.VITE_FUNCTIONS_KEY);
      setLoading(true);
      const response = await fetch(
        `https://lisetweb.azurewebsites.net/api/mailchimpCreateMember`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-functions-key":import.meta.env.VITE_FUNCTIONS_KEY
          },
          body: JSON.stringify(objectValues),
        }
      );

      const res = await response.json();
      //console.log(res);
      setLoading(false);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`); 
      }else{
        setMessage('Mensaje registrado y enviado.');
        setLinkWhatsapp(true);
      }

      //REDIRECT
      //navigate("/links-weeklycoffee");
      
    } catch (error) {
      console.log('error',error);
      prevErrors => ({
        ...prevErrors,
        server: "Algo salió mal, porfavor intentarlo en un momento.",
      })
    }
  };

  const handleInputUserName = event => {
    setErrors(prevErrors => ({
      ...prevErrors,
      username: "",
    }));
    const target = event.target;
    setUsername(target.value);
  };

  const handleInputLastName = event => {
    setErrors(prevErrors => ({
      ...prevErrors,
      lastname: "",
    }));
    const target = event.target;
    setLastname(target.value);
  };

  const handleInputEmail = event => {
    setErrors(prevErrors => ({
      ...prevErrors,
      email: "",
    }));
    const target = event.target;
    setEmail(target.value);
  };



  const handleInputPhone = event => {
    setErrors(prevErrors => ({
      ...prevErrors,
      phone: "",
    }));
    const target = event.target;
    setPhone(target.value);
  };

/*
  const handlereCaptcha = event => {
    setErrors(prevErrors => ({
      ...prevErrors,
      recaptchaValue: "",
    }));
    const target = event.target;
    setRecaptchaValue(target.value);
  };*/

  const handleLinkWhatsapp =(e)=>{
    e.preventDefault();
      navigate('/registerLinkAndMore');
  }

  return (
<div className="stardiv">
<p className="messageForm">{linkWhatsapp ? (<p className="linkwhatsapp"><a  target="_blank" href="https://chat.whatsapp.com/HNXRtl536nX4Dd8RCjcIru" >Click aquí - Whatsapp link</a></p>) : ('')}</p>
    <p className="messageForm">{linkWhatsapp ? (<p className="linkfacebook"><a  target="_blank" href="https://www.facebook.com/share/Zt51FCxdYyuVfT56/?mibextid=K35XfP" >Click aquí - Grupo de facebook link</a></p>) : ('')}</p>
   
    <div className="contactform_container">
       {!loading ? (<form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Nombre"
            value={username}
            onChange={handleInputUserName}
          />
          <br />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div>
          {" "}
          <input
            placeholder="Apellido"
            value={lastname}
            onChange={handleInputLastName}
          />
          <br />
          {errors.lastname && <span className="error">{errors.lastname}</span>}
        </div>
        <div>
          {" "}
          <input
            placeholder="Correo electrónico"
            value={email}
            onChange={handleInputEmail}
          />
          <br />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="complexFormBox_m">
                    <input
            placeholder="Teléfono"
            value={phone}
            onChange={handleInputPhone}
          />
        </div>
        <div className="complexFormBox">
          {" "}
          <input
            placeholder="Teléfono"
            value={phone}
            onChange={handleInputPhone}
          />
         <br />
         {/* {errors.phone && <span className="error">{errors.phone}</span>}
          <div className="complexFormBoxLevel2">
          <ReCAPTCHA
            sitekey="6LfYaRUqAAAAAIne6x_sz1KXR27Ajrml8r1g5wO_" // Replace with your actual reCAPTCHA site key
             onChange={handlereCaptcha} // Callback function when reCAPTCHA value changes
              />  
              {errors.phone && <span className="error">{errors.phone}</span>}
            <button type="submit" className="submitButton">
              Enviar
            </button>
          </div>
        </div>
        <div className="complexFormBox_m">
          {" "}
          <br />
          {errors.recaptchaValue && <span className="error">{errors.recaptchaValue}</span>}
          <div className="complexFormBoxLevel2">
          <ReCAPTCHA
            sitekey="6LfYaRUqAAAAAIne6x_sz1KXR27Ajrml8r1g5wO_" // Replace with your actual reCAPTCHA site key
             onChange={handleRecaptchaChange} // Callback function when reCAPTCHA value changes
              />  
          </div>*/}
        </div>
        <button type="submit" className="submitButton">
              Enviar
        </button>
      </form>) : (
        <Spinner
        color="#00afb7" size={32} speed={1}
         />
      )}
    </div>
    <div>
      
      
      <p className="messageForm">{message}</p>
      
      {errors.server && <span className="error">{errors.server}</span>}

    </div>
    </div>
  );
};

export default WeeklyCoffeeContactForm;
