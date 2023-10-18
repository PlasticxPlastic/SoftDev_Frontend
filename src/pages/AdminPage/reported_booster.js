import "./announcing.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImgModal from "../../Components/ImgModal/index";
import CardBoost from "../../Components/Card/cardReportBoost";
import { Link } from 'react-router-dom'; // Import Link for routing to the signin page

function Reported_booster () {

  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3333/report/admin-Boosting-Confirmtaion');
        setData(response.data);
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      }
    };
    fetchData();
  }, []);

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
        ><Link to="/reported_ID" style={{color:"grey", textDecorationLine:"none", marginTop:"0.1vh"}}>
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
            {data.map((item, index) => (
                <Link to={{ pathname: `/reported_booster_detailed/${index}/${item.eid}`}} style={{ textDecoration: 'none' }}>
                  <CardBoost
                    key={index}
                    price={item.price}
                    user_name={item.user_name}
                    before_tier={item.before_tier}
                    after_tier={item.after_tier}
                  />
                </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reported_booster;