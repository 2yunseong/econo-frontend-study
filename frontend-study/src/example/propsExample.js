import React from "react";

const propsExample = (props) => {
  return <div style={{ color: props.color }}>안녕하세요, {props.name} 님.</div>;
};

export default propsExample;
