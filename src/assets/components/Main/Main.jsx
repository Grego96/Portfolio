import React from "react";
import Me from "../me/me.jsx";
import Nav from "../nav/nav.jsx";
import Projects from "../projects/projects.jsx";
import "./main.css";

function main() {
  return (
    <div className="main">
      <div className="container">
        <Nav />
        <Me />
        <Projects />
      </div>
    </div>
  );
}

export default main;
