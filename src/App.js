import "./App.css";
import { BrowserRouter as Router,Navigate, Routes, Route, Link } from "react-router-dom";
import Main from "./components/Main"
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Protectedrts from "./components/auth/Protectedrts";
import Protect_login from "./components/auth/Protect_login";
import Landing from "./components/Landing";
import { useState } from "react";
import { createTheme ,  ThemeProvider} from '@mui/material/styles';
import { useEffect } from "react";

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
    <>

    
    
      <ThemeProvider theme={theme}>
    <Router>

      <Routes>
      <Route path="/" element={ <Navigate to="/Accueil" />} />
      <Route element={<Protect_login/>}>
        <Route path="/login" element={<Login/>}/>
        </Route>
        <Route path="/Accueil" element={<Landing/>}/>
        <Route element={<Protectedrts/>}>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Main/>}/>
        </Route>
      </Routes>
    </Router>
    </ThemeProvider>

    </>
  );
}

export default App;
