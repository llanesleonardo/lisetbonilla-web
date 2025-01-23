import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";

const WebinarContactForm = () => {
  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(""); // For showing status updates
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({});
    setLoading(true); // Start the spinner
    setStatusMessage("Enviando..."); // Initial message

    // Validation
    const validationErrors = {};
    if (!username.trim()) validationErrors.username = "Nombre es requerido.";
    if (!lastname.trim()) validationErrors.lastname = "Apellido es requerido.";
    if (!email) {
      validationErrors.email = "El Correo electrónico es requerido.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Formato no es válido.";
    }
    if (!phone.trim()) validationErrors.phone = "El Teléfono es requerido.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false); // Stop the spinner if there are errors
      return;
    }

    try {
      setLoading(true); // Start the spinner
    
      // Make the API call
      const response = await fetch(
        `https://lisetweb.azurewebsites.net/api/mailchimpCreateMember`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-functions-key": process.env.FUNCTIONS_KEY
          },
          body: JSON.stringify(objectValues),
        }
      );
    
      const res = await response.json();
      //console.log(res);
    
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    
      // If the API call is successful, proceed with the redirect process
      setTimeout(() => {
        setStatusMessage(
          "THANK YOU FOR YOUR DATA. YOU ARE BEING REDIRECTED TO A WELCOME PAGE."
        );
    
        // Start redirect after displaying the second message
        setTimeout(() => {
          navigate("/webinar-1-success"); // Redirect after 2 more seconds
          setLoading(false); // Stop the spinner after redirect
        }, 2000);
      }, 1000); // Initial 1-second delay
    
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        server: "Algo salió mal, por favor inténtelo en un momento.",
      }));
      setLoading(false); // Stop the spinner if there's an error
    }
    
  };

  return (
    <div className="stardiv">
      {loading ? (
        <div className="spinner-container">
          <Spinner color="#d82f87" size={50} speed={1} />
          <p className="status-message">{statusMessage}</p>
        </div>
      ) : (
        <div className="contactform_container">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                placeholder="Nombre"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              {errors.username && <span className="error">{errors.username}</span>}
            </div>
            <div>
              <input
                placeholder="Apellido"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              <br />
              {errors.lastname && <span className="error">{errors.lastname}</span>}
            </div>
            <div>
              <input
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div>
              <input
                placeholder="Teléfono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <br />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <button type="submit" className="submitButton">
              Enviar
            </button>
          </form>
          {errors.server && <span className="error">{errors.server}</span>}
          <p className="messageForm">{message}</p>
        </div>
      )}
    </div>
  );
};

export default WebinarContactForm;
