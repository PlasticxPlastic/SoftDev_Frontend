import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';



function Card({ price, seller_user_name
  , order_name, currentState, orderID, userID, buyer_user_name}) {  
    


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
      Axios.patch('http://localhost:3333/buy/setOrderStatus',{"orderID": orderID, "status" : "Completed"},config).then(() => {
          console.log('Order status updated successfully');
        })
        .catch((error) => {
          console.error('Error updating order status', error);
        });
        window.location.href = `/ReviewPage/${userID}`;
    } else if (isBoostConfirm) {
    }
  };

  const handleRedButtonClick = () => {
    if (isBuyConfirm) {
        window.location.href = `/BuyerReport/${userID}/${orderID}`;
    } else if (isBoostConfirm) {
      // ทำงานเมื่อปุ่มสีแดงใน BoostConfirm ถูกคลิก
    }
  };

  return (
    <div style={cardStyle}>
      <div style={leftSideStyle}>
        <div style={imageStyle}></div>
        <div style={{ width: '3rem' }}></div>
        <p style={textBelowImageStyle}>ชื่อสินค้า : {order_name}</p>
        <div style={{ width: '3rem' }}></div>
        <p style={priceTextStyle1}>
          {buyer_user_name !== null ? `คนซื้อ : ${buyer_user_name}` : 'กำลังขาย'}
        </p>

      </div>
      <div style={rightSideStyle}>
        <p style={priceTextStyle}>ราคา : {price} บาท</p>
        <div style={{ width: '10rem' }}></div>
        <p style={usernameTextStyle}>คนขาย : {seller_user_name}</p>
        <div style={{ width: '2rem' }}></div>
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

export default Card;
