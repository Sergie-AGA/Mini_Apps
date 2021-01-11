import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project: { title, icon, description, react, link } }) => {
  return (
    <div className="project">
      <div>
        <img
          src={icon}
          alt=""
          className="project__img"
          style={{ width: "60px" }}
        />
        {react ? (
          "Pending implementation"
        ) : (
          <a href={link} className="project__button" target="_blank">
            Access
          </a>
        )}
      </div>
      <div>
        <h3 className="project__title"> {title} </h3>
        <p className="project__description"> {description} </p>
      </div>

      {/* <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link> */}
    </div>
  );
};

export default Project;
