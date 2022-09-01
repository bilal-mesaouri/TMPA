import React from "react";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Axios from "axios";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";


function Register() {
    const [inps, setinps] = useState({});
    const handleChangeEvent = (event) => {
        const values = { ...inps };
        values[event.target.name] = event.target.value;
        setinps(values);
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inps);
        Axios.post("http://localhost:3001/register", inps)
          .then(() => {
            console.log('registration done')

            
          })
          .catch((err) => {
            console.error(err);
          });
      };
  return (
    <div className="login_main">
        <div className="login_div">
      <form onSubmit={(event)=>handleSubmit(event)}>
            <div className="login_inps" >
            <TextField
            key={1}
              xl={12}
              label="Username"
              variant="outlined"
              type='text'
              name='username'
              onChange={(event) => handleChangeEvent(event)}
              margin="dense"
              InputProps={{ style: { fontSize: 30 } }}
              InputLabelProps={{ style: { fontSize: 30 } }}
              sx={{width:'400px'}}
              focused
              required
            />
 
            <TextField
            key={2}
              xl={12}
              label='Password'
              variant="outlined"
              type='password'
              name='password'
              onChange={(event) => handleChangeEvent(event)}
              margin="dense"
              InputProps={{ style: { fontSize: 30 } }}
              InputLabelProps={{ style: { fontSize: 30 } }}
              sx={{width:'400px' , marginTop:'50px'}}
              focused
              required
            />
            </div>

            <div className="login_inps" >
            <Button
              type="submit"
              variant="contained"
              /* endIcon={<SaveIcon />} */
              className="submit"
              sx={{marginTop:'50px',fontSize:24,width:130}}
            >
              register
            </Button>
            </div>
      </form>
          </div>
          </div>
  );
}

export default Register;
