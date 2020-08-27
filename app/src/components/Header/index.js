import React from "react";
import "./style.css";

function Header(props) {
  return (
    <header>
      <h1>Welcome to Clicky Game!</h1>
      <h2>Click on an image to earn points, but don't click an image more than once!</h2>
    </header>
  );
}

export default Header;