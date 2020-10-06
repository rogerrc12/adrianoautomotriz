import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Slider from "../components/home/slider";
import About from "../components/home/about";
import Services from "../components/services";
import Testimonials from "../components/testimonials";
import Brands from "../components/home/brands";

const IndexPage = () => (
  <Layout location="/">
    <SEO title="Home" />

    <Slider />
    <About />
    <Services />
    <Brands />
    <Testimonials />
  </Layout>
);

export default IndexPage;
