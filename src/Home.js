import React from "react";

import Button from "./Components/Buttons/Button.js";
import Card from "./Components/Card/Card.js";
import Hilo from "./Components/Images/hilo.jpg";
import Flower from "./Components/Images/ful.jpg";
import Textfield from "./Components/Textfield/textfield";
import Form from "./Components/Form/Form.js";

import SelectionBox from "./Components/SelectionBox/SelectionBox.js";
import HeroSection from "./Components/HeroSection/HeroSection.js";
import Slider from "./Components/Carousel/Slider";
import Colors from "./Components/Colors/Colors.js";
import Typography from "./Components/Typography/Typography.js";

import "./Home.css";
import Breadcrumbs from "./Components/Breadcrumbs/Breadcrumbs.js";
import { UnorderList, OrderList } from "./Components/List Group/List.js";

import CodeSnippet from "./CodeSnippet.js";
import { cardCode, cardCSS } from "./Components/Card/CardSnippet.js";
import { formCode, formCSS } from "./Components/Form/FormSnippet.js";
import {
  heroSectionCode,
  heroSectionCSS,
} from "./Components/HeroSection/HeroSectionSnippet.js";
import { buttonCode, buttonCSS } from "./Components/Buttons/ButtonSnippet.js";
import {
  textfieldCode,
  textfieldCSS,
} from "./Components/Textfield/textfieldSnippet.js";
import { listCode, listCSS } from "./Components/List Group/ListGropsSnippet.js";
import {
  selectionBoxCode,
  selectionBoxCSS,
} from "./Components/SelectionBox/SelectionBoxSnippet.js";

function Home() {
  return (
    <>
      <div className="home">
        <h2>Colors</h2>
        <div
          style={{ backgroundColor: "rgba(235, 235, 235, 1)", padding: "56px" }}
        >
          <Colors />
        </div>
        <h2>Typography</h2>
        <Typography />
        <h2 style={{ marginTop: "32px" }}>Buttons</h2>
        <div className="button__container">
          <Button name={"Button-P"} class={"button__primary"} />
        </div>

        <div className="button__container">
          <Button name={"Button-S"} class={"button__secondary"} />
        </div>
        <div className="button__container">
          <Button name={"Button-T"} class={"button__text"} />
        </div>

        <div style={{ display: "flex", margin: "48px" }}>
          <CodeSnippet code={buttonCode} codeLanguage={"HTML"} />
          <CodeSnippet code={buttonCSS} codeLanguage={"CSS "} />
        </div>

        <h2>Breadcrumbs</h2>
        <Breadcrumbs />
        <h2>Textfield</h2>
        <Textfield
          name={"label__textfield"}
          class={"textfield"}
          text={"Textfield"}
          type={"text"}
        />
        <Textfield
          name={"label__textfield"}
          class={"textfield__focus"}
          text={"Textfield Active"}
          type={"text"}
        />
        <Textfield
          name={"label__textfield-error"}
          class={"textfield__error"}
          text={"Textfield Error"}
          type={"text"}
        />
        <Textfield
          name={"label__textfield-disabled"}
          class={"textfield"}
          property={"true"}
          text={"Textfield Disabled"}
          type={"text"}
        />
        <div style={{ display: "flex", margin: "48px" }}>
          <CodeSnippet code={textfieldCode} codeLanguage={"HTML"} />
          <CodeSnippet code={textfieldCSS} codeLanguage={"CSS "} />
        </div>

        <h2>Checkbox/Radio button</h2>

        <SelectionBox type={"radio"} />
        <SelectionBox type={"Checkbox"} />
        <SelectionBox type={"radio"} name={"Radio Button"} />
        <SelectionBox type={"Checkbox"} name={"Checkbox"} />
        <div style={{ display: "flex", margin: "48px" }}>
          <CodeSnippet code={selectionBoxCode} codeLanguage={"HTML"} />
          <CodeSnippet code={selectionBoxCSS} codeLanguage={"CSS "} />
        </div>

        <h2>Card</h2>
        <div className="card">
          <Card Image={Flower} Alt={"Flower"} />
          <Card Image={Hilo} Alt={"leaves in pond"} />
        </div>
        <div style={{ display: "flex", margin: "48px" }}>
          <CodeSnippet code={cardCode} codeLanguage={"HTML"} />
          <CodeSnippet code={cardCSS} codeLanguage={"CSS "} />
        </div>

        <h2>Form</h2>
        <Form />
        <div style={{ display: "flex", margin: "48px" }}>
          <CodeSnippet code={formCode} codeLanguage={"HTML"} />
          <CodeSnippet code={formCSS} codeLanguage={"CSS "} />
        </div>
        <h2>List Group</h2>
        <h4>Unorder List</h4>
        <UnorderList
          items={["Learn React", "Learn Node.js", "Learn Laravel"]}
        />
        <h4> Order List</h4>
        <OrderList
          items={[
            "Learn React Native",
            "Learn Data structure and Algorithm",
            "Learn Reduxl",
          ]}
        />
        <div style={{ display: "flex", margin: "48px" }}>
          <CodeSnippet code={listCode} codeLanguage={"HTML"} />
          <CodeSnippet code={listCSS} codeLanguage={"CSS "} />
        </div>
        <h2>HeroSection</h2>
        <HeroSection
          text={
            "Add a touch of Beauty to your Home with our Stunning Pieces of Art."
          }
        />
        <div style={{ display: "flex", margin: "48px" }}>
          <CodeSnippet code={heroSectionCode} codeLanguage={"HTML"} />
          <CodeSnippet code={heroSectionCSS} codeLanguage={"CSS "} />
        </div>
        <h2>Carousel</h2>
        <div style={{ margin: "36px" }}>
          <Slider />
        </div>
      </div>
    </>
  );
}

export default Home;
