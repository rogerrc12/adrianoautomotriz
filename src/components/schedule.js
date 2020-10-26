import React, { useState } from "react";
import emailjs from "emailjs-com";
import LoaderGif from "../assets/images/ajax-loader.gif";

const Schedule = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await emailjs.sendForm("adriano_45l8y0n", "contacto_7mji0bo", e.target, "user_TILXyUHe7eGvQh1iUjD1R");
      console.log(res);
      if (res.status === 200) {
        setSuccess("Hemos recibido tu mensaje. Pronto estaremos en contacto.");
      }
    } catch (error) {
      console.log(error);
      setError("Ha ocurrido un error enviando el mensaje, por favor intenta más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="service-schedule white-bg page-section-ptb">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <span>¿Posees algunas preguntas o consultas?</span>
              <h2>Obtén más información</h2>
              <div className="separator" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="gray-form">
              <div id={!success && !error ? "formmessage" : ""}>
                {error}
                {success}
              </div>
              <form className="form-horizontal" onSubmit={sendEmail}>
                <div className="contact-form row">
                  <div className="col-lg-4 col-sm-12">
                    <div className="form-group">
                      <input required id="name" type="text" placeholder="Nombre completo*" className="form-control" name="name" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12">
                    <div className="form-group">
                      <input required type="email" placeholder="Email*" className="form-control" name="email" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12">
                    <div className="form-group">
                      <input required type="text" placeholder="Teléfono*" className="form-control" name="phone" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea className="form-control input-message" placeholder="Escribe tu mensaje*" rows={7} name="message" defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <input type="hidden" name="action" defaultValue="sendEmail" />
                    <button
                      id="submit"
                      name="submit"
                      type="submit"
                      value="Send"
                      className="button red"
                      style={{ cursor: "pointer" }}
                      disabled={loading || success}
                    >
                      {" "}
                      Enviar mensaje{" "}
                    </button>
                  </div>
                </div>
              </form>
              {loading && (
                <div id="ajaxloader">
                  <img className="center-block" src={LoaderGif} alt="exitoso" />
                </div>
              )}
            </div>
          </div>
          <div className="col-md-4">
            <div className="opening-hours gray-bg">
              <h6>Horarios de atención</h6>
              <ul className="list-style-none">
                <li>
                  <strong>Domingo</strong> <span className="text-red"> cerrado</span>
                </li>
                <li>
                  <strong>Lunes</strong> <span> 8:00 AM a 6:00 PM</span>
                </li>
                <li>
                  <strong>Martes </strong> <span> 8:00 AM a 6:00 PM</span>
                </li>
                <li>
                  <strong>Míercoles </strong> <span> 8:00 AM a 6:00 PM</span>
                </li>
                <li>
                  <strong>Jueves </strong> <span> 8:00 AM a 6:00 PM</span>
                </li>
                <li>
                  <strong>Viernes </strong> <span> 8:00 AM a 6:00 PM</span>
                </li>
                <li>
                  <strong>Sábado </strong> <span> 8:00 AM a 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
