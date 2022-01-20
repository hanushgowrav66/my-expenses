import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

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
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
