import React from "react";
import banner from "../images/banner.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        {/* this div is containing nothing but an image and some text inside it*/}
        <img className="banner mt-3" src={banner} alt="fruits" />
        <div className="header-all-text">
          <h1 className="header-all-text-h1">Fresh Fruit</h1>
          <p className="header-all-text-para">The best wholesale fruits' provider in the town</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
