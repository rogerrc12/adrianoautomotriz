import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import parser from "html-react-parser"
import { AiOutlineCar } from "react-icons/ai"
import { BsChatDots } from "react-icons/bs"
import { GiCarKey } from "react-icons/gi"

import Slider from "./slider"

const Welcome = () => {
  const data = useStaticQuery(graphql`
    {
      wordpress {
        nosotros(id: "historia", idType: SLUG) {
          content
          title
          featuredImage {
            node {
              sourceUrl
              slug
            }
          }
        }
      }
    }
  `)

  const {
    wordpress: { nosotros: historia },
  } = data

  return (
    <section className="welcome-4 page-section-ptb white-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="section-title">
              <span>Bienvenido a Adriano</span>
              <h2>{historia.title}</h2>
              <div className="separator" />
              {parser(historia.content)}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Slider image={historia.featuredImage.node} />
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

export default Welcome
