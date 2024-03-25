import React from "react";
import "./nav.css";

function nav() {
  return (
    <div className="nav">
      <div className="logo">
        <spam className="g">G</spam>
        <spam className="h">H</spam>
      </div>
      <div className="nav-items">
        <p className="item">Projects</p>
        <p className="item">Cantact</p>
        <p className="item">GitHub</p>
      </div>
    </div>
  );
}

export default nav;
