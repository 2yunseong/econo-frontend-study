import React from "react";

const WelcomeTitle = (props) => {
  return <div style={{ color: props.color }}>안녕하세요, {props.name}님.</div>;
};

export default WelcomeTitle;
