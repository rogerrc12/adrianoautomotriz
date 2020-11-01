import React from "react";
import LogoWhite from "../assets/images/logo-white.svg";
import { Link } from "gatsby";
import { FaFacebook } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";

const footer = () => (
  <footer className='footer bg-3 bg-overlay-black-80'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='social'>
            <ul>
              <li>
                <a
                  className='facebook'
                  href='https://www.facebook.com/Repuestos-Adriano-SAC-111537727387718'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Facebook <FaFacebook />
                </a>
              </li>
              {/* <li>
                <a className="dribbble" href="/">
                  Instagram <FaInstagram />
                </a>
              </li>
              <li>
                <a className="behance" href="/">
                  Linkedin <FaLinkedin />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-4 col-md-6'>
          <div className='about-content'>
            <img className='img-fluid' id='logo-footer' src={LogoWhite} alt='Adriano' />
            <p>Ofrecemos a nuestros clientes más de 5000 productos multimarca para el mantenimiento y seguridad de vehículos livianos y pesados.</p>
          </div>
          <div className='address'>
            <ul>
              <li>
                <i className='fa fa-map-marker' />
                <span>Jirón Sucre 256, Imperial, Cañete – Lima – Perú</span>
              </li>
              <li>
                <i className='fa fa-phone' />
                <span>+51 937497797</span>
              </li>
              <li>
                <i className='fa fa-envelope-o' />
                <span>ventas@adrianoautomotriz.pe</span>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-lg-4 col-md-6'>
          <div className='usefull-link'>
            <h6 className='text-white'>Menu</h6>
            <ul>
              <li>
                <Link to='/'>
                  <RiArrowRightSLine /> Inicio
                </Link>
              </li>
              <li>
                <Link to='/acerca'>
                  <RiArrowRightSLine /> Acerca
                </Link>
              </li>
              <li>
                <Link to='/repuestos'>
                  <RiArrowRightSLine /> Repuestos
                </Link>
              </li>
              <li>
                <Link to='/servicio-corporativo'>
                  <RiArrowRightSLine /> Servicio corporativo
                </Link>
              </li>
              <li>
                <Link to='/contacto'>
                  <RiArrowRightSLine /> Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-lg-4 col-md-6'>
          <div className='news-letter'>
            <h6 className='text-white'>Suscribete</h6>
            <p>Mantente al dia de nuestras promociones y descuentos en nuestro stock.</p>
            <form className='news-letter'>
              <input type='email' placeholder='Ingresa tu correo' className='form-control placeholder' />
              <a className='button red' href='/'>
                Suscribirme
              </a>
            </form>
          </div>
        </div>
      </div>
      <hr />
      <div className='copyright'>
        <div className='row'>
          <div className='col-lg-6 col-md-12'>
            <div className='text-lg-left text-center'>
              <p>
                © Copyright 2020 Desarrollado por Roger Rengifo -{" "}
                <a href='http://www.ikigaimarketer.com/' target='_blank' rel='noreferrer noopener'>
                  Ikigai Marketer
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default footer;
