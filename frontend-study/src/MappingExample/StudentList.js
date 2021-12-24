import React from "react";

function Student({ student }) {
  return (
    <div>
      {student.name}({student.id}){student.department}
      {student.email}
    </div>
  );
}

function StudentList() {
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

  return (
    <div>
      {students.map((student, index) => {
        return <Student student={student} key={index} />;
      })}
    </div>
  );
}

export default StudentList;
