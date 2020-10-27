import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoIosHelpCircle } from "react-icons/io";
import { FaInfo } from "react-icons/fa";

const information = () => {
  return (
    <section className='contact page-section-ptb white-bg pt-0'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='feature-box-3'>
              <div className='icon'>
                <AiOutlineClockCircle />
              </div>
              <div className='content'>
                <h6>Horarios de atención </h6>
                <p>Los horarios de atención son referenciales y pueden variar sin previo aviso.</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='feature-box-3'>
              <div className='icon'>
                <IoIosHelpCircle />
              </div>
              <div className='content'>
                <h6>Centro de atención </h6>
                <p>Nuestro centro de atención está disponible para siempre atenderte de la mejor forma posible.</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='feature-box-3'>
              <div className='icon'>
                <FaInfo />
              </div>
              <div className='content'>
                <h6>Información inmediata </h6>
                <p>Si necesitas información o una consulta inmediata contáctanos al +51 937497797</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default information;
