import React from "react";

import SocialBox from "./SocialBox";
import profile from "../assets/DavidCorrea.JPG";
import profilewebp from "../assets/davidcorrea.webp";
import Toolbox from "./Toolbox";
import Image from "./Image";

const TwoCols = () => {
  return (
    <div>
      <section className=" container flex flex-col justify-start align-center z-0 mx-auto my-0 lg:my-36 lg:flex-row-reverse lg:gap-12">
        <Image
          style={{ maxWidth: "calc(100vw - 4rem)" }}
          source={profilewebp}
          fallback={profile}
          alt="Portrait of David Correa"
          classes="text-center lg:max-w-md mask mask-square border-2"
        />
        <div className="mx-8">
          <h2 className="rowdies text-5xl text-left lg:text-left lg:text-5xl p-2 mt-4">
            I make websites.
          </h2>
          <p className="text-lg mt-4 p-2">
            Hello! My name is David, and I'm passionate about any and all things
            in the internet. My background is in Chemical Engineering, but I
            transitioned to development early, when I realized i kept making
            excuses to code stuff at work.
          </p>
          <p className="text-lg mb-4 p-2">
            Here you can learn a bit more about who I am, what I do, and why do
            I love doing it. I've been building stuff on the web for over 6
            years now, and my endless curiosity keeps me learning every day.
          </p>

          <h3 className="text-3xl my-4 p-2 rowdies">My toolbox</h3>
          <Toolbox size="3em" />
          <h3 className="text-3xl my-4 p-2 rowdies">Get to know me</h3>
          <SocialBox />
        </div>
      </section>
    </div>
  );
};

export default TwoCols;
