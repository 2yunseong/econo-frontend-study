import React from "react";

function CreateStudent({ studentName, email, onChange, onCreate }) {
  return (
    <div>
      <input
        name="studentName"
        placeholder="학생 이름"
        onChange={onChange}
        value={studentName}
      />
      <input
        name="email"
        placeholder="학생 메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default CreateStudent;
