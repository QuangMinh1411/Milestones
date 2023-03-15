import "./App.css";
import AppBar from "./components/Appbar";
import Student from "./components/Student";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Students from "./components/Students";
function App() {
  return (
    <Router>
      <div className="App">
        <AppBar />
        <Routes>
          <Route path="/" element={<Students />} />
          <Route path="/add" element={<Student />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
