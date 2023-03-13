import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="footerLogo">ArtShop</div>
        <div className="copyrightText">
        copyright &copy; {new Date().getFullYear()}-ArtShop. All rights Reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
