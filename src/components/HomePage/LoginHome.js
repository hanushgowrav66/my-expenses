import Footer from "./Footer";
import { Fragment } from "react";
import Login from "../Login/Login";

const LoginHome = () => {
  return (
    <Fragment>
      <Login />
      <br />
      <br />
      <Footer />
    </Fragment>
  );
};

export default LoginHome;
