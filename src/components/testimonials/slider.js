import React from "react";
import Slider from "react-slick";
import parser from "html-react-parser";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = (props) => {
  const config = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "owl-dots",
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: () => (
      <button className="owl-dot">
        <span></span>
      </button>
    ),
  };

  return (
    <section className="page-slider testimonial-slider owl-carousel owl-theme">
      <div className="slider">
        <Slider {...config} className="slides">
          {props.testimonios.map((testimonio) => (
            <div className="item" key={testimonio.author.autor}>
              <div className="testimonial-block">
                <div className="row">
                  <div className="col-md-3">
                    <div className="testimonial-avtar">
                      <img
                        className="img-fluid center-block"
                        src={testimonio.featuredImage.node.sourceUrl}
                        alt={testimonio.featuredImage.node.slug}
                      />
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9">
                    <div className="testimonial-content">{parser(testimonio.content)}</div>
                    <div className="testimonial-info">
                      <h6>{testimonio.author.autor}</h6>
                      <span>{testimonio.author.cargo}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;
