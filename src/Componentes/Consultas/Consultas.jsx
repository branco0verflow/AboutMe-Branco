import React, { useState } from "react";
import emailjs from "emailjs-com";
import './Consultas.css';

const Consultas = (props) => {
  const isEnglish = props.isEnglish
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "",
    message: "",
    phone_id: "",
    email_id: "",
    reply_to: ""
  });

  const [successMessage, setSuccessMessage] = useState(""); // Estado para el mensaje de éxito

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_p0emtmc', // Reemplaza con tu Service ID de EmailJS
      'template_8crmxkl', // Reemplaza con tu Template ID de EmailJS
      formData,
      '2xRfzLPMz2jVK17og' // Reemplaza con tu User ID de EmailJS
    )
      .then(() => {
        setSuccessMessage("Consulta enviada exitosamente");
        setFormData({
          from_name: "",
          to_name: "",
          message: "",
          phone_id: "",
          email_id: "",
          reply_to: ""
        });
      })
      .catch((error) => {
        console.error("Error enviando la consulta: ", error);
      });
  };

  return (
    <div className="consultas-form">
      <form id="form" onSubmit={handleSubmit}>
        {isEnglish ? <h2>Contact Me</h2> : <h2>Contactar</h2>}

        <div className="field">
          {isEnglish ? <label htmlFor="from_name">Name:</label> : <label htmlFor="from_name">Nombre:</label>}
          <input
            type="text"
            name="from_name"
            id="from_name"
            placeholder={isEnglish ? "Your name" : "Tu nombre"}
            onChange={handleChange}
            value={formData.from_name}
            required
          />
        </div>

        <div className="field">
        {isEnglish ? <label htmlFor="from_name">Last name:</label> : <label htmlFor="from_name">Apellido:</label>}
          <input
            type="text"
            name="to_name"
            id="to_name"
            placeholder={isEnglish ? "Last name" : "Apellido"}
            onChange={handleChange}
            value={formData.to_name}
            required
          />
        </div>

        <div className="field">
        {isEnglish ? <label htmlFor="from_name">Phone number (Optional):</label> : <label htmlFor="from_name">Teléfono (Opcional):</label>}
          <input
            type="text"
            name="phone_id"
            id="phone_id"
            placeholder={isEnglish ? "+598 001 234" : "+598 001 234"}
            onChange={handleChange}
            value={formData.phone_id}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="email_id">Email:</label>
          <input
            type="text"
            name="email_id"
            id="email_id"
            placeholder={isEnglish ? "Email..." : "Correo Electrónico..."}
            onChange={handleChange}
            value={formData.email_id}
            required
          />
        </div>

        <div className="field">
        {isEnglish ? <label htmlFor="from_name">Let Me Know How I Can Make an Impact:</label> : <label htmlFor="from_name">Cuéntame cómo puedo contribuir:</label>}
          <textarea
            name="message"
            id="message"
            placeholder={isEnglish ? "Write here how can I help you..." : "Escribe aquí en que puedo ayudarte..."}
            onChange={handleChange}
            value={formData.message}
            required
            rows="5"  
          />
        </div>



        <input type="submit" id="button" value={isEnglish ? "Send" : "Enviar Consulta"} />
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>} {/* Mostrar el mensaje de éxito */}
    </div>
  );
};

export default Consultas;