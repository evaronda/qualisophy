import React from "react";
import './Contact.css';
import Swal from 'sweetalert2';
import { contactForms } from './contactFormsData';

const ContactForm = ({ formId }) => {
  const formConfig = contactForms.find(f => f.id === formId);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    try {
      const response = await fetch(import.meta.env.VITE_REACT_APP_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      if (response.ok) {
        Swal.fire({
          title: "Mensaje enviado con éxito!",
          text: "Mensaje enviado!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error al enviar el mensaje",
          text: "Por favor, inténtelo de nuevo más tarde.",
          icon: "error"
        });
      }
    } catch {
      Swal.fire({
        title: "Error de conexión",
        text: "No se pudo enviar el mensaje. Verifique su conexión a internet.",
        icon: "error"
      });
    }
  };

  if (!formConfig) return <div>Formulario no encontrado</div>;

  return (
    <section className="contact">
      <form onSubmit={onSubmit}>
        <h2>{formConfig.title}</h2>
        {formConfig.fields.map(field => (
          <div className="input-box" key={field.name}>
            <label>{field.label}</label>
            {field.type === 'textarea' ? (
              <textarea
                name={field.name}
                className="field mess"
                placeholder={field.placeholder}
                required={field.required}
              />
            ) : field.type === 'select' ? (
              <select
                name={field.name}
                className="field"
                required={field.required}
                defaultValue=""
              >
                <option value="" disabled>{field.placeholder}</option>
                {field.options && field.options.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                className="field"
                placeholder={field.placeholder}
                name={field.name}
                required={field.required}
              />
            )}
          </div>
        ))}
        <input type="hidden" name="formType" value={formConfig.formType} />
        <button type="submit">{formConfig.buttonText}</button>
      </form>
    </section>
  );
};

export default ContactForm;
