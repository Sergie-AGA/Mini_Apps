import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ icon, title, toggleMenu, burgerMenu, activeMenu }) => {
  function handleClick() {
    toggleMenu(burgerMenu);
  }

  return (
    <Fragment>
      <nav className="navbar">
        <div className="navbar__main">
          <i className={icon} />
          <h1 className="navbar__title">{title}</h1>
        </div>
        <div className="burger-menu" onClick={handleClick}>
          <div className={burgerMenu}></div>
        </div>
        <ul className={activeMenu}>
          <li className="navbar__items__item">
            <Link to="/" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li className="navbar__items__item">
            <Link to="/about" onClick={handleClick}>
              About
            </Link>
          </li>
          <li className="navbar__items__item">
            <Link to="/more" onClick={handleClick}>
              More resources
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
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
