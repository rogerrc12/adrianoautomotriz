import React from "react";
import parser from "html-react-parser";
import { useStaticQuery, graphql } from "gatsby";
import Features from "./features";

const About = () => {
  const data = useStaticQuery(graphql`
    {
      wordpress {
        nosotrosBy(slug: "nuestros-servicios") {
          content
          title
          featuredImage {
            node {
              sourceUrl
              title
            }
          }
          servicios {
            listaservicios {
              icon
              titulo
              descripcion
            }
          }
        }
      }
    }
  `);

  const {
    wordpress: { nosotrosBy: nosotros },
  } = data;

  return (
    <section className="welcome-3 white-bg page-section-ptb">
      <div className="container">
        <div className="row about custom-block-2">
          <div className="col-md-6">
            <h2>{nosotros.title}</h2>
            {parser(nosotros.content)}
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid center-block"
              src={nosotros.featuredImage.node.sourceUrl}
              alt={nosotros.featuredImage.node.title}
            />
          </div>
        </div>
        <div className="row">
          {nosotros.servicios.listaservicios.map((servicio, i) => (
            <Features
              icon={servicio.icon}
              key={servicio.icon}
              className={i === 0 ? "active" : ""}
            >
              <div className="content">
                <h5>{servicio.titulo}</h5>
                <p>{servicio.descripcion}</p>
              </div>
            </Features>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
