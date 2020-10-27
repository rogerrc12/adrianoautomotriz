import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const boxes = () => {
  return (
    <section class='contact page-section-ptb white-bg pb-0'>
      <div class='container'>
        <div class='row'>
          <div class='col-md-12'>
            <div class='section-title'>
              <span>Si tienes alguna consulta</span>
              <h2>ponte en contacto!</h2>
              <div class='separator'></div>
            </div>
          </div>
        </div>
        <div class='row'>
          <div class='col-lg-4 col-md-6'>
            <div class='contact-box text-center'>
              <FaMapMarkerAlt />
              <h5>Dirección</h5>
              <p>Jirón Sucre 256, Imperial, Cañete – Lima – Perú</p>
            </div>
          </div>
          <div class='col-lg-4 col-md-6'>
            <div class='contact-box text-center'>
              <FaPhoneAlt />
              <h5>Teléfono</h5>
              <p>+51 937497797</p>
            </div>
          </div>
          <div class='col-lg-4 col-md-6'>
            <div class='contact-box text-center'>
              <FaEnvelope />
              <h5>Email</h5>
              <p> ventas@adrianoautomotriz.pe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default boxes;
