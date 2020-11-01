import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import SectionHeader from "../components/sectionHeader";
import Services from "../components/services";
import Counter from "../components/counter";
import Schedule from "../components/schedule";

const repuestos = () => {
  return (
    <Layout location='/repuestos'>
      <SEO title='Repuestos' />
      <SectionHeader sectionTitle='Repuestos' bg='repuestos' />
      <Services />
      <Counter />
      <hr className='gray' />
      <Schedule />
    </Layout>
  );
};

export default repuestos;
