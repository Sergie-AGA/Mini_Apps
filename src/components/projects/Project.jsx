import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project: { title, icon } }) => {
  return (
    <div className="project">
      <img src={icon} alt="" className="round-img" style={{ width: "60px" }} />
      <h3> {title} </h3>
      <div>
        {/* <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link> */}
      </div>
    </div>
  );
};

export default Project;
