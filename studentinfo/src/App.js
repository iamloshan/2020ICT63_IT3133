import "./App.css";
import "./assets/css/compo.css";
import Table from "./components/table";
import { students } from "./assets/StudentsDb.js";
import { useState } from "react";
import Profile from "./components/profile";

function App() {
  const [student, setStudentedIndex] = useState(0);

  return (
    <div className="outerDiv">
      <div className="leftDiv">
        <Table students={students} setStudentedIndex={setStudentedIndex} />
      </div>

      <div className="rightDiv">
        <Profile student={students[studentIndex]}/>
      </div>
    </div>
  );
}

export default App;