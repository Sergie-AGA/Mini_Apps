import React from "react";

const About = () => {
  return (
    <section className="about">
      <h2 className="about__heading">What is this?</h2>
      <p className="about__text">
        Welcome to Mini-apps by Sergie, a tool desgined to be an open-source
        host for small-applications to provide awareness and inspiration to your
        web projects.
      </p>
      <p className="about__text">
        Here you will be able to host and find a range of different applications
        made in Javascript and explore its functionalities. While the site is
        made in React JS, using it in a project is optional, in which case it
        should be created in an html file and linked with an anchor tag
        (&lt;a&gt;).
      </p>
      <p className="about__text">
        This is an ongoing project being constantly updated. Come back regularly
        for new exciting features and the latest knowledge on web development!
      </p>
      <h2 className="about__heading">Using the site</h2>
      <h3 className="about__subheading">Exploring a project</h3>
      <p className="about__text">
        The homepage displays the existing projects hosted here, where you can
        access them, as well as read some of the details about how they work and
        the technologies being used.
      </p>
      <h3 className="about__subheading">Filtering</h3>
      <p className="about__text">Feature coming soon!</p>
      <h3 className="about__subheading">More Resources</h3>
      <p className="about__text">
        Want to discover more interesting resources for ideas on what you can do
        on the web? This page is periodically updated with more options for you
        to explore.
      </p>
    </section>
  );
};

export default About;
