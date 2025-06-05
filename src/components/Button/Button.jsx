/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Relume6 } from "../../icons/Relume6";
import "./style.css";

export const Button = ({
  style,
  small,
  alternate,
  iconPosition,
  className,
  text = "Button",
  divClassName,
  icon = <Relume6 className="relume" color="black" />,
  to,
}) => {
  return (
    <Link
      className={`button ${iconPosition} ${style} alternate-1-${alternate} small-${small} ${className}`}
      to={to}
    >
      {iconPosition === "no-icon" && (
        <div className={`text-wrapper ${divClassName}`}>{text}</div>
      )}

      {["leading", "only"].includes(iconPosition) && (
        <Relume6
          className="relume"
          color={
            (!alternate && style === "link") ||
            (!alternate && style === "secondary") ||
            (!alternate && style === "tertiary") ||
            (alternate && style === "primary")
              ? "black"
              : "white"
          }
        />
      )}

      {["leading", "trailing"].includes(iconPosition) && (
        <div className="div">{text}</div>
      )}

      {iconPosition === "trailing" && <>{icon}</>}
    </Link>
  );
};

Button.propTypes = {
  style: PropTypes.oneOf(["primary", "link", "secondary", "tertiary"]),
  small: PropTypes.bool,
  alternate: PropTypes.bool,
  iconPosition: PropTypes.oneOf(["no-icon", "trailing", "only", "leading"]),
  text: PropTypes.string,
  to: PropTypes.string,
};
