import React from "react";
import Slider from "react-slick";
import bg from "../../../assets/images/bg/nosotros-bg.jpg";

const welcomeSlider = () => {
  const settings = {
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  };

  return (
    <div className="owl-carousel owl-theme">
      <Slider {...settings}>
        <div className="item">
          <img className="img-fluid" src={bg} alt="testing" />
        </div>
        <div className="item">
          <img className="img-fluid" src={bg} alt="testing" />
        </div>
        <div className="item">
          <img className="img-fluid" src={bg} alt="testing" />
        </div>
      </Slider>
    </div>
  );
};

export default welcomeSlider;
