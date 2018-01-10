import React from "react";
import BuildControl from "../build-control/build-control";
import classes from "./build-controls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
const BuildControls = props => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.addIngredients(ctrl.type)}
        remove={() => props.removeIngredients(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      onClick={props.ordered}
      className={classes.OrderButton}
      disabled={!props.purchasable}
    >
      Order Now
    </button>
  </div>
);

export default BuildControls;
