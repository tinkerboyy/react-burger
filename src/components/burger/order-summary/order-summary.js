import React, { Component } from "react";
import Aux from "../../../hoc/aux/aux";
import Button from "../../UI/button/button";

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log("order summary");
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>
            {igKey}: {this.props.ingredients[igKey]}
          </span>
        </li>
      );
    });

    return (
      <Aux>
        <h3>Order Summary</h3>
        <p>A delicious burger with following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>Continue to checkout ?</p>
        <Button clicked={this.props.purchaseCanceled} btnType="Danger">
          Cancel
        </Button>
        <Button clicked={this.props.purchaseContinue} btnType="Success">
          Continue
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
