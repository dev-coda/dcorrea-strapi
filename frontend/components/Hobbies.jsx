import React from "react";

import profile from "../../assets/guy-reading.png";
import profilewebp from "../../assets/guy-reading.webp";
import Image from "./Image";

const TwoCols = () => {
  return (
    <section className=" container flex flex-col justify-start align-center z-0 mx-auto my-0 lg:my-36 lg:flex-row lg:gap-12">
      <Image
        source={profilewebp}
        fallback={profile}
        alt="Guy reading a book"
        classes="text-center max-w-xs lg:max-w-2xl mx-8 mt-8"
      />
      <div className="mx-8">
        <h2 className="rowdies text-5xl text-left lg:text-left lg:text-5xl p-2 mt-4">
          I do other stuff too.
        </h2>
        <p className="text-lg mt-4 p-2">
          I love learning new things, and figuring out answers to new questions.
          I'm driven, curious, and my non-traditional background gives me an
          unique outlook.
        </p>
        <p className="text-lg my-2 p-2">
          I love painting. I paint watercolors (even if i'm not so good at it)
          and miniatures, specifically from Warhammer 40k. Also I'm super
          colorblind. So you know I don't back down from a challenge. I also
          collect and solve rubik's cubes and all sorts of twisty puzzles.
        </p>
        <p className="text-lg mb-4 p-2">
          I'm an avid reader, mostly of fantasy. When I find the time, I play
          games with friends, mainly boardgames and wargames. I love good food,
          traveling, and coding small fun things that give me joy.
        </p>
      </div>
    </section>
  );
};

export default TwoCols;
