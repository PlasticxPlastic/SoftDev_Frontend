import './announcing.css';
import reported_ID_detailed from './reported_ID_detailed';
import reported_booster from './reported_booster' ;
import { NavLink as Link } from "react-router-dom";
const reported_ID = ()  => {
    return (
      
        <div class="home-container" id="home-container">
        <div class="full-container sticky-left">
          <div class="top-bar"></div>
          <div
            class="top-bar"
            style={{
              width: "35vh",
  
              backgroundColor: "transparent",
            }}
          >
            <h2>ID ที่ถูกแจ้งปัญหามา</h2>
          </div>
          <div
            class="top-bar"
            style={{
              width: "35vh",
  
              backgroundColor: "black",
            }}
          ></div>
          <button
            class="top-bar"
            style={{
  
              margin: "-6.5vh",
              marginLeft: ".5vh",
              backgroundColor: "transparent",
              backgroundColor: "transparent",
              width: "70vh",
              paddingLeft: "35vh",
            }}
          >
            <Link to="/reported_booster" style={{color:"grey", textDecorationLine:"none", marginTop:"0.1vh"}}>
          <h2>Booster ที่ถูกแจ้งปัญหา</h2>
        </Link>
          </button>

      <div class="total-post">
          <div class="reported_container ">
              <div class="id_catagory_top">
                  <h4>
                      item
                  </h4>
                  <h4>
                      seller
                  </h4>
                  <h4>
                      transaction
                  </h4>
              </div>
              <mockup class ="mockup">
              <Link to="/reported_ID_detailed" style={{color:"grey", textDecorationLine:"none"}}>
                <h2 >ID ที่ถูกแจ้งปัญหามา</h2>
              </Link>
                <div>
                Just Mockup
                </div>
                
              </mockup>

          </div>



          
      </div>

      

  </div>
  </div>
    )
  }
  
  export default reported_ID;