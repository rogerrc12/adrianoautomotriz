import React from "react";
import Car11 from "../../assets/images/car/11.png";
import { AiOutlineCar } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { GiCarKey } from "react-icons/gi";
import { RiWalletLine } from "react-icons/ri";

const about = () => {
  return (
    <section className="custom-block-3 white-bg page-section-ptb">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="title">
              <h3>Car dealer</h3>
            </div>
            <div className="content">
              <h2 className="text-red">10</h2>
              <strong>
                Everything you need to build an amazing dealership automotive
                responsive website.
              </strong>
              <p>
                Car Dealer is the best premium HTML5 Template. We provide
                everything you need to build an{" "}
                <b>Amazing dealership website</b> developed especially for car
                sellers, dealers or auto motor retailers.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={Car11} alt="car" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="feature-box-3">
              <div className="icon">
                <AiOutlineCar />
              </div>
              <div className="content">
                <h6>All brands </h6>
                <p>Simply Ipsum is lorem </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="feature-box-3">
              <div className="icon">
                <BsChatDots />
              </div>
              <div className="content">
                <h6>Free Support</h6>
                <p> Beatae dicta et optio</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="feature-box-3">
              <div className="icon">
                <GiCarKey />
              </div>
              <div className="content">
                <h6>Dealership</h6>
                <p>Iure, quidem maxime </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="feature-box-3">
              <div className="icon">
                <RiWalletLine />
              </div>
              <div className="content">
                <h6>Affordable</h6>
                <p>Quod magni recusandae </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
