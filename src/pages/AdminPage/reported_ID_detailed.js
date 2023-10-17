import "./announcing.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImgModal from "../../Components/ImgModal/index";
import Card from "../../Components/Card/cardReport";
import { Link, useParams } from 'react-router-dom'; // Import Link for routing to the signin page

function Reported_ID_detailed() {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [buyerData, setBuyerData] = useState({});
  const [sellerData, setSellerData] = useState({});
  const [userData, setUserData] = useState([]);

  const getProfileData = () => {
    axios.get(`http://localhost:3333/report/get_user_infomation`).then((response) => {
      const userData = response.data;
      setUserData(userData);
    });
  }

  useEffect(() => {
    getProfileData();
  }, []);

  useEffect(() => {
    // สร้างฟังก์ชันเพื่อดึงข้อมูล
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3333/report/admin-ID-Confirmation');
        setData(response.data[id]);

        // data.bid และ data.sid สามารถเปลี่ยนไปเป็นแบบนี้เพื่อป้องกันข้อผิดพลาดหากข้อมูลยังไม่พร้อมใช้งาน
        const buyerId = data.bid - 1;
        const sellerId = data.sid - 1;

        if (buyerId >= 0 && sellerId >= 0) {
          setBuyerData(userData[buyerId]);
          setSellerData(userData[sellerId]);
        }
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      }
    };

    fetchData();
  }, []);

  const showBuyerSellerData = () => {
    console.log(data.orderID)
    if (data.bid) {
      setBuyerData(userData[data.bid - 1]);
    }
    if (data.sid) {
      setSellerData(userData[data.sid - 1]);
    }
  }


  

  const handleRejectButtonClick = () => {
    axios.patch('http://localhost:3333/report/set_report_order_status',{
      "orderID": data.orderID, 
      "status" : "Completed"}).then(() => {
        console.log('Order status updated successfully');
      })
      .catch((error) => {
        console.error('Error updating order status', error);
      });

    window.location.href = `/reported_ID`;
  };

  const handleApproveButtonClick = () => {
    axios.patch('http://localhost:3333/report/set_report_order_status_advance',{
      "orderID": data.orderID, 
      "status" : "Reported",
      "sid" : data.sid}).then(() => {
        console.log('Order status updated successfully');
      })
      .catch((error) => {
        console.error('Error updating order status', error);
      });

    window.location.href = `/reported_ID`;
  };

  return (
    <div className="home-container" id="home-container">
      <div className="full-container sticky-left">
        <div className="top-bar"></div>
        <div
          className="top-bar"
          style={{
            width: "35vh",
            backgroundColor: "transparent",
          }}
        >
          <Link to="/reported_ID" style={{ color: "grey", textDecorationLine: "none", marginTop: "-3.5vh" }}>
            <h2>ID ที่ถูกแจ้งปัญหามา</h2>
          </Link>
        </div>
        <div
          className="top-bar"
          style={{
            width: "35vh",
            backgroundColor: "black",
          }}
        ></div>
        <button
          className="top-bar"
          style={{
            margin: "-.5vh",
            marginLeft: ".5vh",
            backgroundColor: "transparent",
            width: "70vh",
            paddingLeft: "35vh",
          }}
        >
          <Link to="/reported_booster" style={{ color: "grey", textDecorationLine: "none", marginTop: "-6vh" }}>
            <h2>Booster ที่ถูกแจ้งปัญหา</h2>
          </Link>
        </button>
        <div className="total-post">
          <div className="reported_container">
            <div className="pack01">
              <Card
                price={data.price}
                sid={data.sid}
                bid={data.bid}
                order_name={data.order_name}
              />
            </div>
            <div style={{ display: "flex" }}>
              <div className="photo_layer_container">
                <h3>รูปแสดงปัญหาการเข้าถึง ID</h3>
                <ImgModal src="https://i.ytimg.com/vi/KlSgV4wgF68/maxresdefault.jpg"></ImgModal>
                <div></div>
              </div>
              <div className="booster_data_container">
                <div className="text_row_adjust pack1">
                  <h6>รายละเอียดเพิ่มเติม</h6>
                </div>
                <div className="three_row_adjust">
                  <div className="big_box text">{data.detail}</div>
                </div>
                <div className="half_row_adjust">
                  <h4>Buyer_Contact() </h4><button onClick={() => showBuyerSellerData()}>โชว์ข้อมูล</button>
                </div>
                <div className="text_row_adjust pack1">
                  <h6>เบอร์โทรศัพท์</h6>
                  <h6>email</h6>
                </div>
                <div className="one_row_adjust">
                  <div className="normal_box">{buyerData.con_num}</div>
                  <div className="normal_box">{buyerData.user_email}</div>
                </div>
                <div className="half_row_adjust">
                  <h4>Seller_Contact()</h4>
                </div>
                <div className="text_row_adjust pack1">
                  <h6>เบอร์โทรศัพท์</h6>
                  <h6>email</h6>
                </div>
                <div className="one_row_adjust">
                  <div className="normal_box">{sellerData.con_num}</div>
                  <div className="normal_box">{sellerData.user_email}</div>
                </div>
                <div className="three_row_adjust" style={{ justifyContent: "flex-end" }}>
                  <button style={{ backgroundColor: "red", border: "2px solid rgb(237,237,237)" }} onClick={handleRejectButtonClick}>
                    <Link to="/reported_ID" style={{ color: "black", textDecorationLine: "none" }}>
                      <h3>Reject</h3>
                    </Link>
                  </button>
                  <button style={{ border: "2px solid rgb(237,237,237)" }} onClick={handleApproveButtonClick} >
                    <Link to="/reported_ID" style={{ color: "black", textDecorationLine: "none" }}>
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
}

export default Reported_ID_detailed;
