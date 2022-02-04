import React from "react";
import "./SelectButton.scss";
const SelectButton = ({ children }) => {
  return <button className="select-button">{children}</button>;
};

export default SelectButton;
