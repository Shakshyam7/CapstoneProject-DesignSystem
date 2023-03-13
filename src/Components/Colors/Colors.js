import React from "react";

import "./Colors.css";

function Colors() {
  return (
    <>
      <h6>Primary</h6>
      <div className="container">
        <div className="rectangle rectangle1">HEX-000000(37%)</div>
        <div className="rectangle rectangle2">HEX-000000(60%)</div>
        <div className="rectangle rectangle3">HEX-030303</div>
      </div>
      <h6>secondary</h6>
      <div className="container">
        <div className="rectangle rectangle4">HEX-FFFFFF(37%)</div>
        <div className="rectangle rectangle5">HEX-FFFFFF(60%)</div>
        <div className="rectangle rectangle6">HEX-FFFFFF(87%)</div>
      </div>
      <h6>Tertiary</h6>
      <div className="container">
        <div className="rectangle rectangle7">HEX-D1516F(60%)</div>
        <div className="rectangle rectangle8">HEX-D1516F(87%)</div>
        <div className="rectangle rectangle9">HEX-D1516F</div>
      </div>
    </>
  );
}

export default Colors;
