import React from "react"
import './Contact.css'
import Swal from 'sweetalert2'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4dee9961-7fc5-4168-bfbf-248af5537b25");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent!",
                icon: "success"
              });
        }
      };

    return (
    <section className="contact">
        <form onSubmit={onSubmit}>
            <h2>CONTÁCTENOS</h2>
            <div className="input-box">
                <label>Nombre completo</label>
                <input type="text" className="field" placeholder="Ingrese su nombre" name="name" required/>
            </div>
            <div className="input-box">
                <label>Correo electrónico</label>
                <input type="email" className="field" placeholder="Ingrese su correo electrónico" name="email" required/>
            </div>
            <div className="input-box">
                <label>Su mensaje</label>
                <textarea name="message" className="field mess" placeholder="Ingrese su mensaje" required></textarea>
            </div>
            <button type="submit">Enviar mensaje</button>
        </form>
    </section>
  )
}

export default Contact