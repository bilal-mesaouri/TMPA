import React from "react";
import Axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import tmpa_logo from "../tmpa_logo.PNG";
import SearchIcon from "@mui/icons-material/Search";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar(props) {
  const theme2 = createTheme({
    palette: {
      primary: {
        light: "#ff0000",
        main: "#ffffff",
        dark: "#ff0000",
        contrastText: "#000",
      },
      secondary: {
        light: "#3f51b5",
        main: "#010048",
        dark: "#1a237e",
        contrastText: "#fff",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { minWidth: 10 },
        },
      },
    },
    typography: {
      fontSize: 20,
    },
  });
  const navigate = useNavigate();
  async function disconnect() {
    await Axios.post("http://localhost:3001/disconnect").then((response) => {
      navigate("/Accueil");

    });
  }

  const [srch_inp,setsrch_inp] = useState()
  const send_srch = ()=>{
    console.log(srch_inp)
    Axios.post('http://localhost:3001/search',{search:srch_inp})
    .then((response) => {
      console.log('resp data search ->->-> ',response.data)
      props.setSearchResults(response.data)
    });
  }
function reset_search(){
  props.setSearchResults([])
}
  return (
    <ThemeProvider theme={theme2}>
      <div className="navbar">
        <div className="lefts">
          <img src={tmpa_logo} className="App-logo" alt="logo" />
        </div>
        <div className="center">
          <TextField
            id="standard-basic"
            label="Search a Car or a Driver ..."
            variant="standard"
            onChange={(e) => {
            
              setsrch_inp(e.target.value);
            }}
            sx={{ minWidth: 350 }}
          />
          <Stack direction="row" spacing={2}>

          <Button
            className="srch_btn"
            variant="contained"
            color="secondary"
            sx={{ fontSize: 22, color: "primary.main" }}
            endIcon={<SearchIcon />}
            onClick={send_srch}
          >
            Search
          </Button>
          <Button
            className="srch_btn"
            variant="outlined"
            color="secondary"
            sx={{ fontSize: 22 }}
            endIcon={<RestartAltIcon />}
            onClick={reset_search}
          >
            reset
          </Button>
          </Stack>
        </div>
        <div className="rights">
          <nav>
            <Stack direction="row" spacing={5}>
              <Button size="large" onClick={() => props.switch_comp(1)}>
                Affichier
              </Button>
              <Button size="large" onClick={() => props.switch_comp(0)}>
                Ajouter
              </Button>
              <Button size="large" onClick={disconnect}>
                Deconnecter
              </Button>
            </Stack>
          </nav>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Navbar;
