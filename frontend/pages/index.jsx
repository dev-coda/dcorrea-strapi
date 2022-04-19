import React from "react";
import Cta from "../components/Cta";
import HeroTypewriter from "../components/HeroTypewriter";
import Profile from "../components/Profile";
import Watercolor from "../components/Watercolor";

const Home = () => {
  return (
    <>
      <HeroTypewriter />
      <Watercolor />
      <Profile />
      <Cta />
    </>
  );
};

export default Home;
