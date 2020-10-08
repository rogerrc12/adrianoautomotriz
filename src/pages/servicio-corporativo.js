import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import SectionHeader from "../components/sectionHeader"
import Welcome from "../components/corporate/welcome"
import Services from "../components/services"
import Counter from "../components/counter"
import Schedule from "../components/schedule"
import About from "../components/home/about"

const corporativo = () => {
  return (
    <Layout location="/servicio-corporativo">
      <SEO title="Servicio corporativo" />
      <SectionHeader sectionTitle="Servicio corporativo" bg="corporativo" />
      <Welcome />
      <Services />
      <Counter />
      <About />
      <Schedule />
    </Layout>
  )
}

export default corporativo
