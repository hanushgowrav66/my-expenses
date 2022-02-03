import Header from "./Header";
import Footer from "./Footer";
import { Fragment } from "react";
import { Redirect } from "react-router-dom";

const HomePage = (authorized) => {
  if (!authorized) {
    return <Redirect to="/" />;
  }
  return (
    <Fragment>
      <Header />
      <br />
      <br />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
