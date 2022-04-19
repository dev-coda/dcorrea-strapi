import React from "react";
import { FaGithubAlt, FaBitbucket, FaLinkedinIn } from "react-icons/fa";

const SocialBox = () => {
  return (
    <div className="flex gap-2 justify-start p-2">
      <a
        href="https://www.github.com/DavidCorreaV"
        aria-label={`Github link`}
        className="btn btn-ghost btn-sm rounded-btn"
        rel="noreferrer"
        target="_blank"
      >
        <FaGithubAlt size="28" />
      </a>
      <a
        href="https://www.bitbucket.com/DavidCorrea"
        aria-label={`Bitbucket link`}
        className="btn btn-ghost btn-sm rounded-btn"
        rel="noreferrer"
        target="_blank"
      >
        <FaBitbucket size="28" />
      </a>
      <a
        href="https://www.linkedin.com/in/david-correa-vanegas-633b40b6/"
        aria-label={`LinkedIn link`}
        className="btn btn-ghost btn-sm rounded-btn"
        rel="noreferrer"
        target="_blank"
      >
        <FaLinkedinIn size="28" />
      </a>
    </div>
  );
};

export default SocialBox;
