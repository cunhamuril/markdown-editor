import React from "react";
import PropTypes from "prop-types";

import "./button.css";

const Button = ({ onClick, children, kind }) => (
  <button onClick={onClick} className={`button ${kind ? "-" + kind : ""}`}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,

  // Um desses valores
  kind: PropTypes.oneOf(["success", "danger"])
};

export default Button;
