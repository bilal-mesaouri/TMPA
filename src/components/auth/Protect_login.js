import React from 'react'
import {Outlet,Navigate} from 'react-router-dom'
import { useCookies } from "react-cookie";

import axios from "axios";


 function Protect_login() {
    axios.defaults.withCredentials = true;
    const [cookies, setCookie] = useCookies();


  return (
    <div style={{height:'100%'}}>
        {cookies.connected ?<Navigate to='/home'/>:<Outlet/>}
    </div>
  )
}

export default Protect_login