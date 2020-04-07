import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const BaseLayout = props => {
  return (
    <>
      <Header />
      {props.children}
      <br />
      <Footer />
    </>
  );
};

export default BaseLayout;
