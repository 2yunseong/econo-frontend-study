import React from "react";
import "./SelectButton.scss";
const SelectButton = () => {
  return (
    <button className="select-button" onClick={() => console.log("hello")}>
      BUTTON
    </button>
  );
};

export default SelectButton;
