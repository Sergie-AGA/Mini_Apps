import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar">
      <div className="navbar__main">
        <i className={icon} />
        <h1 className="navbar__title">{title}</h1>
      </div>
      <ul className="navbar__items">
        <li className="navbar__items__item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar__items__item">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar__items__item">
          <Link to="/more">More resources</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Mini-apps by Sergie",
  icon: "fas fa-laptop-code navbar__icon",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
