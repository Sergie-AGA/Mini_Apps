import React from "react";
import pageIdeasLogo from "../../assets/Page ideas logo.svg";

const More = () => {
  return (
    <section className="more">
      <div className="more__box">
        <a
          className="more__buttons"
          href="https://github.com/Sergie-AGA"
          target="_blank">
          <div className="more__buttons__container">
            <i className="fab fa-github" />
            <p className="more__buttons__label">GitHub</p>
          </div>
        </a>

        <a
          className="more__buttons"
          href="https://sergie-aga.github.io/Page_ideas/"
          target="_blank">
          <div className="more__buttons__container">
            <img
              src={pageIdeasLogo}
              alt="Page Ideas logo"
              className="more__buttons__icon"
            />
            <p className="more__buttons__label">Page Ideas</p>
          </div>
        </a>
        <a
          className="more__buttons"
          href="https://api-sea-by-sieger.herokuapp.com/"
          target="_blank">
          <div className="more__buttons__container">
            <i className="fas fa-ship" />
            <p className="more__buttons__label">API Sea</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default More;
