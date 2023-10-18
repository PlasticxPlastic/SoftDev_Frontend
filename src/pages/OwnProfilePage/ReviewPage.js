import React, { useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

function ReviewPage() {
    
  const [rating, setRating] = useState(0);
  const userID = useParams();
    const uid = userID.uid;

  console.log(userID);

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  var token = localStorage.getItem('accessToken');

  const config = {
    headers: {
      authorization: `${token}`, // กำหนดค่า Authorization header ด้วย Bearer token
    },
  }; 

  const handleReviewSubmit = () => {
    Axios.patch('http://localhost:3333/buy/review', { "review_score":rating, "uid":uid }) // ส่งคะแนนผ่าน Axios
      .then((response) => {
        console.log('ส่งคะแนนเรียบร้อย'); // แสดงข้อความเมื่อสำเร็จ  
      })
      .catch((error) => {
        console.error('เกิดข้อผิดพลาดในการส่งคะแนน', error); // แสดงข้อความเมื่อเกิดข้อผิดพลาด
      });
      window.location.href = `/ownProfile/${uid}`
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const ratingContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const sliderStyle = {
    width: '80%',
    marginTop: '20px',
  };

  const buttonStyle = {
    marginTop: '20px',
    backgroundColor: 'green',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={ratingContainerStyle}>
        <p>โปรดให้คะแนนความประทับใจต่อผู้ให้บริการ</p>
        <input
          type="range"
          min="0"
          max="5"
          step="1"
          value={rating}
          onChange={handleRatingChange}
          style={sliderStyle}
        />
        <p>คะแนน: {rating}</p>
        <button style={buttonStyle} onClick={handleReviewSubmit}>
          ส่งคะแนน
        </button>
      </div>
    </div>
  );
}

export default ReviewPage;
