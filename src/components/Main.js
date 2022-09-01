import React from "react";
import Display3 from "./Display3";
import Navbar from "./Navbar";
import Separation_bar from "./Separation_bar";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Add_contrat from "./Add_contrat";

function Main() {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#ff0000',
        main: '#000000',
        dark: '#ffaaee',
        contrastText: '#fff',
      },
      secondary: {
        light: '#2A4494',
        main: '#259ad7',
        dark: '#224870',
        contrastText: '#fff',
      }},

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

  const [search_results, setSearchResults] = useState([]);
  const [adding_flag, setadding_flag] = useState(1);
  const [sepFlag, setseparationFlag] = useState(0);
  return (
    
      <div className="home">
        <Navbar setSearchResults={setSearchResults} switch_comp={setadding_flag} sw_flag={adding_flag} />
        
        {adding_flag ? (<>
          <Separation_bar change_sep={setseparationFlag} />
          <ThemeProvider theme={theme}>
          <Display3 sepFlag={sepFlag} search_results={search_results}/>
          </ThemeProvider>
          </>) : (
          <Add_contrat sw_flag={adding_flag} switch_comp={setadding_flag} />
        )}
      </div>
    
  );
}

export default Main;
