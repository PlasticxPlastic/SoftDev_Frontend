import "./signin.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const SignIn = () => {
  const [isShown, setIsSHown] = useState(false);
  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };
  return (
      <div class="test"> 
        <div className="main">
          <img className="rovlogo" src="/image/rovlogo.png"></img>
          <img className="logo" src="/image/yorn.png"></img>
        </div>

        <div className="first">
          <div className="loginn">
              <h1>
                    LOGIN
              </h1>
              <form action=""> 
                <div > 
                  <input className="textemail" type="text" placeholder="Enter Email or Username" name="email" id="email"/> 
                </div> 
                <div> 
                  <input className="textpass" type={isShown ? "text" : "password"} placeholder="Password" name="password" id="passw"/> 
                </div>  
                <button className="btnlog " type="submit">Login</button>
              </form> 
              <Link to="/signup">  {/* ใส่ page ที่จะไป */}
                      <h4>Register hear !</h4>
              </Link>
          </div>
        </div>
      </div>
  );
  }
  
  export default SignIn;