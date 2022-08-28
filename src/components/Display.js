import * as React from "react";
import { infos, search_infos, ops } from "./car_infos.js";
import { useState, useEffect } from "react";
import axios from "axios";
import uuid from 'react-uuid';
//table design
import { hexToRgb, styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//################
  import Button from "@mui/material/Button";
  import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
//##########
const Axios = require("axios").default;

//table functions
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

//end of table functions

function delete_car(id) {
  axios
    .post("http://localhost:3001/delete", { id: id })
    .then(() => console.log("Book Created"))
    .catch((err) => {
      console.error(err);
    });
}
function Display(props) {
  function edit_car(id) {
    axios
      .post("http://localhost:3001/edit", { id: id })
      .then((res) => {
        console.log(res.data[0]);
        props.setSearchResults(res.data[0]);
        props.setedit_flag(1);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  const [datos, setdatos] = useState();
  const [rowstate, setrowstate] = useState();
  const [inps, setinps] = useState([]);
  const [update_flag, setflag] = useState(0);

  useEffect(() => {
    Axios.get("http://localhost:3001/", {}).then((response) => {
      setdatos(response.data["results"]);
      setinps(response.data["infosaat"]);

    });
  }, [update_flag]);

  


  return (
    <div className="display_container">
      <TableContainer  component={Paper} sx={{ maxHeight: 600 }} >
        <Table id='tab' sx={{ minWidth: 700 }} stickyHeader aria-label="costumized label"
        getTrProps={(state, rowInfo) => {
          if (rowInfo && rowInfo.row) {
            return {
              onClick: (e) => {
                this.setState({
                  selected: rowInfo.index
                })
              },
              style: {
                background: rowInfo.index === this.state.selected ? '#00afec' : 'white',
                color: rowInfo.index === this.state.selected ? 'white' : 'black'
              }
            }
          }else{
            return {}
          }
        } }>
        <TableRow>
              <TableCell
                align="center"
                colSpan={20}
                sx={{ backgroundColor: "lightgreen" }}
              >
                Sous-contrat
              </TableCell>
              <TableCell
                align="center"
                colSpan={5}
                sx={{ backgroundColor: "lightpink" }}
              >
                Conducteur
              </TableCell>
              <TableCell
                align="center"
                colSpan={22}
                sx={{ backgroundColor: "lightblue" }}
              >
                Vehicule
              </TableCell>
            </TableRow>
          <TableHead>
            <TableRow >
            {inps.map((elt) => {
                if (typeof elt !== "string") {
                  return <StyledTableCell className="tabcell" key={uuid()} >{elt.name}</StyledTableCell>;
                }
              })}
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {datos?.map((car) => {
              return (
                <TableRow className='row' key={uuid()}>
                  {infos.map((elt) => {
                    if (typeof elt === "object")
                      return (
                        <StyledTableCell align="center"  style={{ }} key={uuid()}>
                          {car[elt.label]}
                        </StyledTableCell>
                      );
                  })}
                  <StyledTableCell>
                    <Button
                      variant="contained"
                      endIcon={<EditIcon />}
                      onClick={() => {
                        update_flag === 0 ? setflag(1) : setflag(0);
                        edit_car(car._id);
                      }}
                    >
                      edit
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={() => {
                        update_flag === 0 ? setflag(1) : setflag(0);

                        delete_car(car._id);
                      }}
                    >
                      delete
                    </Button>
                  </StyledTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Display;
