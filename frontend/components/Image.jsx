import React from "react";

const Image = ({ source, fallback, alt, classes, style }) => {
  return (
    <picture className="flex flex-col content-center items-center">
      <source
        type="image/webp"
        srcSet={source}
        alt={alt}
        className={classes}
        style={style}
      />{" "}
      <img
        type="image/png"
        src={fallback}
        alt={alt}
        className={classes}
        style={style}
      />
    </picture>
  );
};

export default Image;
