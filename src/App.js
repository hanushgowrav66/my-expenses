import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/HomePage/LoginHome";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route
          exact
          path="/home"
          component={() => <HomePage authorized={false} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
