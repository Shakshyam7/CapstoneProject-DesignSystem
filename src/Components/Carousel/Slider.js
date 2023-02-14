import React, { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

import Pond from "./../Images/pond.jpeg";
import Ship from "./../Images/ship.jpg";
import Trappist from "./../Images/Trappist.jpeg";
import Serenity from "./../Images/serenity.jpeg";
import Redforest from "./../Images/Red Forest.jpeg";

//This Is the code I download from React Simply Carousel
//https://www.npmjs.com/package/react-simply-carousel

function Slider() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "rgba(0, 0, 0, 0.87)",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "rgba(0, 0, 0, 0.87)",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div style={{ width:400, height:400, borderRadius: "50px"}}>
          <img src={Pond} alt="pond" width={400} height={400} />
        </div>
        <div style={{ width:400, height:400 }}>
          <img src={Redforest} alt="Red Forest" width={400} height={400} />
        </div>
        <div style={{ width:400, height:400 }}>
          <img src={Serenity} alt="Serenity" width={400} height={400} />
        </div>
        <div style={{ width:400, height:400 }}>
          <img src={Trappist} alt="Trappist" width={400} height={400} />
        </div>
        <div style={{ width:400, height:400 }}>
          <img src={Ship} alt="Ship" width={400} height={400} />
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default Slider;
