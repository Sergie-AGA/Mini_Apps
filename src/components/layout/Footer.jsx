import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer class="footer">© {currentYear} Mini-Apps by Sergie</footer>;
};

export default Footer;
