import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react";
import axios from "axios";

//////////////
import {useGridApiContext } from '@mui/x-data-grid';
const Axios = require("axios").default;



export default function DataGridDemo() {
    const [datos, setdatos] = useState([]);
    const [columns_ax, setcolumns_ax] = useState([]);
    const [inps, setinps] = useState([]);
    const [update_flag, setflag] = useState(0);
  
    useEffect(() => {
      Axios.get("http://localhost:3001/", {}).then((response) => {
        setdatos(response.data['results']);
        setcolumns_ax(response.data['disp_fields']) 

  
      });
    }, [update_flag]);

    
    const processRowUpdate = React.useCallback(
      (newRow, oldRow) =>
  
        {
          console.log(newRow)},
      [],
    );
    const handleRowEditCommit = React.useCallback(
      (params) => {
        setinps(params)
          const id = params.id;
          const key = params.field;
          const value = params.value; 
        },
      []
  );
function getinps(){
  console.log(inps)
}

  return (
    <div>
    <Box sx={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={datos}
        columns={columns_ax} 
        
        onCellEditCommit={(props, event) => {
          console.log(props);
        }}        pageSize={21}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    <button onClick={getinps}>click me</button>
    </div>
  );
}
