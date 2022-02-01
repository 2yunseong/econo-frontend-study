import React, { useState } from "react";

const InputSample = () => {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleClickResetButton = (e) => {
    setText("");
  };
  return (
    <div>
      <input onChange={handleInputChange} value={text} />
      <button onClick={handleClickResetButton}>reset</button>
      <div>값: {text}</div>
    </div>
  );
};

export default InputSample;
