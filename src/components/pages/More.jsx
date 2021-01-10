import React from "react";
import pageIdeasLogo from "../../assets/Page ideas logo.svg";

const More = () => {
  return (
    <section id="discoverSection">
      <div className="discover-box">
        <a
          className="discover-buttons"
          href="https://github.com/Sergie-AGA"
          target="_blank">
          <div className="discover-buttons__container">
            <i className="fab fa-github" />
            <p className="discover-buttons__label">GitHub</p>
          </div>
        </a>

        <a
          className="discover-buttons"
          href="https://sergie-aga.github.io/Page_ideas/"
          target="_blank">
          <div className="discover-buttons__container">
            <img
              src={pageIdeasLogo}
              alt="Page Ideas logo"
              className="discover-buttons__icon"
            />
            <p className="discover-buttons__label">Page Ideas</p>
          </div>
        </a>
        <a
          className="discover-buttons"
          href="https://api-sea-by-sieger.herokuapp.com/"
          target="_blank">
          <div className="discover-buttons__container">
            <i className="fas fa-ship" />
            <p className="discover-buttons__label">API Sea</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default More;
