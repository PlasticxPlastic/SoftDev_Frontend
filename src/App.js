import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Profile from './pages/ProfilePage/Profile';
import OwnProfilePage from './pages/OwnProfilePage/ownProfile';
import UserReport from "./pages/OwnProfilePage/UserReport";
import BuyerReport from "./pages/OwnProfilePage/ฺBuyerReport";
import BoosterReport from "./pages/OwnProfilePage/ฺBoosterReport";
import SignIn from "./pages/LoginRegister/signin";
import SignUp from "./pages/LoginRegister/signup";
import Navbar from "./Components/Navbar/index";
import Slide from "./Components/Slide/slide";
import OrderDetail from './pages/ViewOrderPage/OrderDetail';
import CreateSellOrder from './pages/CreateOrderPage/CreateSellOrder';
import BoosterForm from './pages/CreateOrderPage/booster';
import MainShop from "./pages/MainshopPage/MainShop";
import Reported_ID from "./pages/AdminPage/reported_ID";
import Reported_ID_detailed from "./pages/AdminPage/reported_ID_detailed";
import reported_booster from "./pages/AdminPage/reported_booster";
import reported_booster_detail from "./pages/AdminPage/reported_booster_detailed";
import BoosterDetail from "./pages/ViewOrderPage/BoosterDetail";
import ProfilePage from "./pages/ProfilePage/Profile";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Slide />} />
        <Route path="/Signin" element={<SignIn />} /> 
        <Route path="/Signup" element={<SignUp/>} /> 

        
        <Route path="/BuyerReport/:userID/:orderID" element={<BuyerReport />} />
        <Route path="/UserReport" element={<UserReport />} />
        <Route path="/BoosterReport" element={<BoosterReport />} />
        <Route path="/BoosterDetail" element={<BoosterDetail />} />
        <Route path="/profile/:userId" element={<ProfilePage/>} />
        <Route path="/ownProfile/:userId" element={<OwnProfilePage/>} /> 
        <Route path="/OrderDetail" element={<OrderDetail />} />
        <Route path="/CreateSellOrder" element={<CreateSellOrder />} />
        <Route path="/BoosterForm" element={<BoosterForm />} />
        <Route path="/MainShop" element={<MainShop/>} />


        <Route path="/reported_ID" element={<Reported_ID/>} />
        <Route path="/reported_ID_detailed/:id" element={<Reported_ID_detailed/>} />
        <Route path="/reported_booster_detailed" element={reported_booster_detail()} />
        <Route path="/reported_booster" element={reported_booster()} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
