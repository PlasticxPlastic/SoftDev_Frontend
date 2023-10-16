import "./announcing.css";
import ImgModal from "../Components/ImgModal";
import {  Link } from "react-router-dom";
import CardProfile from "../Components/cardProfile";
let ImageUrl ="https://i.ytimg.com/vi/rpcKrZC1LT4/maxresdefault_live.jpg"
let ProductName = "RoV ราคาถูก"
let Seller ="godIsGod"
let Status ="Pending"
let Price =200
const reported_ID_detailed = () => {
  let userID = "userID"
  let date ="วัน/เดือน/ปี"
  let additionData = "xxxxxxxxxxxxxxxxasddddddddddddddddddzcvczcvvvvvvvvvvvvvvvvvvvvvvvvdafffffffffffffffffffffffffffddddasdddddddddddddasddddxxxhxxxxx"
  let userContact = "godIsGod"
  let userEmail = "user@gmail.com"
  let userTelephone = "0123456789"
  let userFacebook ="IncognitoMan"
  let userLineID = "@supersecret"
  let Seller_Contact ="IncognitoMan"
  let sellerEmail = "user@gmail.com"
  let sellerTelephone = "0123456789"
  let sellerFacebook ="IncognitoMan"
  let sellerLineID = "@supersecret"

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
        <Link to="/reported_ID" style={{color:"grey", textDecorationLine:"none", marginTop:"-3.5vh"}}>
          <h2 >ID ที่ถูกแจ้งปัญหามา</h2>
        </Link>
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

            margin: "-.5vh",
            marginLeft: ".5vh",
            backgroundColor: "transparent",
            width: "70vh",
            paddingLeft: "35vh",
          }}
        >
                  <Link to="/reported_booster" style={{color:"grey", textDecorationLine:"none", marginTop:"-6vh"}}>
          <h2 >Booster ที่ถูกแจ้งปัญหา</h2>
        </Link>
        </button>
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

            <div style={{ display: "flex" }}>
              <div class="photo_layer_container">
                <h3>รูปแสดงปัญหาการเข้าถึง ID</h3>

                <ImgModal src="https://i.ytimg.com/vi/KlSgV4wgF68/maxresdefault.jpg"></ImgModal>

                <div></div>
              </div>
              <div class="booster_data_container">
                <div class="text_row_adjust ">
                  <h6>{userID}</h6>
                  <h6>{date}</h6>
                </div>
                <div class="one_row_adjust">
                  <div class="small_box">{userID}</div>
                  <div class="small_box">{date}</div>
                </div>
                <div class="text_row_adjust pack1 ">
                  <h6>รายละเอียดเพิ่มเติม</h6>
                </div>
                <div class="three_row_adjust">
                  <div class="big_box text" >{additionData}</div>
                </div>
                <div class="half_row_adjust">
                  <h4>Buyer_Contact({userContact})</h4>
                </div>
                <div class="text_row_adjust pack1 ">
                  <h6>เบอร์โทรศัพท์</h6>
                  <h6>email</h6>
                </div>
                <div class="one_row_adjust">
                  <div class="normal_box">{userTelephone}</div>
                  <div class="normal_box">{userEmail}</div>
                </div>
                <div class="text_row_adjust pack3 ">
                  <h6>Facebook(Optional)</h6>

                  <h6>Line(Optioanl)</h6>
                </div>
                <div class="one_row_adjust">
                  <div class="small_box">{userFacebook}</div>
                  <div class="small_box">{userLineID}</div>
                </div>
                <div class="half_row_adjust">
                  <h4>Seller_Contact({Seller_Contact})</h4>
                </div>
                <div class="text_row_adjust pack1 ">
                  <h6>เบอร์โทรศัพท์</h6>
                  <h6>email</h6>
                </div>
                <div class="one_row_adjust">
                  <div class="normal_box">{sellerTelephone}</div>
                  <div class="normal_box">{sellerEmail}</div>
                </div>
                <div class="text_row_adjust pack3 ">
                  <h6>Facebook(Optional)</h6>

                  <h6>Line(Optioanl)</h6>
                </div>
                <div class="one_row_adjust">
                  <div class="small_box">{sellerFacebook}</div>
                  <div class="small_box">{sellerLineID}</div>
                </div>
                <div
                  class="three_row_adjust"
                  style={{ justifyContent: "flex-end" }}
                >
                  <button
                    style={{
                      backgroundColor: "red",
                      border: "2px solid rgb(237,237,237)",
                    }}
                  >
                                      <Link to="/reported_ID" style={{color:"black", textDecorationLine:"none"}}>
                  <h3>Reject</h3>
              </Link>
                  </button>
                  <button style={{ border: "2px solid rgb(237,237,237)" }}>
                  <Link to="/reported_ID" style={{color:"black", textDecorationLine:"none"}}>
                  <h3>Approve</h3>
              </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default reported_ID_detailed;
