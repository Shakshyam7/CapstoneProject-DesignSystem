import React, { useState } from "react";

import Button from "./Components/Buttons/Button.js";
import Card from "./Components/Card/Card.js";
import Hilo from "./Components/Images/hilo.jpg";
import Flower from "./Components/Images/ful.jpg";
import Textfield from "./Components/Textfield/textfield";
import Form from "./Components/Form/Form.js";

import SelectionBox from "./Components/SelectionBox/SelectionBox.js";
import HeroSection from "./Components/HeroSection/HeroSection.js";
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
import themeCode from "./Components/Colors/colorSnippet.js";
import Footer from "./Components/Footer/Footer.js";
import Sidebar from "./Components/Sidebar.js/Sidebar.js";
import { BiMenuAltLeft } from "react-icons/bi";

function Home() {
  const [click, setClick] = useState(false);
  console.log(click);
  return (
    <>
      <div className="homepageContainer">
        <div className="homepageSidebarContainer">
          <div className="">
            {!click && (
              <button
                className="sidebarDisplayButton"
                onClick={() => setClick(!click)}
              >
                <BiMenuAltLeft className="sidebutton" />
              </button>
            )}
          </div>
          {click && (
            <Sidebar
              sidebarItems={[
                "Colors",
                "Typography",
                "Buttons",
                "Textfield",
                "Card",
                "BreadCrumbs",
                "List",
                "Checkbox/Radio",
                "HeroSection",
                "Form",
                "Footer",
              ]}
              onClick={() => setClick(false)}
            />
          )}
        </div>
        <Sidebar
          sidebarItems={[
            "Colors",
            "Typography",
            "Buttons",
            "Textfield",
            "Card",
            "BreadCrumbs",
            "List",
            "Checkbox/Radio",
            "HeroSection",
            "Form",
            "Footer",
          ]}
        />
        <div className="homepageContent">
          <h2 className="heading" id="colors">
            Colors
          </h2>
          <div className="homeColorContainer">
            <Colors />
          </div>
          <div className="divContainer">
            <CodeSnippet code={themeCode} codeLanguage={"React"} />
          </div>
          <h2 className="heading" id="typography">
            Typography
          </h2>
          <div className="typeContainer">
            <Typography />
          </div>
          <h2 className="heading" id="buttons">
            Buttons
          </h2>
          <div className="button__container" id="buttons">
            <Button name={"Button-P"} class={"button__primary"} />

            <Button name={"Button-S"} class={"button__secondary"} />

            <Button name={"Button-T"} class={"button__text"} />
          </div>

          <div className="divContainer">
            <CodeSnippet code={buttonCode} codeLanguage={"React"} />
            <CodeSnippet code={buttonCSS} codeLanguage={"CSS "} />
          </div>

          <h2 className="heading" id="breadcrumbs">
            Breadcrumbs
          </h2>
          <div className="componentContainer">
            <Breadcrumbs />
          </div>
          <h2 className="heading" id="textfield">
            Textfield
          </h2>
          <div className="homeTextfieldContainer">
            <Textfield
              name={"label__textfield"}
              className={"textfield"}
              text={"Textfield"}
              type={"text"}
            />
            <Textfield
              name={"label__textfield"}
              className={"textfield__focus"}
              text={"Textfield Active"}
              type={"text"}
            />
            <Textfield
              name={"label__textfield-error"}
              className={"textfield__error"}
              text={"Textfield Error"}
              type={"text"}
            />
            <Textfield
              name={"label__textfield-disabled"}
              className={"textfield"}
              property={"true"}
              text={"Textfield Disabled"}
              type={"text"}
            />
          </div>
          <div className="divContainer">
            <CodeSnippet code={textfieldCode} codeLanguage={"React"} />
            <CodeSnippet code={textfieldCSS} codeLanguage={"CSS "} />
          </div>

          <h2 className="heading" id="checkbox/radio">
            Checkbox/Radio button
          </h2>
          <div className="componentContainer">
            <SelectionBox type={"radio"} />
            <SelectionBox type={"Checkbox"} />
            <SelectionBox type={"radio"} name={"Radio Button"} />
            <SelectionBox type={"Checkbox"} name={"Checkbox"} />
          </div>
          <div className="divContainer">
            <CodeSnippet code={selectionBoxCode} codeLanguage={"React"} />
            <CodeSnippet code={selectionBoxCSS} codeLanguage={"CSS "} />
          </div>

          <h2 className="heading" id="card">
            Card
          </h2>
          <div className="card">
            <Card Image={Flower} Alt={"Flower"} />
            <Card Image={Hilo} Alt={"leaves in pond"} />
          </div>
          <div className="divContainer">
            <CodeSnippet code={cardCode} codeLanguage={"React"} />
            <CodeSnippet code={cardCSS} codeLanguage={"CSS "} />
          </div>

          <h2 className="heading" id="form">
            Form
          </h2>
          <div className="formContainer" id="form">
            <Form />
          </div>
          <div className="divContainer">
            <CodeSnippet code={formCode} codeLanguage={"React"} />
            <CodeSnippet code={formCSS} codeLanguage={"CSS "} />
          </div>
          <h2 className="heading" id="list">
            List Group
          </h2>
          <div className="componentContainer">
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
          </div>
          <div className="divContainer">
            <CodeSnippet code={listCode} codeLanguage={"React"} />
            <CodeSnippet code={listCSS} codeLanguage={"CSS "} />
          </div>
          <h2 className="heading" id="herosection">
            HeroSection
          </h2>
          <HeroSection
            text={
              "Add a touch of Beauty to your Home with our Stunning Pieces of Art."
            }
          />
          <div className="divContainer">
            <CodeSnippet code={heroSectionCode} codeLanguage={"React"} />
            <CodeSnippet code={heroSectionCSS} codeLanguage={"CSS "} />
          </div>
          <div id="footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
