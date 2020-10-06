import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Brands = () => {
  const data = useStaticQuery(graphql`
    {
      wordpress {
        marcas(last: 12) {
          nodes {
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            title
          }
        }
      }
    }
  `);

  const {
    wordpress: {
      marcas: { nodes: marcas },
    },
  } = data;

  return (
    <section className="bg-11">
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-lg-6 col-md-12"></div>
          <div className="col-lg-6 col-md-12 gray-bg">
            <div className="client-box border ">
              <div className="section-title text-left">
                <span>Trabajamos con</span>
                <h3>Todas las marcas de vehiculos livianos y pesados, incluyendo:</h3>
              </div>
              <ul className="list-unstyled">
                {marcas.map((value) => (
                  <li key={value.title}>
                    <img
                      className="img-fluid center-block"
                      src={value.featuredImage.node.sourceUrl}
                      alt={value.title}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
