import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import axios from "axios";
const Students = () => {
  const baseUrl = "http://localhost:8080/api/student";
  const paperStyle = {
    padding: "50px 20px",
    width: 600,
    margin: "20px auto",
  };
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      setStudents(res.data);
    });
  }, [students]);
  return (
    <Paper elevation={3} style={paperStyle}>
      {students.map((student) => (
        <Paper
          elevation={6}
          style={{ margin: "10px", padding: "15px", textAlign: "left" }}
          key={student.id}
        >
          Id:{student.id}
          <br />
          Name:{student.name}
          <br />
          Address:{student.address}
        </Paper>
      ))}
    </Paper>
  );
};

export default Students;
