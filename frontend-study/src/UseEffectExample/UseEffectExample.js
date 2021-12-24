import React, { useState, useEffect } from "react";

function UseEffectExample() {
  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);
}

export default UseEffectExample;
