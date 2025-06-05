/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Relume6 = ({ color = "black", className }) => {
  return (
    <svg
      className={`relume-6 ${className}`}
      fill="none"
      height="25"
      viewBox="0 0 24 25"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M20.73 7.19614L20.59 6.94614C20.4094 6.64383 20.1547 6.39257 19.85 6.21614L13.14 2.34614C12.8362 2.16989 12.4913 2.07676 12.14 2.07614H11.85C11.4987 2.07676 11.1538 2.16989 10.85 2.34614L4.14 6.22614C3.83697 6.4014 3.58526 6.65311 3.41 6.95614L3.27 7.20614C3.09375 7.50998 3.00062 7.85488 3 8.20614V15.9561C3.00062 16.3074 3.09375 16.6523 3.27 16.9561L3.41 17.2061C3.58979 17.5056 3.84049 17.7563 4.14 17.9361L10.86 21.8061C11.1623 21.986 11.5082 22.0794 11.86 22.0761H12.14C12.4913 22.0755 12.8362 21.9824 13.14 21.8061L19.85 17.9261C20.156 17.7548 20.4087 17.5021 20.58 17.1961L20.73 16.9461C20.9041 16.6414 20.9971 16.2971 21 15.9461V8.19614C20.9994 7.84488 20.9063 7.49998 20.73 7.19614ZM11.85 4.07614H12.14L18 7.45614L12 10.9161L6 7.45614L11.85 4.07614ZM13 19.5761L18.85 16.1961L19 15.9461V9.18614L13 12.6561V19.5761Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Relume6.propTypes = {
  color: PropTypes.string,
};
