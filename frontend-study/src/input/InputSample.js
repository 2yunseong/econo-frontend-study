import React, { useState, useRef } from "react";

const InputSample = () => {
  const [user, setUser] = useState({
    username: "",
    id: "",
  });

  const { username, id } = user;

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const userNameRef = useRef();

  const handleClickResetButton = (e) => {
    setUser({
      username: "",
      id: "",
    });
    userNameRef.current.focus();
  };

  return (
    <div>
      <input
        name="username"
        placeholder="이름을 적어주세요.."
        onChange={handleInputChange}
        value={username}
        ref={userNameRef}
      />
      <input
        name="id"
        placeholder="아이디를 적어주세요.."
        onChange={handleInputChange}
        value={id}
      />
      <button onClick={handleClickResetButton}>초기화</button>
      <div>
        값: {username}({id})
      </div>
    </div>
  );
};

export default InputSample;
