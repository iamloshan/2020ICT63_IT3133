import "./App.css";
import "./assets/css/compo.css";
import Table from "./components/table";
import { students } from "./assets/StudentsDb.js";
import { useState } from "react";
import Profile from "./components/profile";

function App() {
  const [student, setStudent] = useState(students[0]);

  return (
    <div className="outerDiv">
      <div className="leftDiv">
        <Table students={students} />
      </div>

      <div className="rightDiv">
        <Profile student={student}/>
      </div>
    </div>
  );
}

export default App;