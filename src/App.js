import "./App.css";
import { BrowserRouter as Router,useNavigate, Routes, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router';
import Add_car from "./components/Add_car";
import Display3 from "./components/Display3";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { createTheme ,  ThemeProvider} from '@mui/material/styles';

function App() {
  const theme = createTheme({

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

  const [search_results, setSearchResults] = useState({});
  const [adding_flag, setadding_flag] = useState(1);
 function change_scrn(){

  adding_flag==0?setadding_flag(1):setadding_flag(0)

 }
  return (
      <ThemeProvider theme={theme}>

    <div className="home">
      <Navbar/>
      {adding_flag?<Display3/>:<Add_car/>}
      

    </div>
    </ThemeProvider>
  );
}

export default App;
