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
import themeCode from "./Components/Colors/colorSnippet.js";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";

function Home() {
  return (
    <>
      <div className="homepageContainer">
        <Sidebar
          rootStyles={{
            [`.${sidebarClasses.container}`]: {
              backgroundColor: "#212529",
              width: 200,
              height: "100%",
              position: "fixed",
              paddingTop: "7rem",
            },
          }}
        >
          <Menu
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                // only apply styles on first level elements of the tree
                if (level === 0)
                  return {
                    color: disabled ? "#f5d9ff" : "rgb(255, 255, 255, 0.87)",
                    backgroundColor: active
                      ? "rgba(209, 81, 111, 0.87)"
                      : undefined,
                  };
              },
            }}
          >
            <SubMenu label="Style">
              <MenuItem> Colors </MenuItem>
              <MenuItem> Typography </MenuItem>
            </SubMenu>
            <MenuItem> Buttons</MenuItem>
            <MenuItem> Breadcrumbs</MenuItem>
            <MenuItem> Textfield</MenuItem>
            <MenuItem> Checkbox</MenuItem>
            <MenuItem> Card</MenuItem>
            <MenuItem> Form </MenuItem>
            <MenuItem> Hero Section</MenuItem>
            <MenuItem> Carousel</MenuItem>
          </Menu>
        </Sidebar>

        <div className="homepageContent">
          <h2>Colors</h2>
          <div
            style={{
              backgroundColor: "rgba(235, 235, 235, 1)",
              padding: "56px",
            }}
          >
            <Colors />
          </div>
          <div style={{ display: "flex", padding: "48px" }}>
            <CodeSnippet code={themeCode} codeLanguage={"React"} />
          </div>
          <h2>Typography</h2>
          <div className="typeContainer">
            <Typography />
          </div>
          <h2>Buttons</h2>
          <div className="button__container">
            <Button name={"Button-P"} class={"button__primary"} />
          </div>

          <div className="button__container">
            <Button name={"Button-S"} class={"button__secondary"} />
          </div>
          <div className="button__container">
            <Button name={"Button-T"} class={"button__text"} />
          </div>

          <div className="divContainer">
            <CodeSnippet code={buttonCode} codeLanguage={"React"} />
            <CodeSnippet code={buttonCSS} codeLanguage={"CSS "} />
          </div>

          <h2>Breadcrumbs</h2>
          <div className="componentContainer">
            <Breadcrumbs />
          </div>
          <h2>Textfield</h2>
          <div className="componentContainer">

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
            </div>
          <div className="divContainer">
            <CodeSnippet code={textfieldCode} codeLanguage={"React"} />
            <CodeSnippet code={textfieldCSS} codeLanguage={"CSS "} />
          </div>

          <h2>Checkbox/Radio button</h2>
          <div className = "componentContainer">
          <SelectionBox type={"radio"} />
          <SelectionBox type={"Checkbox"} />
          <SelectionBox type={"radio"} name={"Radio Button"} />
          <SelectionBox type={"Checkbox"} name={"Checkbox"} />
            </div>
          <div className="divContainer">
            <CodeSnippet code={selectionBoxCode} codeLanguage={"React"} />
            <CodeSnippet code={selectionBoxCSS} codeLanguage={"CSS "} />
          </div>

          <h2>Card</h2>
          <div className="card">
            <Card Image={Flower} Alt={"Flower"} />
            <Card Image={Hilo} Alt={"leaves in pond"} />
          </div>
          <div className="divContainer">
            <CodeSnippet code={cardCode} codeLanguage={"React"} />
            <CodeSnippet code={cardCSS} codeLanguage={"CSS "} />
          </div>

          <h2>Form</h2>
          <div className = "componentContainer">

          <Form />
            </div>
          <div className="divContainer">
            <CodeSnippet code={formCode} codeLanguage={"React"} />
            <CodeSnippet code={formCSS} codeLanguage={"CSS "} />
          </div>
          <h2>List Group</h2>
          <div className = "componentContainer">
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
          <h2>HeroSection</h2>
          <HeroSection
            text={
              "Add a touch of Beauty to your Home with our Stunning Pieces of Art."
            }
          />
          <div className="divContainer">
            <CodeSnippet code={heroSectionCode} codeLanguage={"React"} />
            <CodeSnippet code={heroSectionCSS} codeLanguage={"CSS "} />
          </div>
          <h2>Carousel</h2>
          <div style={{ margin: "36px" }}>
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
