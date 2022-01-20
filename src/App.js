import React from "react";

import "./App.css";
import Expenses from "./components/Expenses/Expense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Goa Trip",
      amount: 9000,
      date: new Date(2021, 3, 14),
    },
    {
      id: "e2",
      title: "My Birthday",
      amount: 3000,
      date: new Date(2021, 6, 6),
    },
    {
      id: "e3",
      title: "Outing with Friends",
      amount: 8000,
      date: new Date(2021, 10, 28),
    },
    {
      id: "e4",
      title: "New year party",
      amount: 2000,
      date: new Date(2021, 12, 31),
    },
  ];
  
  return (
    <div>
      <center>
        <h2 className="App-title">My Expenses</h2>
      </center>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
