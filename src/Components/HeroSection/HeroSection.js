import React from "react";

import Button from "../Buttons/Button";
import heroImage from "./../Images/moon.jpg";

import "./HeroSection.css";

function HeroSection(props) {
  return (
    <>
      <div className="heroContainer">
        <div className="textContainer">
          <h1 className="heroText">{props.text}</h1>
          <Button class={"button__primary"} name={"Explore"} />
          <Button class={"button__text"} name={"View"} />
        </div>
        <img src={heroImage} alt="Moonlight" width="400" height="300" />
      </div>
    </>
  );
}

export default HeroSection;
