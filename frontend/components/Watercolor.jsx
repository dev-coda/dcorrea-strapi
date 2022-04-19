import React from "react";

//import watercolor from "../../assets/watercolor.png";
import watercolorwebp from "../assets/watercolor.webp";

const Watercolor = () => {
  return (
    <section
      className="container mx-auto lg:text-center flex flex-col justify-center align-center lg:my-1 mb-8 bg-[length:700px_700px] lg:bg-contain bg-no-repeat bg-center lg:py-32 gap-10 w-screen"
      style={{ backgroundImage: `url(${watercolorwebp})` }}
    >
      <h1 className="p-2 major mt-10 mx-8 text-4xl lg:text-5xl lg:max-w-xl lg:mx-auto bg-white bg-opacity-50 lg:leading-relaxed">
        i believe the web has the power to change the world
      </h1>
      <div className="mx-9">
        <p className="p-2 mb-10 text-lg lg:max-w-prose lg:mx-auto bg-white bg-opacity-50">
          I'm a full stack Developer from Medellín, Colombia. I want a web
          that's fast, UX driven, and accessible. I strive every day to be part
          of the teams that make that happen.
        </p>
      </div>
    </section>
  );
};

export default Watercolor;
