import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FiClock, FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-12'>
            <div className='topbar-left text-lg-left text-center'>
              <ul className='list-inline'>
                <li>
                  {" "}
                  <FaRegEnvelope /> <a href='mailto:ventas@adrianoautomotriz.pe'>ventas@adrianoautomotriz.pe</a>
                </li>
                <li>
                  {" "}
                  <FiClock /> Lun - Vie 08:00 - 18:00. Sábados 08:00 - 18:00
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-6 col-md-12'>
            <div className='topbar-right text-lg-right text-center'>
              <ul className='list-inline'>
                <li>
                  <FiPhone /> +51 937497797
                </li>
                <li>
                  <a href='https://www.facebook.com/Repuestos-Adriano-SAC-111537727387718' target='_blank' rel='noopener noreferrer'>
                    <FaFacebookF />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
