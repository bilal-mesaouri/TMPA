import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";
//////////////
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Axios = require("axios").default;

export default function DataGridDemo(props) {
  const [datos, setdatos] = useState([]);
  const [columns_ax, setcolumns_ax] = useState([]);
  const [inps, setinps] = useState([]);
  const [dlt_rows, setdlt_rows] = useState([]);
  const [update_flag, setflag] = useState(0);
  const [dlt_flag, setdlt_flag] = useState(0);
  const [re_render, setre_render] = useState(0);

  

  function get_columns(columns){
    const types = [ 'conducteur','vehicule','sous_contrat' ]
    const type=types[props.sepFlag-1]
    console.log(type)
    const new_columns=[]
    columns?.map((col)=>{
      console.log(col.data_field)
      if(col.data_field==type){
        console.log('yess')
        new_columns.push(col)
      }
    })
    console.log('new columns ---> ',new_columns)
    return new_columns;
    
}

  useEffect(() => {
    
    Axios.get("http://localhost:3001/", {}).then((response) => {
      if(props.search_results.length>0){
        console.log('props.search_results ->->-> ',props.search_results)
        setdatos(props.search_results);
      }
      else{
        setdatos(response.data["results"])
        console.log('raw data ---> ',response.data["results"])
      };
      
      if(props.sepFlag!=0){
        setcolumns_ax(get_columns(response.data["disp_fields"]))
      }
      else setcolumns_ax(response.data["disp_fields"].filter(data => typeof data !== 'string'));
      
      setre_render(0);
    });
  }, [re_render,props.sepFlag,props.search_results]);
  useEffect(() => {
    console.log(inps);
  }, [inps]);

  function edit() {
    console.log("inside edit() ---> ", inps);
    if (inps.length > 0) {
      Axios.post("http://localhost:3001/change", inps)
        .then(() => {
          setinps([]);
          setre_render(1);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setflag(0);
    }
  }
  function delete_rows() {
    console.log("inside delete() ---> ", dlt_rows);
    if (dlt_rows.length > 0) {
      Axios.post("http://localhost:3001/delete", dlt_rows)
        .then(() => {
          setdlt_rows([]);
          setre_render(1);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setdlt_flag(0);
    }
  }

  
  return (

    <div style={{ height: "100%", width: "99%" ,margin:'auto' }}>
      <DataGrid
        rows={datos}
        columns={columns_ax}
        pageSize={20}
        rowsPerPageOptions={[20]}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={(itm) => {
          if (itm.length == 0) {
            setdlt_flag(0);
            setdlt_rows([]);
          } else {
            setdlt_rows(itm);
            setdlt_flag(1);
          }
        }}
        onCellEditCommit={(props, event) => {
          console.log(props);
          setflag(1);
          const values = [...inps];
          values.push(props);
          setinps(values);
        }}
        sx={{backgroundColor:'white', color:'secondary',fontSize:22,
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "rgb(37,154,215)",
          color: "rgb(255,255,255)",
          fontSize: 22
        },
      
        }}
        
      />
      {dlt_flag == 1 ? (
        <Button
          sx={{ margin: 1 }}
          variant="outlined"
          color="secondary"
          endIcon={<DeleteIcon />}
          onClick={() => {
            dlt_flag === 0 ? setdlt_flag(1) : setdlt_flag(0);
            delete_rows();
          }}
        >
          Delete
        </Button>
      ) : null}
      {update_flag == 1 ? (
        <Button
          sx={{ margin: 1 }}
          variant="contained"
          color="secondary"
          endIcon={<EditIcon />}
          onClick={() => {
            update_flag === 0 ? setflag(1) : setflag(0);
            edit();
          }}
        >
          edit
        </Button>
      ) : null}
      {update_flag == 1 ? (
        <Button
          sx={{ margin: 1 }}
          color="secondary"
          endIcon={<CancelOutlinedIcon />}
          onClick={() => {
            dlt_flag === 0 ? setdlt_flag(1) : setdlt_flag(0);
            setflag(0);
            setinps([]);
          }}
        >
          Discard edits
        </Button>
      ) : null}
    </div>

  );
}
