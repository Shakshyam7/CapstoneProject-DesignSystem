import React from "react";

import "./Colors.css";

function Colors() {
  return (
    <>
      <div>
        <div className="container">
          <h6>Primary</h6>
          <div className="primaryColorContainer">
            <div className="rectangle rectangle1">HEX-000000(37%)</div>
            <div className="rectangle rectangle2">HEX-000000(60%)</div>
            <div className="rectangle rectangle3">HEX-030303</div>
          </div>
        </div>
        <div className="container">
          <h6>secondary</h6>
          <div className="rectangle rectangle4">HEX-FFFFFF(37%)</div>
          <div className="rectangle rectangle5">HEX-FFFFFF(60%)</div>
          <div className="rectangle rectangle6">HEX-FFFFFF(87%)</div>
        </div>
        <div className="container">
          <h6>Tertiary</h6>
          <div className="rectangle rectangle7">HEX-D1516F(60%)</div>
          <div className="rectangle rectangle8">HEX-D1516F(87%)</div>
          <div className="rectangle rectangle9">HEX-D1516F</div>
        </div>
      </div>
    </>
  );
}

export default Colors;
