import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <>
      <button className={props.class}>{props.name}</button>
    </>
  );
}

export default Button;
