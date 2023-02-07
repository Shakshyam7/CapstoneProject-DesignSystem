import React, { useState } from "react";
import Image from "./../Images/ship.jpg";
import { MdFavoriteBorder } from "react-icons/md";
import "./Card.css";

function Card() {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => setIsHovered(!isHovered);
  return (
    <>
      <div className="card__container">
        <img 
          src={Image} 
          alt="Painting" 
          width=" 350px" 
          height="378px" 
          onMouseOver={() => handleHover()}
          onMouseLeave = {()=> handleHover()}
          
        />
        {isHovered && (
            <div  className="wishlist__logo">
              <MdFavoriteBorder />
            </div>
        )}
      </div>
    </>
  );
}

export default Card;
