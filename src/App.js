import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';
import ownProfile from './pages/ownProfile';
import UserReport from "./pages/UserReport";
import BuyerReport from "./pages/ฺBuyerReport";
import BoosterReport from "./pages/ฺBoosterReport";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Navbar from "./Components/Navbar/index";
import Slide from "./Components/Slide/slide";
import OrderDetail from './pages/OrderDetail';
import CreateSellOrder from './pages/CreateSellOrder';
import BoosterForm from './pages/booster';
import MainShop from "./pages/MainShop";
import report_id from "./pages/reported_ID";
import report_id_detail from "./pages/reported_ID_detailed";
import reported_booster from "./pages/reported_booster";
import reported_booster_detail from "./pages/reported_booster_detailed";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Slide />} />
        <Route path="/Signin" element={<SignIn />} /> 
        <Route path="/Signup" element={<SignUp/>} /> 
        <Route path="/BuyerReport" element={<BuyerReport />} />
        <Route path="/UserReport" element={<UserReport />} />
        <Route path="/BoosterReport" element={<BoosterReport />} />


        <Route path="/Profile" element={Profile()} /> 
        <Route path="/ownProfile" element={ownProfile()} /> 
        <Route path="/OrderDetail" element={<OrderDetail />} />
        <Route path="/CreateSellOrder" element={<CreateSellOrder />} />
        <Route path="/BoosterForm" element={<BoosterForm />} />
        <Route path="/MainShop" element={<MainShop/>} />

        {/* <Route path="/report_id" element={<report_id/>} />
        <Route path="/report_id_detail" element={<report_id_detail/>} />
        <Route path="/reported_booster_detail" element={<reported_booster_detail/>} /> */}
        {/* <Route path="/reported_booster" element={reported_booster()} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
