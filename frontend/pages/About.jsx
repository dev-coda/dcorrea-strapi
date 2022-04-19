import React from "react";
import Intro from "../components/Intro";
import Hobbies from "../components/Hobbies";
import Bio from "../components/Bio";
import Cta from "../components/Cta";

const About = () => {
  return (
    <>
      <section className="container mx-auto px-10">
        <h1 className="text-7xl lg:text-9xl rowdies mt-12 lg:mt-36">
          Hello there.
        </h1>
        <h3 className="text-2xl mb-8 p-2">
          Here's more than you need to know about me.
        </h3>
      </section>
      <Intro />
      <Hobbies />
      <Bio />
      <Cta />
    </>
  );
};

export default About;
