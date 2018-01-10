import React from "react";
import classes from "./toolbar.css";
import Logo from "../logo/logo";
import NavigationItems from "../navigation-items/navigation-items";
import DrawerToggle from "../side-drawer/drawer-toggle";

const Toolbar = props => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
