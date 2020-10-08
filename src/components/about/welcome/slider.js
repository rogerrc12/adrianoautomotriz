import React from "react"
import Slider from "react-slick"

const welcomeSlider = props => {
  const settings = {
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  }

  return (
    <div className="owl-carousel owl-theme">
      <Slider {...settings}>
        <div className="item">
          <img
            className="img-fluid"
            src={props.image.sourceUrl}
            alt={props.image.slug}
          />
        </div>
      </Slider>
    </div>
  )
}

export default welcomeSlider
