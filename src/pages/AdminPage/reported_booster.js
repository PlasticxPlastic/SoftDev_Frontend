import "./announcing.css";
import ImgModal from "../../Components/ImgModal/index";
import CardProfile from "../../Components/Card/CardProfile";
import { Link } from 'react-router-dom'; // Import Link for routing to the signin page
const reported_booster = () => {
  
  let ImageUrl ="https://i.ytimg.com/vi/rpcKrZC1LT4/maxresdefault_live.jpg"
let ProductName = "RoV ราคาถูก"
let Seller ="godIsGod"
let Status ="Pending"
let Price =200
  return (
    <div class="home-container" id="home-container">
      <div class="full-container sticky-left">
        <div class="top-bar"></div>
        <button
          class="top-bar"
          style={{
            width: "35vh",
            margin: "-6.5vh",
            marginLeft: ".4vh",
            backgroundColor: "transparent",
          }}
        >            <Link to="/reported_ID" style={{color:"grey", textDecorationLine:"none", marginTop:"0.1vh"}}>
          <h2>ID ที่ถูกแจ้งปัญหามา</h2>
      </Link>

        </button>
        <div
          class="top-bar"
          style={{
            width: "35vh",
            marginLeft: "35vh",
            backgroundColor: "black",
          }}
        ></div>
        <div
          class="top-bar"
          style={{
            backgroundColor: "transparent",
            width: "35vh",
            paddingLeft: "35vh",
          }}
        >
          <h2>Booster ที่ถูกแจ้งปัญหา</h2>
        </div>
        <div class="total-post">
          <div class="reported_container ">
            <div class="pack01">
              <Link to="/reported_booster_detailed" style={{al:"center",color:"grey", textDecorationLine:"none", width:"min-content"}}>
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

export default reported_booster;