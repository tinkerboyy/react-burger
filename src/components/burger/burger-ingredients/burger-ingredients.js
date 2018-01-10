import React, { Component } from "react";
import propTypes from "prop-types";

import classes from "./burger-ingredients.css";

class BurgerIngredients extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={classes.BreadBottom} />;
        break;
      case "bread-top":
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seed1} />
            <div className={classes.Seed2} />
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={classes.Meat} />;
        break;
      case "cheese":
        ingredient = <div className={classes.Cheese} />;
        break;
      case "bacon":
        ingredient = <div className={classes.Bacon} />;
        break;
      case "salad":
        ingredient = <div className={classes.Salad} />;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

BurgerIngredients.propTypes = {
  type: propTypes.string.isRequired
};

export default BurgerIngredients;
