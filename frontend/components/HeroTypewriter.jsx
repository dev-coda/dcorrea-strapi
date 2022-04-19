import React from "react";
import guyChilling from "../assets/guy-chilling.png";
import guyChillingwebp from "../assets/guy-chilling.webp";
import Typewriter from "typewriter-effect";
import Image from "../components/Image";

const HeroTypewriter = () => {
  const phrases = [
    "is a Web Developer \n",
    "loves to read \n",
    "believes in you \n",
    "loves Flexbox and Grid",
    "needs some coffee",
    "is super colorblind",
    "thinks you are pretty cool",
    "cooks a mean lasagna",
    "knows Wordpress",
  ];
  return (
    <section className="hero mt-2" style={{ minHeight: "calc(100vh - 4rem)" }}>
      <div className="flex flex-col justify-start align-center z-0 max-w-7xl m-4 p-1 lg:flex-row-reverse lg:gap-12">
        <Image
          source={guyChillingwebp}
          fallback={guyChilling}
          classes="max-w-xs text-center lg:max-w-md"
          alt="Guy sitting with a laptop drinking coffee"
        />

        <div>
          <div className="rowdies text-left">
            <h1>
              <span className="text-7xl w-full block px-4 py-2 lg:w-max lg:text-9xl">
                David
              </span>
              <span className="block text-7xl w-full bg-primary text-base-100 py-2 px-4 lg:pl-4 lg:pr-20 lg:text-9xl lg:w-max lg:p">
                Correa
              </span>
            </h1>
          </div>
          <div className="max-w-xs rowdies text-3xl pl-4 h-10 mb-16 lg:text-5xl lg:max-w-lg">
            <Typewriter
              className="max-w-sm"
              options={{
                strings: phrases,
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTypewriter;
