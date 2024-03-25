import React from "react";
import "./mePhoto.css";
import Me from "../../img/yo.png";

function MePhoto() {
  return (
    <div className="mePhoto">
      <img className="photo" src={Me} />
    </div>
  );
}

export default MePhoto;
