import React from "react";
import classes from "./navigation-items.css";
import NavigationItem from "../navigation-item/navigation-item";

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

export default navigationItems;
