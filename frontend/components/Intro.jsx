import React from "react";

import profile from "../../assets/guy-coding.png";
import profilewebp from "../../assets/guy-coding.webp";
import Toolbox from "./Toolbox";
import Image from "./Image";

const TwoCols = () => {
  return (
    <div>
      <section className=" container flex flex-col justify-start align-center z-0 mx-auto my-0 lg:my-36 lg:flex-row-reverse lg:gap-12">
        <Image
          source={profilewebp}
          fallback={profile}
          alt="Guy working on a computer"
          classes="text-center max-w-xs lg:max-w-3xl mx-8"
        />
        <div className="mx-8">
          <h2 className="rowdies text-5xl text-left lg:text-left lg:text-5xl p-2 mt-4">
            I'm a Developer.
          </h2>
          <p className="text-lg mt-4 p-2">
            I began coding as a Hobby, while working as a Chemical Engineer. I
            enjoyed it so much I wanted to make it a career. Transitioning into
            development was the hardest decision I have ever taken, but also the
            best one.
          </p>
          <p className="text-lg mb-4 p-2">
            After some College courses, a couple of Bootcamps, more online
            courses than I can count, and a lot of coffee, I got my first job as
            a Wordpress developer. Since then I have built websites for a lot of
            clients and worked inhouse leading a local retailer's ecommerce.
            Currently, I am working full time as a full stack dev at a local
            agency.
          </p>

          <h3 className="text-3xl my-4 p-2 rowdies">My toolbox</h3>
          <Toolbox size="3em" />
        </div>
      </section>
    </div>
  );
};

export default TwoCols;
