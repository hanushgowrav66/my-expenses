import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import HomePage from "../HomePage/HomePage";

import "./LoginForm.css";

const login_details = [
  {
    id: "1",
    email: "admin@gmail.com",
    password: "admin",
  },
];

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const check = login_details.map((e) => {
    if (e.email === email && e.password === password) {
      history.push("/home");
    } else {
      console.log("Nope ");
    }
  });

  return (
    <Fragment>
      <div className="div-center">
        <div className="content">
          <h2>Login</h2>
          <hr />
          <form onSubmit={check}>
            <div className="form-group">
              <label for="exampleInputEmail1">Username</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log(email);
                }}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Email"
              ></input>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  console.log(password);
                }}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              ></input>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            <button
              type="button"
              className="btn btn-link float-right"
              onClick={() => alert("Plaese contact your adminstrator ")}
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginForm;
