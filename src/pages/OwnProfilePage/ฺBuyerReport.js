import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BuyerReport() {
  const [detail, setDetail] = useState('');
  const [facebook, setFacebook] = useState('');
  const [line, setLine] = useState('');
  const [imageLink, setImageLink] = useState(''); // เพิ่ม state สำหรับเก็บลิงค์รูปภาพ
  const {orderID} = useParams();
  const {userID} = useParams();

  var token = localStorage.getItem('accessToken');

  const config = {
    headers: {
      authorization: `${token}`, 
    },
  };

  const greenButtonStyle = {
    width: '28rem',
    height: '3rem',
    backgroundColor: '#05FF00',
    border: '2px solid #05FF00',
    color: 'white',
    borderRadius: '10px',
    fontSize: '1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const containerStyle = {
    display: 'flex',
    height: '100vh',
  };

  const leftSideStyle = {
    width: '30%',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    borderRadius: '10px',
    marginRight: '2rem',
  };

  const squareWithTextStyle = {
    width: '30rem',
    height: '20rem',
    borderRadius: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const rightSideStyle = {
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    marginBottom: '7rem',
  };

  const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '0.2rem',
  };

  const linkInput = {
    width: '20rem',
    height: '2rem',
    borderRadius: '5px',
    border: '1px solid gray',
    fontSize: '1rem',
    padding: '0.5rem',
    color: 'black',
    backgroundColor: '#D9D9D9',
  };

  const titleStyle = {
    color: 'black',
    marginBottom: '0.5rem',
    fontSize: '1rem',
  };

  const titleStyle1 = {
    color: 'red',
    marginBottom: '0.5rem',
    fontSize: '4rem',
  };

  const largeInputStyleFacebook = {
    width: '25rem',
    height: '3rem',
    borderRadius: '10px',
    border: '1px solid gray',
    fontSize: '1rem',
    padding: '0.5rem',
    color: 'black',
    backgroundColor: '#17A9FD',
  };

  const largeInputStyleLine = {
    width: '25rem',
    height: '3rem',
    borderRadius: '10px',
    border: '1px solid gray',
    fontSize: '1rem',
    padding: '0.5rem',
    color: 'black',
    backgroundColor: '#4CC764',
  };

  const largeInputStyle = {
    width: '50rem',
    height: '20rem',
    borderRadius: '10px',
    border: '1px solid gray',
    fontSize: '1rem',
    padding: '0.5rem',
    color: 'black',
    backgroundColor: '#D9D9D9',
  };

  const largeInputContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
  };

  const handleImageUpload = (e) => {
    const link = e.target.value; // รับลิงค์รูปภาพ
    setImageLink(link);
  };

  const handleInputChange = (e) => {
    setDetail(e.target.value); // บันทึกรายละเอียด
  };

  const handleFacebookChange = (e) => {
    setFacebook(e.target.value); // บันทึกลิงค์ Facebook
  };

  const handleLineChange = (e) => {
    setLine(e.target.value); // บันทึกลิงค์ Line
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      orderID: orderID, // ใช้ค่า orderID ที่ถูกส่งเข้ามา
      buffer: imageLink,
      uid: userID,
      detail: detail,
      facebook: facebook,
      line: line,
    };
    console.log(data);

    axios.patch('http://localhost:3333/buy/setOrderStatus',{"orderID": orderID, "status" : "Pending"},config).then(() => {
          console.log('Order status updated successfully');
        })
        .catch((error) => {
          console.error('Error updating order status', error);
        });

    axios.post('http://localhost:3333/report/shop-Buyer-Report-Confirmation',data);

    window.location.href = `/ownProfile/${userID}`
  };

  return (
    <div style={containerStyle}>
      <div style={leftSideStyle}>
        <p style={titleStyle}>โปรดแนบลิงค์รูปประกอบการโดนโกง</p>
        <input
          type="text"
          style={{ ...linkInput }}
          onChange={handleImageUpload}
        />
        <div style={{ height: '1rem' }}></div>
        <div style={squareWithTextStyle}>
          {imageLink && (
            <img
              src={imageLink}
              alt="Uploaded Image"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          )}
        </div>
      </div>

      <div style={rightSideStyle}>
        <p style={titleStyle1}>กรุณากรอกข้อมูล</p>
        <div style={largeInputContainerStyle}>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>Detail</p>
            <textarea
              style={{
                ...largeInputStyle,
                height: '10rem',
                resize: 'vertical',
              }}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div style={largeInputContainerStyle}>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>Facebook</p>
            <input
              type="text"
              style={{ ...largeInputStyleFacebook }}
              onChange={handleFacebookChange}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>Line</p>
            <input
              type="text"
              style={{ ...largeInputStyleLine }}
              onChange={handleLineChange}
            />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem', marginLeft: 'auto' }}>
          <button onClick={handleSubmit} style={greenButtonStyle}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default BuyerReport;
