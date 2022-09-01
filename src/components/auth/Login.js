import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import tmpa_logo from "../../tmpa_logo.PNG"
import Button from "@mui/material/Button";

function Login() {
  const [inps, setinps] = useState({});
  const [msg, setmsg] = useState();
  const navigate = useNavigate();

  const handleChangeEvent = (event) => {
    const values = { ...inps };
    values[event.target.name] = event.target.value;
    setinps(values);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inps);
    axios.defaults.withCredentials = true;

    axios
      .post("http://localhost:3001/login", inps)
      .then((response) => {
        if (response.data.status == "ok") navigate("/home");
        else setmsg(response.data.error)
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="login_main">
      <div className="login_div">
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="login_inps">
          <div className="img_div"><img src={tmpa_logo} className="App-logo" alt="logo"/></div>
            <TextField
              key={1}
              xl={12}
              label="Username"
              variant="outlined"
              type="text"
              name="username"
              onChange={(event) => handleChangeEvent(event)}
              margin="dense"
              InputProps={{ style: { fontSize: 30 } }}
              InputLabelProps={{ style: { fontSize: 30 } }}
              sx={{ width: "400px",marginTop: "50px" }}
              focused
              required
              
            />

            <TextField
              key={2}
              xl={12}
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              onChange={(event) => handleChangeEvent(event)}
              margin="dense"
              InputProps={{ style: { fontSize: 30 } }}
              InputLabelProps={{ style: { fontSize: 30 } }}
              sx={{ width: "400px", marginTop: "50px" }}
              focused
              required
            />
          </div>
          <div style={{color:'#ff0000'}}>{msg?msg:null}</div>
          <div className="login_inps">
            <Button
              type="submit"
              variant="contained"
              /* endIcon={<SaveIcon />} */
              className="submit"
              sx={{ marginTop: "50px", fontSize: 24, width: 130 }}
            >
              login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
