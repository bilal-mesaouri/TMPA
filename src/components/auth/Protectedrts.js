import React from 'react'
import {Outlet,Navigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from "axios";


 function Protectedrts() {
    axios.defaults.withCredentials = true;
    const [isauth,setisauth] = useState(0)
    const [hasloaded,sethasloaded] = useState(0)
  
    useEffect( () => {
        console.log('inside the protected #####')
        const fetch = async ()=>{await axios.post('http://localhost:3001/verify').then( (res)=>{
        console.log('inside the protected #####')
         console.log('hehp',res.data.logedin)
         //setisauth(res.data['logedin'])
         setisauth(res.data.logedin)
         sethasloaded(1)
         
        })
         
      }
      fetch()
      
    
    }, [])
  return (
    <div style={{height:'100%'}}>
        {hasloaded?(isauth == 1?<Outlet/>:<Navigate to='/login'/>):null}
    </div>
  )
}

export default Protectedrts