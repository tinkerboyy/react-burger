import React from "react";
import Burger from "../../burger/burger";
import Button from "../../UI/button/button";

import classes from "./checkout-summary.css";

const checkoutSummary = props => (
  <div className={classes.CheckoutSummary}>
    <h1>We hope it tastes well</h1>
    <div style={{ width: "100%", height: "300px", margin: "auto" }}>
      <Burger ingredients={props.ingredients} />
    </div>
    <Button btnType="Danger" clicked={props.checkoutCancelled}>
      CANCEL
    </Button>
    <Button btnType="Success" clicked={props.checkoutContinued}>
      CONTINUE
    </Button>
  </div>
);

export default checkoutSummary;
