import React from "react";
import { Link } from "gatsby";
import LogoWhite from "../assets/images/logo-white.svg";

const Navigation = (props) => {
  return (
    <nav id='menu' className={`mega-menu ${props.opened ? "opened" : ""} ${props.location === "/" ? "nav-home" : ""}`}>
      {/* menu list items container */}
      <section className='menu-list-items'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              {/* menu logo */}
              <ul className='menu-logo'>
                <li>
                  <Link to='/'>
                    <img id='logo_dark_img' src={LogoWhite} alt='logo' />
                  </Link>
                  <div
                    className={`menu-mobile-collapse-trigger ${props.opened ? "active" : ""}`}
                    onClick={props.open}
                    onKeyPress={props.open}
                    role='menu'
                    tabIndex={0}
                  >
                    <span></span>
                  </div>
                </li>
              </ul>
              {/* menu links */}
              <ul className='menu-links'>
                {/* active class */}
                <li className={props.location === "/" ? "active" : ""}>
                  <Link to='/'>Inicio</Link>
                </li>
                <li className={props.location === "/acerca" ? "active" : ""}>
                  <Link to='/acerca'>Acerca</Link>
                </li>
                <li className={props.location === "/repuestos" ? "active" : ""}>
                  <Link to='/repuestos'>Repuestos</Link>
                </li>
                <li className={props.location === "/servicio-corporativo" ? "active" : ""}>
                  <Link to='/servicio-corporativo'>Servicio corporativo</Link>
                </li>
                <li className={props.location === "/contacto" ? "active" : ""}>
                  <Link to='/contacto'>Contacto</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navigation;
