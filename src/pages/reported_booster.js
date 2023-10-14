import "./announcing.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./signin";
import reported_ID from './reported_ID';
import reported_booster_detailed from './reported_booster_detailed' ;
import { NavLink as Link } from "react-router-dom";
// import {
//   Nav,
//   NavLogo,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from "../Components/Navbar/NavbarElements";


const reported_booster = () => {
  return (
    <div class="home-container" id="home-container">
      <div class="full-container sticky-left">
        <div class="top-bar"></div>
        <button
          class="top-bar"
          style={{
            width: "35vh",
            margin: "-6.5vh",
            marginLeft: ".4vh",
            backgroundColor: "transparent",
          }}
        >            <Link to="/reported_ID" style={{color:"grey", textDecorationLine:"none", marginTop:"0.1vh"}}>
          <h2>ID ที่ถูกแจ้งปัญหามา</h2>
      </Link>

        </button>
        <div
          class="top-bar"
          style={{
            width: "35vh",
            marginLeft: "35vh",
            backgroundColor: "black",
          }}
        ></div>
        <div
          class="top-bar"
          style={{
            backgroundColor: "transparent",
            width: "35vh",
            paddingLeft: "35vh",
          }}
        >
          <h2>Booster ที่ถูกแจ้งปัญหา</h2>
        </div>
        <div class="total-post">
          <div class="reported_container ">
            <div class="id_catagory_top">
              <h4>item</h4>
              <h4>seller</h4>
              <h4>transaction</h4>
            </div>
            <mockup class ="mockup">
              <Link to="/reported_booster_detailed" style={{color:"grey", textDecorationLine:"none"}}>
                <h2 >Booster ที่ถูกแจ้งปัญหามา</h2>
              </Link>
                <div>
                Just Mockup
                </div>
                
              </mockup>

          </div>
        </div>
      </div>
    </div>
  );
};

export default reported_booster;
