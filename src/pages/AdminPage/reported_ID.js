import "./announcing.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImgModal from "../../Components/ImgModal/index";
import Card from "../../Components/Card/cardReport";
import { Link } from 'react-router-dom'; // Import Link for routing to the signin page


function Reported_ID () {
  let ImageUrl ="https://i.ytimg.com/vi/rpcKrZC1LT4/maxresdefault_live.jpg"

  const [data, setData] = useState([]);

  useEffect(() => {
    // สร้างฟังก์ชันเพื่อดึงข้อมูล
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3333/report/admin-ID-Confirmation');
        setData(response.data);
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      }
    };

    // เรียกใช้ฟังก์ชัน fetchData เมื่อ component ถูกโหลด
    fetchData();
  }, []);

  console.log(data);

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
              <div class="reported_container">
              {data.map((item, index) => (
                <Link to={{ pathname: `/reported_ID_detailed/${index}`}} style={{ textDecoration: 'none' }}>
                  <Card
                    key={index}
                    price={item.price}
                    sid={item.sid}
                    bid={item.bid}
                    order_name={item.order_name}
                  />
                </Link>
              ))}
              </div>
            </div>
          </div>
        </div>

  );
};

export default Reported_ID;