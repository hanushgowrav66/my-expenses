import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../HomePage/Footer";
import LoginForm from "./LoginForm";
import LoginHeader from "./LoginHeader";

function Login() {
  return (
    <Fragment>
      <LoginHeader />
      <LoginForm />
      <Footer />
    </Fragment>
  );
}

export default Login;
