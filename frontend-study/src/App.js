import React, { useState } from "react";
import "./App.css";
import ShowCustomerList from "./ProjectDirectory/ShowCustomerList";

function App() {
  const customers = [
    {
      id: 1,
      name: "이윤성",
      phoneNumber: "010-1111-1111",
    },
    {
      id: 2,
      name: "김윤성",
      phoneNumber: "010-2222-2222",
    },
    {
      id: 3,
      name: "박윤성",
      phoneNumber: "010-3333-3333",
    },
  ];
  const [customerList, setCustomerList] = useState(customers);
  

  return (
    <div className="App">
      <ShowCustomerList customerList={customerList} />
    </div>
  );
}

export default App;
