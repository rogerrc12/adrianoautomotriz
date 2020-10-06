import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import SectionHeader from "../components/sectionHeader";
import Welcome from "../components/about/welcome/welcome";
import Counter from "../components/counter";
import Testimonials from "../components/testimonials";

const acerca = () => {
  return (
    <Layout location="/acerca">
      <SEO title="Home" />
      <SectionHeader sectionTitle="Acerca de Adriano" />
      <Welcome />
      <Counter />
      <Testimonials />
    </Layout>
  );
};

export default acerca;
