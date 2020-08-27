import React from "react";
import "./style.css";
import Logo from "./react-background.png"

function Footer(props) {
  return (
    <footer>
        <img src={Logo} alt="Logo" className="left"></img>
            <h3>Clicky Game!</h3>
        <img src={Logo} alt="Logo" className="right"></img>
    </footer>
  );
}

export default Footer;