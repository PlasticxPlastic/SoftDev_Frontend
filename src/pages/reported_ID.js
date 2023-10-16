import "./announcing.css";
import CardProfile from "../Components/cardProfile";
import ImgModal from "../Components/ImgModal";
import { Link } from 'react-router-dom'; // Import Link for routing to the signin page
const reported_ID = () => {
  let ImageUrl ="https://i.ytimg.com/vi/rpcKrZC1LT4/maxresdefault_live.jpg"
let ProductName = "RoV ราคาถูก"
let Seller ="godIsGod"
let Status ="Pending"
let Price =200
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
          <div class="pack01">
              <Link to="/reported_ID_detailed" style={{al:"center",color:"grey", textDecorationLine:"none", width:"min-content"}}>
                <CardProfile style ={{width:"100vh"}}
              imageUrl={ImageUrl}
              productName={ProductName} status={Status} seller={Seller} price={Price} >
                </CardProfile>
              </Link>
              </div>

        </div>
        </div>
            

          </div>
        </div>

  );
};

export default reported_ID;
