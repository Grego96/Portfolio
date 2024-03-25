import React from "react";
import MeDescripiton from "../meDescription/meDescription";
import MePhoto from "../mePhoto/mePhoto";
import "./me.css";

function me() {
  return (
    <div className="row me">
      <div className="col-lg-3">
        <MePhoto />
      </div>
      <div className="col-lg-9">
        <MeDescripiton />
      </div>
    </div>
  );
}

export default me;
