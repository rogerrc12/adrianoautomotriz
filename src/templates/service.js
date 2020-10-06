import React from "react"
import parser from "html-react-parser"
import Layout from "../components/layout"
import SEO from "../components/seo"

import SectionHeader from "../components/sectionHeader"
import Counter from "../components/counter"
import Schedule from "../components/schedule"

const Service = props => {
  const servicio = props.pageContext.servicio

  console.log(servicio)

  return (
    <Layout location={`/servicio/${servicio.slug}`}>
      <SEO title={servicio.title} />
      <SectionHeader sectionTitle={servicio.title} />

      <section className="service-center white-bg page-section-ptb">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4>{servicio.title}</h4>
              {parser(servicio.content)}
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid center-block"
                src={servicio.featuredImage.node.sourceUrl}
                alt={servicio.title}
              />
            </div>
          </div>
        </div>
      </section>
      <Counter />
      <Schedule />
    </Layout>
  )
}

export default Service
