import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserReport from "./pages/UserReport";
import BuyerReport from "./pages/ฺBuyerReport";
import BoosterReport from "./pages/ฺBoosterReport";
import Home from "./pages";
import CreateBoosterForm from "./pages/booster"; // Corrected import
import Profile from "./pages/ownProfile";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserReport />} />
        {/* Add a route for the CreateSellOrder component */}
        <Route path="/BoosterReport" element={<BoosterReport />} />
        <Route path="/BuyerReport" element={<BuyerReport />} />
        <Route path="/UserReport" element={<UserReport />} />
        <Route path="/" element={<Home />} />
        <Route path="/UserReport" element={<UserReport />} />
        <Route path="/CreateBooster" element={CreateBoosterForm ()} /> 
        <Route path="/Profile" element={Profile ()} /> 
        <Route path="/Signin" element={SignIn ()} /> 
        <Route path="/Signup" element={SignUp ()} /> 
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
