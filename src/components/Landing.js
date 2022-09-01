import React from "react";
import { Link } from "react-router-dom";
import tmpa_logo from "../tmpa_logo.PNG";
import tmpa_view from "C:/Users/yolo/Documents/react2/cars_management/src/tmpa_view.JPG";
function Landing() {
  return (
    <div className="landing_main">
      <div className="landing_img">
        <div className="landing_bar">
          <img src={tmpa_logo} className="App-logo" alt="logo" />
        </div>
        <img className="landing_view" src={tmpa_view} alt="VIEW" />
      </div>
      <div className="landing_link">
        <Link to="/home" style={{textDecoration: 'none'}} ><div className="link_div">Home</div></Link>
        <Link to="/login" style={{textDecoration: 'none'}} ><div className="link_div">Login</div></Link>
      </div>
      <div className="lading_footer"><div className="landing_footer_text">TMPA</div></div>
    </div>
  );
}

export default Landing;
