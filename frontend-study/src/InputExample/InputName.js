import React, { useState } from "react";

function InputName() {
  const [student, setStudent] = useState({
    name: "",
    id: "",
  });

  const { name, id } = student;

  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(e);
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const onReset = () => {
    setStudent({
      name: "",
      id: "",
    });
  };

  return (
    <div>
      <h1>학생 등록</h1>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input name="id" placeholder="학번" onChange={onChange} value={id} />
      <button onClick={onReset}>초기화</button>
      <div>
        이름 : {name}
        학번 : {id}
      </div>
    </div>
  );
}

export default InputName;
