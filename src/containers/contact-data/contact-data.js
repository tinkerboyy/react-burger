import React, { Component } from "react";
import Button from "../../components/UI/button/button";
import classes from "./contact-data.css";

class ContactData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      address: {
        street: "",
        postalCode: ""
      }
    };
  }

  orderHandler = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h1>Enter Your Contact Details</h1>
        <form>
          <input className={classes.Input} type="text" name="name" />
          <input className={classes.Input} type="email" name="email" />
          <input className={classes.Input} type="text" name="street" />
          <input className={classes.Input} type="text" name="postalCode" />
          <Button btnType="Success" clicked={this.orderHandler}>
            ORDER
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
