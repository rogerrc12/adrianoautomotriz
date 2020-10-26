import React from "react";
import Slider from "react-slick";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
  <div
    {...props}
    className={"slider-arrow slider-prev" + (currentSlide === 0 ? " slick-disabled" : "")}
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
  >
    <FiArrowLeft />
  </div>
);
const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <div
    {...props}
    className={"slider-arrow slider-next" + (currentSlide === slideCount - 1 ? " slick-disabled" : "")}
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
  >
    <FiArrowRight />
  </div>
);

const HomeSlider = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    fade: true,
  };

  return (
    <section className="page-slider">
      <div className="slider">
        <Slider {...settings} className="slides">
          <div className="slide slide-1"></div>
        </Slider>
      </div>
    </section>
  );
};

export default HomeSlider;
