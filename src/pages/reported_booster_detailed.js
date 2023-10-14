import "./announcing.css";
import { NavLink as Link } from "react-router-dom";
import ImgModal from "../Components/ImgModal";

import SignUp from './signup';
import SignIn from './signin';
import reported_booster from './reported_booster' ;

import reported_ID from './reported_ID';
import reported_ID_detailed from './reported_ID_detailed';
const reported_booster_detailed = () => {
  let userBeginImg ="https://i.ytimg.com/vi/KlSgV4wgF68/maxresdefault.jpg"
  let boosterBeginImg ="https://pic.onlinewebfonts.com/svg/img_346990.png"
  let userEndImg="https://i.ytimg.com/vi/KlSgV4wgF68/maxresdefault.jpg"
  let boosterEndImg="https://pic.onlinewebfonts.com/svg/img_346990.png"
  let userID = "userID"
  let date ="วัน/เดือน/ปี"
  let userGold ="500"
  let userRedGem ="700"
  let userRedBall ="2"
  let userCoupon ="245"
  let boosterGold ="500"
  let boosterRedGem ="400"
  let boosterRedBall ="1"
  let boosterCoupon ="145"  
  let userGold1 ="500"
  let userRedGem1 ="700"
  let userRedBall1 ="2"
  let userCoupon1 ="245"
  let boosterGold1 ="500"
  let boosterRedGem1 ="400"
  let boosterRedBall1 ="1"
  let boosterCoupon1 ="145"
  let userBeginRank = "Gold"
  let userDesiredRank = "Conqueror"
  let userAfterBoost = "Bronze"
  let userTimeSpend =" ล่าช้ากว่ากำหนด 1 วัน"
  let boosterBeginRank = "Gold"
  let boosterDesiredRank = "Conqueror"
  let boosterAfterBoost = "Bronze"
  let boosterTimeSpend =" ล่าช้ากว่ากำหนด 1 วัน"
  let userContact = "IncognitoMan"
  let boosterContact = "godIsGod"
  let userTelephone = "0123456789"
  let userEmail = "user@gmail.com"
  let userFacebook ="IncognitoMan"
  let userLineID = "@supersecret"
  let boosterTelephone = "9876543210"
  let boosterEmail = "booster@gmail.com"
  let boosterFacebook ="god"
  let boosterLineID = "@sgodIn"
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
        ><Link to="/reported_ID" style={{color:"grey", textDecorationLine:"none"}}>
          <h2 >ID ที่ถูกแจ้งปัญหามา</h2>
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
          <Link to="/reported_booster" style={{color:"grey", textDecorationLine:"none", marginTop:"-3.5vh"}}>
          <h2>Booster ที่ถูกแจ้งปัญหา</h2>
        </Link>
          
        </div>
        <div class="total-post">
          <div class="reported_container ">
            <div class="id_catagory_top">
              <h4>item</h4>
              <h4>seller</h4>
              <h4>transaction</h4>
            </div>
            <div style={{ display: "flex" }}>
              <div class="photo_layer_container">
                <h3>รูปก่อนเริ่มงาน</h3>
                <div
                  class="text_row_adjust pack0"
                  style={{ margin: "0vh 0vh 3vh " }}
                >
                  <h6>user</h6>
                  <h6>booster</h6>
                </div>
                <button2 style={{ display: "flex" }}>
                  <ImgModal src={userBeginImg}></ImgModal>

                  <ImgModal src={boosterBeginImg}></ImgModal>
                </button2>
                <h3>รูปหลังเริ่มงาน</h3>
                <div
                  class="text_row_adjust pack0"
                  style={{ margin: "0vh 0vh 3vh" }}
                >
                  <h6>user</h6>
                  <h6>booster</h6>
                </div>
                <button2 style={{ display: "flex" }}>
                  <ImgModal src={userEndImg}></ImgModal>

                  <ImgModal src={boosterEndImg}></ImgModal>
                </button2>
                <div></div>
              </div>
              <div class="booster_data_container">
                <div
                  class="text_row_adjust"
                  style={{ padding: "0vh 5vh 0vh 5vh" }}
                >
                  <h6>UID</h6>
                  <h6>เวลา</h6>
                </div>
                <div class="one_row_adjust">
                  <div class="small_box">{userID}</div>
                  <div class="small_box">{date}</div>
                </div>
                <div
                  class="half_row_adjust "
                  style={{ justifyContent: "flex-start" }}
                >
                  <h4>ทรัพยากรก่อนเริ่มงาน</h4>
                  <div class="tiny_box user">user</div>
                  <div class="tiny_box booster">booster</div>
                </div>
                <div class="text_row_adjust ">
                  <h6>ทอง</h6>
                  <h6>เพชรแดง</h6>
                  <h6>ลูกแก้ว</h6>
                  <h6>คูปอง</h6>
                </div>
                <div class="one_row_adjust">
                  <div class="small_box user gold">{userGold}</div>
                  <div class="small_box user gem">{userRedGem}</div>
                  <div class="small_box user red-gem">{userRedBall}</div>
                  <div class="small_box user coupon">{userCoupon}</div>
                </div>

                <div class="text_row_adjust ">
                  <h6>ทอง</h6>
                  <h6>เพชรแดง</h6>
                  <h6>ลูกแก้ว</h6>
                  <h6>คูปอง</h6>
                </div>

                <div class="one_row_adjust">
                  <div class="small_box booster gold">{boosterGold}</div>
                  <div class="small_box booster gem">{boosterRedGem}</div>
                  <div class="small_box booster red-gem">{boosterRedBall}

                  </div>
                  <div class="small_box booster coupon">{boosterCoupon}</div>
                </div>
                <div
                  class="half_row_adjust "
                  style={{ justifyContent: "flex-start" }}
                >
                  <h4>ทรัพยากรหลังเริ่มงาน</h4>
                </div>
                <div class="text_row_adjust ">
                  <h6>ทอง</h6>
                  <h6>เพชรแดง</h6>
                  <h6>ลูกแก้ว</h6>
                  <h6>คูปอง</h6>
                </div>
                <div class="one_row_adjust">
                  <div class="small_box user gold">{userGold1}</div>
                  <div class="small_box user gem">{userRedGem1}</div>
                  <div class="small_box user red-gem">{userRedBall1}</div>
                  <div class="small_box user coupon">{userCoupon1}</div>
                </div>

                <div class="text_row_adjust ">
                  <h6>ทอง</h6>
                  <h6>เพชรแดง</h6>
                  <h6>ลูกแก้ว</h6>
                  <h6>คูปอง</h6>
                </div>
                <div class="one_row_adjust">
                  <div class="small_box booster gold">{boosterGold1}</div>
                  <div class="small_box booster gem">{boosterRedGem1}</div>
                  <div class="small_box booster red-gem">{boosterRedBall1}</div>
                  <div class="small_box booster coupon">{boosterCoupon1}</div>
                </div>

                <div
                  class="half_row_adjust "
                  style={{ justifyContent: "flex-start" }}
                >
                  <h4>แรงก์</h4>
                </div>
                <div class="text_row_adjust pack ">
                  <h6>แรงก์ที่เริ่ม</h6>
                  <h6>แรงก์ที่ต้องการ</h6>
                  <h6>แรงก์หลังจบงาน</h6>
                  <h6>ระยะเวลาที่ใช้</h6>
                </div>
                <div class="one_row_adjust zip">
                  <div class="small_box user">{userBeginRank}</div>
                  <div class="small_box user">{userDesiredRank}</div>
                  <div class="small_box user">{userAfterBoost}</div>
                  <div class="small_box user little-font">{userTimeSpend}</div>
                </div>

                <div class="one_row_adjust zip">
                  <div class="small_box booster">{boosterBeginRank}</div>
                  <div class="small_box booster">{boosterDesiredRank}</div>
                  <div class="small_box booster">{boosterAfterBoost}</div>
                  <div class="small_box booster little-font">{boosterTimeSpend}</div>
                </div>
                <div class="half_row_adjust">
                  <h4>Buyer_Contact({userContact})</h4>
                </div>
                <div class="text_row_adjust pack1 ">
                  <h6>เบอร์โทร</h6>

                  <h6>email</h6>
                </div>
                <div class="one_row_adjust">
                  <div class="normal_box">{userTelephone}</div>
                  <div class="normal_box">{userEmail}</div>
                </div>
                <div class="text_row_adjust pack2 ">
                  <h6>Facebook(Optional)</h6>

                  <h6>Line(Optioanl)</h6>
                </div>
                <div class="one_row_adjust zip">
                  <div class="small_box">{userFacebook}</div>
                  <div class="small_box">{userLineID}</div>
                </div>
                <div class="half_row_adjust">
                  <h4>Seller_Contact({boosterContact})</h4>
                </div>
                <div class="text_row_adjust pack1 ">
                  <h6>เบอร์โทร</h6>

                  <h6>email</h6>
                </div>
                <div class="one_row_adjust">
                  <div class="normal_box ">{boosterTelephone}</div>
                  <div class="normal_box">{boosterEmail}</div>
                </div>
                <div class="text_row_adjust pack2 ">
                  <h6>Facebook(Optional)</h6>

                  <h6>Line(Optioanl)</h6>
                </div>
                <div class="one_row_adjust zip">
                  <div class="small_box">
                    <h1></h1>
                    {boosterFacebook}
                  </div>
                  <div class="small_box ">{boosterLineID}</div>
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
                  <Link to="/reported_booster" style={{color:"black", textDecorationLine:"none"}}>
                  <h3>Reject</h3>
              </Link>
                  </button>
                  <button style={{ border: "2px solid rgb(237,237,237)" }}>
                  <Link to="/reported_booster" style={{color:"black", textDecorationLine:"none"}}>
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

export default reported_booster_detailed;
