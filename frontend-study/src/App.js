import React from "react";
import "./App.css";
import InputSample from "./input/InputSample";
import UserList from "./user/UserList";
import SelectButton from "./components/SelectButton";

function App() {
  return (
    <div className="App">
      <InputSample />
      <UserList />
      <SelectButton />
    </div>
  );
}

export default App;
