import React from "react";
import CountUp from "react-countup";
import { AiOutlineCar } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";

const counter = () => {
  return (
    <section className="counter counter-style-2 bg-red bg-1 bg-overlay-black-70 page-section-ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 item">
            <div className="counter-block text-left">
              <div className="separator" />
              <div className="info">
                <h6 className="text-white">Repuestos en stock</h6>
                <AiOutlineCar />
                <CountUp end={5000} duration={40} className="timer text-white" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 item">
            <div className="counter-block text-left">
              <div className="separator" />
              <div className="info">
                <h6 className="text-white">Proveedores activos</h6>
                <BsChatDots />
                <CountUp end={861} duration={35} className="timer text-white" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 item">
            <div className="counter-block text-left">
              <div className="separator" />
              <div className="info">
                <h6 className="text-white">Clientes felices</h6>
                <FaRegUserCircle />
                <CountUp end={789} duration={35} className="timer text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default counter;
