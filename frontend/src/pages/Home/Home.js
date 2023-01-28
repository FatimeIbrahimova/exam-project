import React from "react";
import HeroSec from "./HeroSec";
import Products from "./Products";
import SecondSec from "./SecondSec";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <HeroSec />
      <SecondSec />
      <Products />
    </div>
  );
};

export default Home;
