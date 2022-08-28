import React from "react";
import {
    Routes,
    Route,
  } from "react-router-dom";
import Add_car from "./Add_car";
import Display3 from "./Display3";
import Display from "./Display";
import Search_car from "./Search_car";
import Display2 from "./Display2";
function Main() {
  return (
    <div>
        
      <Routes>
        <Route path="/scontrat" element={<Add_car/>} />
        <Route path="/disp" element={<Display3/>} />
      </Routes>
    </div>
  );
}

export default Main;
