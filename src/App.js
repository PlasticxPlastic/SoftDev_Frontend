import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from './pages';
import About from './pages/About';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import MainShop from './pages/MainShop';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/MainShop" element={<MainShop />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;