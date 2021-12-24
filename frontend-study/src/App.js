import logo from "./logo.svg";
import "./App.css";
import InputName from "./InputExample/InputName";
import RefExample from "./UseRefExample/RefExample";
import StudentList from "./MappingExample/StudentList";

function App() {
  return (
    <div className="App">
      <InputName />
      <StudentList />
    </div>
  );
}

export default App;
