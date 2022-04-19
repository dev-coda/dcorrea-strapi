import React, { useState } from "react";

import profile from "../../assets/molecule.png";
import profilewebp from "../../assets/molecule.webp";
import Image from "./Image";
import Short from "../layout/tabs/Short";
import Shortest from "../layout/tabs/Shortest";
import Long from "../layout/tabs/Long";
import VeryLong from "../layout/tabs/VeryLong";

const TwoCols = () => {
  const [tab, setTab] = useState(1);
  const contents = [<Shortest />, <Short />, <Long />, <VeryLong />];

  const handleClick = (e) => {
    const prev = document.querySelector(".tab-active");
    prev && prev.classList.remove("tab-active");
    e.target.classList.add("tab-active");
    setTab(e.target.value);
  };

  return (
    <section className=" container flex flex-col justify-between align-center z-0 mx-auto my-0 lg:my-36 lg:flex-row-reverse lg:gap-12">
      <Image
        source={profilewebp}
        fallback={profile}
        alt="Molecule"
        classes="text-center max-w-xs lg:max-w-md mx-8"
      />
      <div className="mx-8 lg:w-full">
        <h2 className="rowdies text-5xl text-left lg:text-left lg:text-5xl p-2 mt-4">
          Here's more about my life.
        </h2>
        <div className="tabs tabs-boxed p-2 flex mt-4">
          <li
            value="0"
            className="tab  text-sm border-2 border-collapse flex-1 p-1"
            onClick={handleClick}
          >
            Shortest
          </li>
          <li
            className=" tab text-sm tab-active border-collapse border-2 flex-1 p-1"
            value="1"
            onClick={handleClick}
          >
            Short
          </li>
          <li
            className="tab  text-sm border-2 border-collapse flex-1 p-1"
            value="2"
            onClick={handleClick}
          >
            Long
          </li>
          <li
            className="tab  text-sm border-2 border-collapse flex-1 p-1"
            value="3"
            onClick={handleClick}
          >
            Longest
          </li>
        </div>
        <div className="p-2 text-lg w-full tabs-content">{contents[tab]}</div>
      </div>
    </section>
  );
};

export default TwoCols;
