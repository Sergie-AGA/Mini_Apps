import React, { Fragment, useState } from "react";
import Project from "./Project";
import customStickyNotesLogo from "../../assets/custom-sticky-notes.png";

const Projects = () => {
  let projectList = [];
  const [activeProjects, setProject] = useState(projectList);

  class ProjectTemplate {
    constructor(id, title, description, icon, react, link) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.icon = icon;
      this.react = react;
      this.link = link;
      ProjectTemplate.addInstance(this);
    }
    static addInstance(item) {
      projectList.push(item);
    }
    static getInstances() {
      return projectList;
    }
    static clearInstances() {
      projectList.length = 0;
    }
  }

  const project1 = new ProjectTemplate(
    0,
    "Custom Sticky Notes",
    "An application that allows the user to create notes that can be easily edited and customized in terms of colour, size, position, content and background-image, using modern practices of object-oriented Javascript (ES6) and SASS. It saves changes in local storage.",
    customStickyNotesLogo,
    false,
    "https://sergie-aga.github.io/vanilla-apps/custom-sticky-notes/index.html"
  );

  const project2 = new ProjectTemplate(
    1,
    "Placeholder project",
    "This is how the page will look with more projects",
    customStickyNotesLogo,
    false,
    "#"
  );

  const project3 = new ProjectTemplate(
    2,
    "Placeholder project",
    "This is how the page will look with more projects",
    customStickyNotesLogo,
    false,
    "#"
  );

  return (
    <Fragment>
      {activeProjects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </Fragment>
  );
};

export default Projects;
