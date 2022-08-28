import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import tmpa_logo from "../tmpa_logo.PNG"
import SearchIcon from '@mui/icons-material/Search';
import { createTheme ,  ThemeProvider} from '@mui/material/styles';




function Navbar() {
  const theme2 = createTheme({
    palette: {
      primary: {
        light: '#cccccc',
        main: '#ffffff',
        dark: '#aaaaaa',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#000000',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
    components: {
      MuiButton: { 
        styleOverrides: { 
          root: { minWidth: 10 
          } 
        } 
      }
    },
    typography: {

      fontSize: 20,

    },
    

  
  });
  return (
    <ThemeProvider theme={theme2}>

    <div className="navbar">
    <div className="lefts"><img src={tmpa_logo} className="App-logo" alt="logo"/></div>
    <div className="center">
        <TextField id="standard-basic" label="Search ..."  variant="standard"  sx={{ minWidth: 350  }}/>
        <Button className="srch_btn" variant="outlained" sx={{ fontSize:22 ,color:'primary.main' }} endIcon={<SearchIcon />}>Search</Button>
      </div>
      <div className="rights">
        <nav>
          <Stack direction="row" spacing={2} >
            <Button size="large" href="#text-buttons">Affichier</Button>
            <Button size="large" href="#text-buttons">Ajouter</Button>
            <Button size="large" href="#text-buttons">Deconnecter</Button>
          </Stack>
        </nav>
      </div>
      
      

    </div>
    </ThemeProvider>

  );
}

export default Navbar;
