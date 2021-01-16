import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project: { title, icon, description, react, link } }) => {
  return (
    <div className="project">
      <div className="project__image-side">
        <img src={icon} alt="" className="project__image" />
        {react ? (
          "Pending implementation"
        ) : (
          <a href={link} className="project__button" target="_blank">
            Access
          </a>
        )}
      </div>
      <div className="project__text-side">
        <h3 className="project__title"> {title} </h3>
        <p className="project__description"> {description} </p>
      </div>
    </div>
  );
};

export default Project;
