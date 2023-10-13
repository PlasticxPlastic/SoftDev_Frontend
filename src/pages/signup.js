import "./signup.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [isShown, setIsSHown] = useState(false);
  const [isShown2, setIsSHown2] = useState(false);
  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
    setIsSHown2((isShown2) => !isShown2);
  };
   return (
      <div> 
        <div className="main">
          <img className="rovlogo" src="/image/rovlogo.png"></img>
          <img className="logo" src="/image/logo.png"></img>
          <img className="logos" src="/image/11.png"></img>
        </div>

        <div className="first">
          <div className="loginn">
              <h1>
                      REGISTER
              </h1>
              <form  action=""> 
                  <div > 
                      <input className="textemail1" type="text" placeholder="Enter Email" name="email" id="email"/> 
                  </div> 
                  <div > 
                      <input className="textemail2" type="text" placeholder="Create Username" name="email" id="username"/> 
                  </div> 
                  <div > 
                      <input className="textemail3" type="text" placeholder="Create number" name="email" id="number"/> 
                  </div> 
                  <div > 
                      <input className="textemail4" type="text" placeholder="First Name" name="email" id="firstname"/> 
                  </div>
                  <div > 
                      <input className="textemail5" type="text" placeholder="Last Name" name="email" id="lastname"/> 
                  </div>
                  <div> 
                      <input className="textpass1" type={isShown ? "text" : "password"} placeholder="Password" name="password" id="passw"/> 
                  </div>  
                  <div> 
                      <input className="textpass2" type={isShown2 ? "text" : "password"} placeholder="Confirm Password" name="password" id="conpassw"/> 
                  </div>  
                      <button className="btnlogin" type="submit">Login</button>
              </form> 
              <Link className="log" to="/signin">  {/* ใส่ page ที่จะไป */}
                      <h4>Login hear !</h4>
              </Link>
              
          </div>
        </div>
      </div>
  );
  }
  
  export default SignUp;
