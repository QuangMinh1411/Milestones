import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
const Student = () => {
  const baseUrl = "http://localhost:8080/api/student";
  const navigate = useNavigate();
  const paperStyle = {
    padding: "50px 20px",
    width: 600,
    margin: "20px auto",
  };

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(baseUrl + "/add", {
        name: name,
        address: address,
      })
      .then((res) => {
        console.log(res.data);
      });
    navigate("/");
  };

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>Add Student</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
            width: 500,
            maxWidth: "100%",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            fullWidth
            id="outlined-basic"
            label="Student Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Student Address"
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button color="primary" size="medium" onClick={handleSubmit}>
            Save
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Student;
