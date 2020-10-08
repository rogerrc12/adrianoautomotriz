import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import SectionHeader from "../components/sectionHeader"
import Schedule from "../components/schedule"
import ContactBoxes from "../components/contact/boxes"
import Information from "../components/contact/information"

const contacto = () => {
  return (
    <Layout location="/contacto">
      <SEO title="Contacto" />
      <SectionHeader sectionTitle="Contacto" bg="contacto" />
      <ContactBoxes />
      <Schedule />
      <Information />
    </Layout>
  )
}

export default contacto
