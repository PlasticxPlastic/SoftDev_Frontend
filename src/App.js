import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import CreateSellOrder from "./pages/CreateSellOrder"; // Import the CreateSellOrder component

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* Add a route for the CreateSellOrder component */}
        <Route path="/create-sell-order" element={<CreateSellOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
