import "./announcing.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImgModal from "../../Components/ImgModal/index";
import CardBoost from "../../Components/Card/cardReportBoost";
import { Link, useParams } from 'react-router-dom'; // Import Link for routing to the signin page

function Reported_booster_detailed (){
  const { id } = useParams();
  const {eid} = useParams();

  const [data, setData] = useState({});
  const [employerData, setEmployerData] = useState([]);
  const [userData, setUserData] = useState(null);





  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3333/report/admin-Boosting-Confirmtaion');
        setData(response.data[id]);
        
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      }
    };
    fetchData();
  }, []);

  const handleRejectButtonClick = () => {
    axios.patch('http://localhost:3333/report/set_report_order_boost_status',{
      "boostingID": data.boostingID, 
      "status" : "Completed"}).then(() => {
        console.log('Order status updated successfully');
      })
      .catch((error) => {
        console.error('Error updating order status', error);
      });

    window.location.href = `/reported_booster`;
  };

  const handleApproveButtonClick = () => {
    axios.patch('http://localhost:3333/report/set_report_order_boost_status_advance',{
      "boostingID": data.boostingID, 
      "status" : "Reported",
      "boid" : data.boid}).then(() => {
        console.log('Order status updated successfully');
      })
      .catch((error) => {
        console.error('Error updating order status', error);
      });

    window.location.href = `/reported_booster`;
  };

  console.log(data);

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
            <div class="pack01">
              <Link to="/reported_booster_detailed" style={{al:"center",color:"grey", textDecorationLine:"none", width:"min-content"}}>
                {/* <CardProfile style ={{width:"100vh"}}
              imageUrl={ImageUrl}
              productName={ProductName} status={Status} seller={Seller} price={Price} >
                </CardProfile> */}
              </Link>
              </div>


            <div style={{ display: "flex" }}>
              <div class="photo_layer_container">
                <h3>รูปก่อนเริ่มงาน</h3>
                <div
                  class="text_row_adjust pack0"
                  style={{ margin: "0vh 0vh 3vh " }}
                >
                  <h6>user</h6>
                </div>
                <button2 style={{ display: "flex" }}>
                  <ImgModal src={data.start_pic}></ImgModal>
                </button2>
                <h3>รูปหลังเริ่มงาน</h3>
                <div
                  class="text_row_adjust pack0"
                  style={{ margin: "0vh 0vh 3vh" }}
                >
                  <h6>user</h6>
                </div>
                <button2 style={{ display: "flex" }}>
                  <ImgModal src={data.after_pic}></ImgModal>
                </button2>
                <div></div>
              </div>
              <div class="booster_data_container">
                <div
                  class="text_row_adjust"
                  style={{ justifyContent: "flex-start" }}
                >
                  <h6>UID</h6>
                </div>
                <div class="one_row_adjust">
                  <div class="small_box">{data.uid}</div>
                </div>
                <div
                  class="half_row_adjust "
                  style={{ justifyContent: "flex-start" }}
                >
                  <h4>ทรัพยากรก่อนเริ่มงาน</h4>
                </div>
                <div class="text_row_adjust ">
                  <h6>ทอง</h6>
                  <h6>เพชรแดง</h6>
                  <h6>ลูกแก้ว</h6>
                  <h6>คูปอง</h6>
                </div>
                <div class="one_row_adjust">
                  <div class="small_box user gold">{data.before_gold}</div>
                  <div class="small_box user gem">{data.before_diamond}</div>
                  <div class="small_box user red-gem">{data.before_marble}</div>
                  <div class="small_box user coupon">{data.before_coupon}</div>
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
                  <div class="small_box user gold">{data.after_gold}</div>
                  <div class="small_box user gem">{data.after_diamond}</div>
                  <div class="small_box user red-gem">{data.after_marble}</div>
                  <div class="small_box user coupon">{data.after_coupon}</div>
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
                </div>
                <div class="one_row_adjust zip">
                  <div class="small_box user">{data.before_tier}</div>
                  <div class="small_box user">{data.after_tier}</div>
                </div>

                <div class="half_row_adjust">
                  <h4>Employer Contact({data.e_user_name})</h4>
                </div>
                <div class="text_row_adjust pack2 ">
                  <h6>เบอร์โทร</h6>

                  <h6>email</h6>
                </div>
                <div class="one_row_adjust zip">
                  <div class="small_box user">{data.e_con_num}</div>
                  <div class="small_box user">{data.e_user_email}</div>
                </div>
                <div class="text_row_adjust pack2 ">
                  <h6>Facebook(Optional)</h6>

                  <h6>Line(Optioanl)</h6>
                </div>
                <div class="one_row_adjust zip">
                  <div class="small_box">{data.facebook}</div>
                  <div class="small_box">{data.line}</div>
                </div>
                <div class="half_row_adjust">
                  <h4>Seller_Contact({data.bo_user_name})</h4>
                </div>
                <div class="text_row_adjust pack1 ">
                  <h6>เบอร์โทร</h6>

                  <h6>email</h6>
                </div>
                <div class="one_row_adjust">
                  <div class="normal_box ">{data.bo_con_num}</div>
                  <div class="normal_box">{data.bo_user_email}</div>
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
                    onClick={handleRejectButtonClick}
                  >
                  <h3>Reject</h3>
                  </button>
                  <button style={{ border: "2px solid rgb(237,237,237)" }} onClick={handleApproveButtonClick}>
                  <h3>Approve</h3>
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

export default Reported_booster_detailed;