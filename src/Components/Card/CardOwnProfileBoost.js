import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';


function CardBoost({price, after_tier, before_tier, user_name, currentState, type, userID, boostingID}) {  

  const cardStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '80rem',
    height: '5rem',
    border: '1px solid #000',
    marginBottom: '1rem',
  };

  const leftSideStyle = {
    flex: '50%',
    display: 'flex',
    alignItems: 'center',
  };

  const imageStyle = {
    marginLeft: '2rem',
    width: '4rem',
    height: '4rem',
    backgroundColor: 'gray',
  };

  const textBelowImageStyle = {
    margin: '0.5rem',
  };

  const rightSideStyle = {
    flex: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingLeft: '1rem', // Add padding to separate the text from the state text
    marginTop: '1rem',
    marginRight: '3rem',
  };

  const priceTextStyle = {
    textAlign: 'right',
    color: 'red',
    
  };

  const priceTextStyle1 = {
    textAlign: 'right',
    color: 'green',
    
  };

  const usernameTextStyle = {
    textAlign: 'right',
    color: 'blue',
  };

  const greenButtonStyle = {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    marginRight: '10px',
    cursor: 'pointer',
  };

  const redButtonStyle = {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  };

  const buttonContainerStyle = {
    marginTop: '0.8rem',
  };
  

  const isBuyConfirm = currentState === 'BuyConfirm';
  const isBoostConfirm = currentState === 'BoostConfirm';

  var token = localStorage.getItem('accessToken');

  const config = {
    headers: {
      authorization: `${token}`, 
    },
  };

  const handleGreenButtonClick = () => {
    if (isBuyConfirm) {
      const userConfirmed = window.confirm('โปรดอ่านก่อนหากกดปุ่มยืนยันแล้ว คุณจะไม่สามารถทำเรื่องขอเงินคืนได้ หากเกิดปัญหาอะไรขึ้นในอนาคตถือว่าทางเราได้ทำหน้าที่ช่วยให้สำเร็จการ จ้างวานเรียบร้อยแล้วขอให้แน่ใจว่า ได้รับไอดที่ถูกต้องและไม่มีปัญหา ภายหลังแล้วแนะนำให้เช็คทุกอย่างให้ เรียบร้อยทั้งส่วนของไอดีและส่วนของข้อมูลส่วนตัว ก่อนจะทำการกดยืนยันหากอ่านทั้งหมดแล้วตกลงตามเงื่อนไขดังกล่าวขอให้กดยืนยันเพื่อดำเนินการต่อ');
      if (userConfirmed) {
        // ดำเนินการตามคำสั่งของคุณ
        // เช่น Axios.patch() หรือการรีโหลดหน้า
      }
    } else if (isBoostConfirm) {
      Axios.patch('http://localhost:3333/report/set_report_order_boost_status', {"boostingID": boostingID, "status": "Completed"})
        .then(() => {
          console.log('Order status updated successfully');
          window.alert('สถานะการสั่งซื้อได้รับการอัปเดตเรียบร้อยแล้ว');
          window.location.reload();
        })
        .catch((error) => {
          console.error('Error updating order status', error);
        });
    }
  };
  
  const handleRedButtonClick = () => {
    if (isBuyConfirm) {
      const userConfirmed = window.confirm('โปรดอ่านก่อนแน่ใจหรือไม่ว่าจะกดแจ้งปัญหาการโดนผลาญทรัพยากรใน กรณีที่เกิดการเผาผลาญทรัพยากรขึ้น จริงๆคุณจะได้รับเงินที่ใช้ในการจ้างวาน Booster คืน100% พร้อมทั้งเงินค่าทำขวัญเป็นจำนวน 1000 บาท  หากการผลาญทรัพยากรดังกล่าว ไม่ได้มีการเกิดขึ้นจริงๆแต่เป็นการแจ้งข้อมูลเท็จทางเราจะทำการ ระงับไอดีผู้ใช้ของคุณเป็นการ ลงโทษหากอ่านทั้งหมดแล้วตกลงตามเงื่อนไขดังกล่าวขอให้กดยืนยัน');
      if (userConfirmed) {
        // ดำเนินการตามคำสั่งของคุณ
      }
    } else if (isBoostConfirm) {
      const userConfirmed = window.confirm('คุณแน่ใจหรือไม่ที่ต้องการดำเนินการนี้?');
      if (userConfirmed) {
        window.location.href = `/UserReport/${userID}/${boostingID}`;
      }
    }
  };
  

  return (
    <div style={cardStyle}>
      <div style={leftSideStyle}>
        <div style={imageStyle}></div>
        <div style={{ width: '3rem' }}></div>
        <p style={textBelowImageStyle}>ผู้ว่าจ้าง : {user_name}</p>
      </div>
      <div style={rightSideStyle}>
      {price !== 0 ? (
        <p style={priceTextStyle}>ราคา : {price} บาท</p>
      ) : (
        <p style={priceTextStyle}>ประเภท : {type}</p>
      )}

        <div style={{ width: '3rem' }}></div>
        <p style={usernameTextStyle}>{before_tier} - {after_tier}</p>
        <div style={{ width: '3rem' }}></div>
        {isBuyConfirm || isBoostConfirm ? (
          <div style={buttonContainerStyle}>
            <button style={greenButtonStyle} onClick={handleGreenButtonClick}>
              ยืนยัน
            </button>
            <button style={redButtonStyle} onClick={handleRedButtonClick}>
              report
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default CardBoost;
