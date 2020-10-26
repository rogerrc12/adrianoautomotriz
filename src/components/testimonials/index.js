import React from "react"
import Slider from "./slider"
import { useStaticQuery, graphql } from "gatsby"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    {
      wordpress {
        testimonios {
          nodes {
            content
            author {
              autor
              cargo
            }
            featuredImage {
              node {
                sourceUrl
                slug
              }
            }
          }
        }
      }
    }
  `)

  const {
    wordpress: {
      testimonios: { nodes: testimonios },
    },
  } = data

  return (
    <section className="testimonial-3 white-bg page-section-ptb">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <span>Somos siempre su elección preferida</span>
              <h2>Nuestros Testimonios</h2>
              <div className="separator" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Slider testimonios={testimonios} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
