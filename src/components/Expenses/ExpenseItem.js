import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  useState();
  let title = props.title;
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item-description">
        <h2>{props.title}</h2>
        <div className="expense-item-price">&#8377;{props.amount}</div>
      </div>
      {/* <button>Click m</button> */}
    </Card>
  );
}

export default ExpenseItem;
