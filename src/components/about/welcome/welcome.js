import React from "react"
import { AiOutlineCar } from "react-icons/ai"
import { BsChatDots } from "react-icons/bs"
import { GiCarKey } from "react-icons/gi"

import Slider from "./slider"

const welcome = () => {
  return (
    <section className="welcome-4 page-section-ptb white-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="section-title">
              <span>Bienvenido a Adriano</span>
              <h2>HISTORIA</h2>
              <div className="separator" />
              <p>
                Automotriz y Servicio Adriano nace como un proyecto familiar,
                iniciamos en Setiembre del 2008, en búsqueda de nuevas
                oportunidades de negocio y lo estamos logrando, unas de las
                estrategias más importantes en nuestro emprendimiento es la
                calidad de los repuestos y la atención a nuestros cliente, esto
                ayudo a fidelizar a nuestros clientes. La misión de Autopartes
                Adriano es brindar los mejores repuestos, calidad y precio. Esto
                lo haremos con alianzas estratégicas para importar los
                repuestos. Nuestra Visión es ofrecer a nuestros clientes{" "}
                <strong>más de 5000 productos multimarca</strong> para el
                mantenimiento y seguridad de vehículos livianos y pesados,
                además de ser los distribuidores más importantes del Sur Chico.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Slider />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="feature-box text-center">
              <div className="icon">
                <AiOutlineCar />
              </div>
              <div className="content">
                <h6>Repuestos Originales</h6>
                <p>
                  Contamos con las mejores marcas del mundo automotor que
                  satisfagan sus necesidades.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-box text-center">
              <div className="icon">
                <BsChatDots />
              </div>
              <div className="content">
                <h6>Confiables</h6>
                <p>
                  Manejamos repuestos automotrices de altísima calidad para las
                  diferentes marcas de vehículos livianos y pesados del mercado.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-box text-center">
              <div className="icon">
                <GiCarKey />
              </div>
              <div className="content">
                <h6>Garantía</h6>
                <p>
                  Al comprar con nosotros le ofrecemos la confianza de contar
                  con garantía en todos en nuestros repuestos originales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default welcome
