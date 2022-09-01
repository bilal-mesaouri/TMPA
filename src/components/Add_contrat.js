import React from "react";
import { infos, search_infos, ops } from "./car_infos.js";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Axios from "axios";
//###########
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
//############
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";
//#######
import Paper from "@mui/material/Paper";
import axios from "axios";

function Add_contrat(props) {
  const [inps, setinps] = useState({});
  const [fields, setfields] = useState([]);
  const [re_render, setre_render] = useState(0);
  useEffect(() => {
    axios.get('http://localhost:3001/get_fields',).then((response)=>{
      console.log(response.data)
      setfields(response.data['flds'])
    })

  }, [re_render]);

  const handleChangeEvent = (event) => {
    const values = { ...inps };
    values[event.target.name] = event.target.value;
    setinps(values);
    console.log(inps)
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inps);
    Axios.post("http://localhost:3001/add_user", inps)
      .then(() => {
        setre_render(1);
        console.log("go go");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="form" onSubmit={(event) => handleSubmit(event)}>
      <Paper variant="outlined" elevation={24} className="ppr">
        <form>
          <Grid container>
            {fields.map((inf) => {
              if (typeof inf === "string"){
                if (inf=='contrat') {
                  return (
                    <Grid item xs={12} sm={12} md={12} >
                      <div>
                      <h2>{inf}</h2>

                      <TextField
                        id="outlined-basic"
                        label='contrat nº'
                        variant="outlined"
                        type='text'
                        placeholder="if existing ..."
                        name='contrat_numb'
                        onChange={(event) => handleChangeEvent(event)}
                        margin="dense"
                        focused
                      />

 
                    </div>
                  </Grid>)

                } else {
                  return (
                    <Grid item xs={12} sm={12} md={12}>
                      <h2>{inf}</h2>
                    </Grid>
                  );
                }
                }
              else {
                return (
                  <Grid item xs={12} sm={6} md={3}>
                    <div key={inf.key}>
                      <TextField
                        id="outlined-basic"
                        label={inf.headerName}
                        variant="outlined"
                        type={inf.typ}
                        name={inf.field}
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

export default Add_contrat;