import React from "react";
import { infos, search_infos, ops } from "./car_infos.js";
import { useState, useEffect } from "react";
import Axios from "axios";
//#############
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
//############
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
//#######
import Paper from '@mui/material/Paper';

function Search_car() {
  const [inps, setinps] = useState({});
  const handleChangeEvent = (event) => {
    const values = { ...inps };
    values[event.target.name] = event.target.value;
    setinps(values);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inps);
    Axios.post("http://localhost:3001/search", inps)
      .then(() => console.log("Book Created"))
      .catch((err) => {
        console.error(err);
      });
    console.log("after");
  };
  return (
    <div>
      <Paper variant="outlined" elevation={24} className="ppr" >
      <form onSubmit={(e) => handleSubmit(e)}>
        <Grid container>
        {search_infos.map((inf) => {
          return (
            <Grid item xs={12} sm={6} md={3}>
            <div key={inf.name}>
              <br />
              <TextField
                id="outlined-basic" 
                label={inf.name} 
                variant="outlined"
                type={inf.type}
                name={inf.label}
                id={inf.label}
                onChange={(event) => handleChangeEvent(event)}
                margin="dense"
                focused
              />
              <br />
            </div>
            </Grid>
          );
        })}
        </Grid>
        <br />
        <div className="button">
        <Button type="submit" variant="contained" endIcon={<SearchIcon/>} className="submit">Search</Button>        </div>
      </form>
      </Paper>
    </div>
  );
}

export default Search_car;
