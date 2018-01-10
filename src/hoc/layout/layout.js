import React, { Component } from "react";
import Aux from "../aux/aux";
import Toolbar from "../../components/navigation/toolbar/toolbar";
import SideDrawer from "../../components/navigation/side-drawer/side-drawer";

import classes from "./layout.css";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: false
    };
  }

  showDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false
    });
  };

  sideDrawerTogglerHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerTogglerHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.showDrawerClosedHandler}
        />
        <main className={classes.content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
