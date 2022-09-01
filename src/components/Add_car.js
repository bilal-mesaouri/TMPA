import React from "react";
import { infos } from "./car_infos.js";
import { useState } from "react";
import Axios from "axios";
import uuid from 'react-uuid';
//###########
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
//############
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
//#######
import Paper from "@mui/material/Paper";

function Add_car(props) {
  const [inps, setinps] = useState({});
  const [re_render, setre_render] = useState(0);


  const handleChangeEvent = (event) => {
     const values = { ...inps };
    values[event.target.name] = event.target.value;
    console.log(inps)
    setinps(values); 
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inps);
    Axios.post("http://localhost:3001/add_user", inps)
      .then(() => {
        setre_render(1);
        props.switch_comp(1)
        
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="form" onSubmit={(event) => handleSubmit(event)}>
      <Paper  elevation={24} className="ppr">
        <form>
          <Grid container>
            {infos?.map((inf) => {
              if (typeof inf === "string"){
              console.log('hello')
                return (
                  
                  <Grid  key={uuid()} item xs={12} sm={12} md={12}>
                    <h2>{inf}</h2>
                  </Grid>
                );}
              else {
                return (
                  <Grid key={uuid()} item xs={12} sm={6} md={3}>
                    <div >
                      <TextField
                        id="outlined-basic"
                        label={inf.name}
                        variant="outlined"
                        type={inf.type}
                        name={inf.label}
                        onChange={(event) => handleChangeEvent(event)}
                        margin="dense"
                        focused
                      />

                      <br></br>
                    </div>
                  </Grid>
                );
              }
            })}
          </Grid>
          <div className="submit_button">
            <Button
              type="submit"
              variant="contained"
              endIcon={<SaveIcon />}
              className="submit"
            >
              Save
            </Button>
          </div>
        </form>
      </Paper>
      {/*       <button onClick={get_sr} value="SAVE !!">get search</button>
       */}{" "}
    </div>
  );
}

export default React.memo(Add_car);
