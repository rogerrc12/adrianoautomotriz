import { Link } from "gatsby";
import { FaRegEnvelope } from "react-icons/fa";
import { FiClock, FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import PropTypes from "prop-types";
import React from "react";
import LogoWhite from "../assets/images/logo-white.svg";
import Logo from "../assets/images/logo.svg";

const Header = ({ location }) => (
  <header id='header' className={location === "/" ? "topbar-dark" : "defualt"}>
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

    <div className='menu'>
      {/* menu start */}
      <nav id='menu' className='mega-menu'>
        {/* menu list items container */}
        <section className='menu-list-items'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                {/* menu logo */}
                <ul className='menu-logo'>
                  <li>
                    <Link to='/'>
                      <img id='logo_dark_img' src={location === "/" ? Logo : LogoWhite} className={location === "/" ? "logo-black" : ""} alt='logo' />
                    </Link>
                    <div className='menu-mobile-collapse-trigger'>
                      <span></span>
                    </div>
                  </li>
                </ul>
                {/* menu links */}
                <ul className='menu-links'>
                  {/* active class */}
                  <li className={location === "/" ? "active" : ""}>
                    <Link to='/'>Inicio</Link>
                  </li>
                  <li className={location === "/acerca" ? "active" : ""}>
                    <Link to='/acerca'>Acerca</Link>
                  </li>
                  <li className={location === "/repuestos-personalizados" ? "active" : ""}>
                    <Link to='/repuestos-personalizados'>Repuestos</Link>
                  </li>
                  <li className={location === "/servicio-corporativo" ? "active" : ""}>
                    <Link to='/servicio-corporativo'>Servicio corporativo</Link>
                  </li>
                  <li className={location === "/contacto" ? "active" : ""}>
                    <Link to='/contacto'>Contacto</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </nav>
      {/* menu end */}
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
