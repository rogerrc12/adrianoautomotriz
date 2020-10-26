import React from "react";
import { Link } from "gatsby";
import parser from "html-react-parser";
import { useStaticQuery, graphql } from "gatsby";

const Services = () => {
  const data = useStaticQuery(graphql`
    {
      wordpress {
        servicios {
          nodes {
            excerpt
            title
            content
            slug
            addons {
              icono
              image {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `);

  const {
    wordpress: {
      servicios: { nodes: servicios },
    },
  } = data;

  return (
    <section className="page-section-ptb white-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <span>¿Que ofrecemos?</span>
              <h3>Servicios</h3>
            </div>
          </div>
        </div>
        <div className="row">{<Service servicios={servicios} />}</div>
      </div>
    </section>
  );
};

const Service = (props) =>
  props.servicios.map((servicio) => (
    <div className="col-lg-4 col-md-6 services" key={servicio.title}>
      <Link to={`/servicio/${servicio.slug}`}>
        <div className="content-box-7">
          <div className="content-box-img">
            <img className="img-fluid center-block" src={servicio.addons.image.sourceUrl} alt={servicio.title} />
            <div className="info">
              <i className="flaticon-travel" />
              <h6 className="text-white">{servicio.title}</h6>
              {parser(servicio.excerpt)}
            </div>
          </div>
        </div>
      </Link>
    </div>
  ));

export default Services;
