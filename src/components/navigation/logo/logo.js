import React from "react";
import classes from "./logo.css";
import burgerLogo from "../../../../src/assets/images/burger-logo.png";

const logo = props => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="myBurger" />
  </div>
);

export default logo;
