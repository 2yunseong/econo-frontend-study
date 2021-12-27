import React from "react";
import logo from "./logo.svg";
import "./App.css";
import InputName from "./InputExample/InputName";
import RefExample from "./UseRefExample/RefExample";
import StudentList from "./MappingExample/StudentList";
import UseEffectExample from "./UseEffectExample/UseEffectExample";
import CreateStudent from "./TreatArrayExample/CreateStudent";

function App() {
  const students = [
    {
      name: "이윤성",
      id: 182761,
      department: "소프트웨어공학",
      email: "182761@jnu.ac.kr",
    },
    {
      name: "임xx",
      id: 182848,
      department: "전자공학",
      email: "182848@jnu.ac.kr",
    },
    {
      name: "김xx",
      id: 181131,
      department: "소프트웨어공학",
      email: "181131@jnu.ac.kr",
    },
  ];

  const onRemove = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };
  return (
    <div className="App">
      <InputName />
      <UseEffectExample />
      <StudentList />
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default App;
