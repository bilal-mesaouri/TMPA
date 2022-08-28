import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";
//////////////
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
const Axios = require("axios").default;

export default function DataGridDemo() {
  const [datos, setdatos] = useState([]);
  const [columns_ax, setcolumns_ax] = useState([]);
  const [inps, setinps] = useState([]);
  const [dlt_rows, setdlt_rows] = useState([]);
  const [update_flag, setflag] = useState(0);
  const [dlt_flag, setdlt_flag] = useState(0);
  const [re_render, setre_render] = useState(0);

  useEffect(() => {
    Axios.get("http://localhost:3001/", {}).then((response) => {
      setdatos(response.data["results"]);
      setcolumns_ax(response.data["disp_fields"]);
      setre_render(0);
      console.log('useeffect')
    });
  }, [re_render]);
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
    <div style={{ height: "84%", width: "100%" }}>
      <DataGrid
        rows={datos}
        columns={columns_ax}
        pageSize={17}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={(itm) => {
          if (itm.length == 0) {
            setdlt_flag(0);
            setdlt_rows([]);
          } else {
            console.log("yolo");
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
        sx={{color:'secondary'}}
      />
      {dlt_flag == 1 ? (
        <Button
          sx={{ margin: 1 }}
          variant="outlined"
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
