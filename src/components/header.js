import React, { useState } from "react";
import PropTypes from "prop-types";
import Topbar from "./topbar";
import Navigation from "./Navigation";

const Header = ({ location }) => {
  const [opened, setOpened] = useState(false);

  const toggleNavHandler = () => setOpened((prevState) => !prevState);

  return (
    <header id='header' className={location === "/" ? "topbar-dark" : "defualt"}>
      <Topbar />

      <div className='menu'>
        <Navigation open={toggleNavHandler} opened={opened} location={location} />
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
