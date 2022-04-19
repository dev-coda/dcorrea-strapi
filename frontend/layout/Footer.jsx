import React from "react";
import { IoColorFilterOutline } from "react-icons/io5";
import SocialBox from "../shared/SocialBox";
const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-1 footer-center gap-3">
      <IoColorFilterOutline color="lightgray" size="48" />
      <SocialBox />
      <p> &copy; David Correa {footerYear}. </p>
      <div className="gap-0">
        <p className="flex mb-0">
          Illustrations by{" "}
          <a
            className="mx-2"
            href="https://icons8.com/illustrations/author/5c07e68d82bcbc0092519bb6"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Icons 8{" "}
          </a>
          from
          <a
            className="mx-2"
            href="https://icons8.com/illustrations"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Ouch!.
          </a>{" "}
        </p>{" "}
        <p className="flex mt-0">
          Watercolor illustrations by
          <a
            className="mx-2"
            href="http://www.freepik.com"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            {" "}
            starline / Freepik
          </a>
        </p>{" "}
      </div>
    </footer>
  );
};

export default Footer;
