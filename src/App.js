import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Slide from "./Components/Slide/slide";
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import OrderDetail from './pages/OrderDetail';
import profile from './pages/Profile';
import CreateSellOrder from './pages/CreateSellOrder';
import BoosterForm from './pages/booster';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Slide />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/OrderDetail" element={<OrderDetail />} />
        <Route path="/CreateSellOrder" element={<CreateSellOrder />} />
        <Route path="/BoosterForm" element={<BoosterForm />} />
        <Route path="/Profile" element={profile ()} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
