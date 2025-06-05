/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CompanyLogo = ({ alternate, className }) => {
  return (
    <div className={`company-logo alternate-${alternate} ${className}`}>
      <img
        className="chatgpt-image-jun"
        alt="Chatgpt image jun"
        src="/img/chatgpt-image-jun-3-2025-02-28-23-pm-1.png"
      />
    </div>
  );
};

CompanyLogo.propTypes = {
  alternate: PropTypes.bool,
};
