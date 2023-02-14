import React from "react";

import "./Colors.css";

function Colors() {
  return (
    <>
      <h6>Primary</h6>
      <div className="container">
        <div className="rectangle rectangle1"></div>
        <div className="rectangle rectangle2"></div>
        <div className="rectangle rectangle3"></div>
      </div>
      <h6>secondary</h6>
      <div className="container">
        <div className="rectangle rectangle4"></div>
        <div className="rectangle rectangle5"></div>
        <div className="rectangle rectangle6"></div>
      </div>
      <h6>Tertiary</h6>
      <div className="container">
        <div className="rectangle rectangle7"></div>
        <div className="rectangle rectangle8"></div>
        <div className="rectangle rectangle9"></div>
      </div>
    </>
  );
}

export default Colors;
