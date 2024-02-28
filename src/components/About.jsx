import React from "react";
import "../styles/about.css";

function About() {
  return (
    <div className="aboutContainer">
      <div className="leftSide">
        <h2>Photo goes here - import one</h2>
        <p>
          Turn this p tag into a span tag and an img tag in order to add the
          bg-clip gradient as a border animation to photo
        </p>
      </div>
      <div className="rightSide">
        <h2>Add downloadable resume underneath</h2>
        <p>
          I’m a Fullstack Developer who is passionate about the JavaScript
          ecosystem. I am most skilled and interested about Node (Express) and
          React. Growing up I've always been intrigued in technology and
          creating/building things. My passion began with building things out of
          Lego's, K'Nex, etc. My dream position is Fullstack Development that
          focuses on Javascript, Node, React and SQLite3.
        </p>
      </div>
    </div>
  );
}

export default About;
