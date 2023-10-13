import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserReport from "./pages/UserReport";
import BuyerReport from "./pages/ฺBuyerReport";
import BoosterReport from "./pages/ฺBoosterReport";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserReport />} />
        {/* Add a route for the CreateSellOrder component */}
        <Route path="/BoosterReport" element={<BoosterReport />} />
        <Route path="/BuyerReport" element={<BuyerReport />} />
        <Route path="/UserReport" element={<UserReport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
