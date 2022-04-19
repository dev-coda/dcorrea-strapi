import React from "react";
import { ImHtmlFive2, ImCss3, ImTux, ImWordpress } from "react-icons/im";
import {
  SiJavascript,
  SiNginx,
  SiReact,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaPhp, FaElementor } from "react-icons/fa";
const Toolbox = ({ size }) => {
  return (
    <div className="flex gap-6 flex-wrap justify-between p-2">
      <a
        href="https://www.w3.org/"
        rel="nofollow noopener noreferrer"
        aria-label="Html5"
      >
        <ImHtmlFive2 size={size} />
      </a>
      <a
        href="https://www.w3.org/"
        rel="nofollow noopener noreferrer"
        aria-label="CSS"
      >
        <ImCss3 size={size} />
      </a>
      <a
        href="https://www.ecma-international.org/publications-and-standards/standards"
        rel="nofollow noopener noreferrer"
        aria-label="Javascript"
      >
        <SiJavascript size={size} />
      </a>
      <a
        href="https://www.kernel.org/"
        rel="nofollow noopener noreferrer"
        aria-label="GNU/Linux"
      >
        <ImTux size={size} />
      </a>
      <a
        href="https://www.nginx.com/"
        rel="nofollow noopener noreferrer"
        aria-label="nginx"
      >
        <SiNginx size={size} />
      </a>
      <a
        href="https://https://www.mysql.com/"
        rel="nofollow noopener noreferrer"
        aria-label="mysql"
      >
        <DiMysql size={size} />
      </a>
      <a
        href="https://www.php.net/"
        rel="nofollow noopener noreferrer"
        aria-label="php"
      >
        <FaPhp size={size} />
      </a>
      <a
        href="https://www.wordpress.org/"
        rel="nofollow noopener noreferrer"
        aria-label="Wordpress"
      >
        <ImWordpress size={size} />
      </a>
      <a
        href="https://www.elementor.com/"
        rel="nofollow noopener noreferrer"
        aria-label="Elementor"
      >
        <FaElementor size={size} />
      </a>
      <a
        href="https://www.mongodb.com/"
        rel="nofollow noopener noreferrer"
        aria-label="MongoDB"
      >
        <SiMongodb size={size} />
      </a>
      <a
        href="https://nodejs.org"
        rel="nofollow noopener noreferrer"
        aria-label="Node Js"
      >
        <SiNodedotjs size={size} />
      </a>
      <a
        href="https://www.reactjs.org/"
        rel="nofollow noopener noreferrer"
        aria-label="React Js"
      >
        <SiReact size={size} />
      </a>
    </div>
  );
};

export default Toolbox;
