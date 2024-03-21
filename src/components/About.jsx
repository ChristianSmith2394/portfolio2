import React from "react";
import "../styles/about.css";
import selfie from "../assets/portImages/self.png";
import myResume from "../assets/Resume/CompletedResume.pdf";

function About() {
  return (
    <div className="aboutContainer">
      <div className="leftSide">
        <img src={selfie} className="photoBox" />
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
        <a href={myResume} className="btn" download="CompletedResume.pdf">
          {" "}
          Download My Resume{" "}
        </a>
      </div>
    </div>
  );
}

export default About;
