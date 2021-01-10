import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">© {currentYear} Mini-Apps by Sergie</footer>
  );
};

export default Footer;
