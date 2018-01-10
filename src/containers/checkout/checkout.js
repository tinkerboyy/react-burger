import React, { Component } from "react";
import { Route } from "react-router-dom";

import CheckoutSummary from "../../components/orders/checkout-summary/checkout-summary";
import ContactData from "../contact-data/contact-data";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 1,
        meat: 1,
        cheese: 1,
        bacon: 1
      }
    };
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    let ingredients = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }
    this.setState({ ingredients: ingredients });
  }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelHandler}
          checkoutContinued={this.checkoutContinueHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={() => <ContactData ingredients={this.state.ingredients} />}
        />
      </div>
    );
  }
}

export default Checkout;
