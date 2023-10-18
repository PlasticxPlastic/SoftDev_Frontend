import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UserReport() {      
    const {boostingID} = useParams();
    const [startPic, setStartPic] = useState('');
    const [afterPic, setAfterPic] = useState('');
    const {userID} = useParams(); //noinput
    const [beforeTier, setBeforeTier] = useState('');
    const [beforeGold, setBeforeGold] = useState('');
    const [beforeDiamond, setBeforeDiamond] = useState('');
    const [beforeMarble, setBeforeMarble] = useState('');
    const [beforeCoupon, setBeforeCoupon] = useState('');
    const [afterTier, setAfterTier] = useState('');
    const [afterGold, setAfterGold] = useState('');
    const [afterDiamond, setAfterDiamond] = useState('');
    const [afterMarble, setAfterMarble] = useState('');
    const [afterCoupon, setAfterCoupon] = useState('');
    const [facebook, setFacebook] = useState('');
    const [line, setLine] = useState('');
    const [side, setSide] = useState(''); //noinput
    const [datetime, setDatetime] = useState('');

    const handleImageUpload = (e) => {
      const link = e.target.value; // รับลิงค์รูปภาพ
      setStartPic(link);
    };

    const handleImageUpload1 = (e) => {
      const link = e.target.value; // รับลิงค์รูปภาพ
      setAfterPic(link);
    };

    const handleDateTimeChange = (e) => {
      setDatetime(e.target.value); // บันทึกรายละเอียด
    };

    const handlebeforeTierChange = (e) => {
      setBeforeTier(e.target.value);
    }
    const handlebeforeGoldChange = (e) => {
      setBeforeGold(e.target.value);
    }
    const handlebeforeDiamondChange = (e) => {
      setBeforeDiamond(e.target.value);
    }
    const handlebeforeMarbleChange = (e) => {
      setBeforeMarble(e.target.value);
    }
    const handlebeforeCouponChange = (e) => {
      setBeforeCoupon(e.target.value);
    }
    const handleafterGoldChange = (e) => {
      setAfterGold(e.target.value);
    }
    const handleafterDiamondChange = (e) => {
      setAfterDiamond(e.target.value);
    }
    const handleafterMarbleChange = (e) => {
      setAfterMarble(e.target.value);
    }
    const handleafterCouponChange = (e) => {
      setAfterCoupon(e.target.value);
    }
    const handlefacebookChange = (e) => {
      setFacebook(e.target.value);
    }
    const handlelineChange = (e) => {
      setLine(e.target.value);
    }
    const handleafterTierChange = (e) => {
      setAfterTier(e.target.value);
    }

    var token = localStorage.getItem('accessToken');

    const config = {
      headers: {
        authorization: `${token}`, 
      },
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
  
    const data = 
    {
      boostingID : boostingID ,
      start_pic : startPic,
      after_pic : afterPic,
      uid : userID,
      before_tier : beforeTier,
      before_gold : beforeGold,
      before_diamond : beforeDiamond,
      before_marble : beforeMarble,
      before_coupon : beforeCoupon,
      after_tier : afterTier,
      after_gold : afterGold,
      after_diamond : afterDiamond,
      after_marble : afterMarble,
      after_coupon : afterCoupon,
      facebook : facebook,
      line : line,
      side : "0",
      datetime : datetime 
    }
    console.log(data);
  
    axios.patch('http://localhost:3333/buy/setBoostStatus',{"boostID": boostingID, "status" : "Pending"}).then(() => {
          console.log('Order status updated successfully');
        })
        .catch((error) => {
          console.error('Error updating order status', error);
        });
  
      axios.post('http://localhost:3333/report/user-Report-Confirmation',data);
      window.location.href = `/ownProfile/${userID}`
    };


    const dropdownContainerStyle = {
        width: '9rem',
        height: '3rem',
        borderRadius: '10px',
        border: '1px solid gray',
        fontSize: '1rem',
        padding: '0.5rem',
        color: 'black',
        backgroundColor: '#D9D9D9', // First color
        };
    const greenButtonStyle = {
        width: '12rem',
        height: '2rem',
        backgroundColor: '#05FF00', // Background color is set to #05FF00
        border: '2px solid #05FF00',
        color: 'white', // Text color
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

// Inside the leftSideStyle object, remove the marginBottom property from squareWithTextStyle:
const leftSideStyle = {
    width: '30%',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center-align the content
    justifyContent: 'center', // Center-align the content
    padding: '2rem',
    borderRadius: '10px',
    marginRight: '2rem',
  };
  
  const textInsideSquareStyle = {
    fontSize: '1.5rem', // Adjust the font size as needed
    color: 'white', // Text color
    marginBottom: '1rem', // Adjust the spacing between the text and the squares
  };
  
  const squareWithTextStyle = {
    width: '18rem',
    height: '15rem',
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
    alignItems: 'center', // Center-align all content in the right side
    justifyContent: 'center', // Center-align all content in the right side
    padding: '2rem',
  };


    const inputContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '0.2rem',
    };

    const inputStyle = {
        width: '12rem',
        height: '1.5rem',
        borderRadius: '10px',
        border: '1px solid gray',
        fontSize: '1rem',
        padding: '0.5rem',
        color: 'black',
        backgroundColor: '#D9D9D9',
        outline: 'none',
    };

    const titleStyle = {
        color: 'black',
        marginBottom: '0.5rem',
        fontSize: '1rem',
    };

    const dateTimeInputStyle = {
        width: '16rem',
        height: '1.5rem',
        borderRadius: '10px',
        border: '1px solid gray',
        fontSize: '1rem',
        padding: '0.5rem',
        color: 'black',
        backgroundColor: '#D9D9D9',
    };

    const eightInputContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '0.2rem',
    };

    const smallInputStyle1 = {
        width: '9rem',
        height: '1rem',
        borderRadius: '10px',
        border: '1px solid gray',
        fontSize: '1rem',
        padding: '0.5rem',
        color: 'black',
        backgroundColor: 'rgba(250, 180, 10, 0.62)', // First color
    };

    const smallInputStyle2 = {
        width: '9rem',
        height: '1rem',
        borderRadius: '10px',
        border: '1px solid gray',
        fontSize: '1rem',
        padding: '0.5rem',
        color: 'black',
        backgroundColor: 'rgba(247, 0, 0, 0.63)', // Second color
    };

    const smallInputStyle3 = {
        width: '9rem',
        height: '1rem',
        borderRadius: '10px',
        border: '1px solid gray',
        fontSize: '1rem',
        padding: '0.5rem',
        color: 'black',
        backgroundColor: 'rgba(247, 0, 0, 0.74)', // Third color
    };

    const smallInputStyle4 = {
        width: '9rem',
        height: '1rem',
        borderRadius: '10px',
        border: '1px solid gray',
        fontSize: '1rem',
        padding: '0.5rem',
        color: 'black',
        backgroundColor: 'rgba(24, 119, 242, 0.78)', // Fourth color
    };


    const largeInputContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '0.5rem',
    };
    
    const largeInputStyleFacebook = {
        width: '22rem',
        height: '1.5rem',
        borderRadius: '10px',
        border: '1px solid gray',
        fontSize: '1rem',
        padding: '0.5rem',
        color: 'black',
        backgroundColor: '#17A9FD', // Color for large input 1
    };

    const largeInputStyleLine = {
        width: '22rem',
        height: '1.5rem',
        borderRadius: '10px',
        border: '1px solid gray',
        fontSize: '1rem',
        padding: '0.5rem',
        color: 'black',
        backgroundColor: '#4CC764', // Color for large input 1
    };

    const largeInputStyle = {
        width: '22rem',
        height: '1.5rem',
        borderRadius: '10px',
        border: '1px solid gray',
        fontSize: '1rem',
        padding: '0.5rem',
        color: 'black',
        backgroundColor: '#D9D9D9', // Color for large input 1
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




  return (
    <div style={containerStyle}>
      {/* Left Side */}
      <div style={leftSideStyle}>
        <p>แนบรูปก่อนเริ่มงาน</p>
        <input
          type="text"
          style={{ ...linkInput }}
          onChange={handleImageUpload}
        />
        <div style={{ height: '1rem' }}></div>
        <div style={squareWithTextStyle}>
          {startPic && (
            <img
              src={startPic}
              alt="Uploaded Image"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          )}
        </div>
        <div style={{ height: '2rem' }}></div>
        <p>แนบรูปหลังจบ</p>
        <input
          type="text"
          style={{ ...linkInput }}
          onChange={handleImageUpload1}
        />
        <div style={{ height: '1rem' }}></div>
        <div style={squareWithTextStyle}>
          {afterPic&& (
            <img
              src={afterPic}
              alt="Uploaded Image"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          )}
        </div>
      </div>

      {/* Right Side with Input Boxes */}
      <div style={rightSideStyle}>
        <div style={inputContainerStyle}>
          <p style={titleStyle}>DateTime</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ width: '1rem' }}></div>
            <input
              type="date"
              style={{ ...dateTimeInputStyle}}
              onChange={handleDateTimeChange}
            />
          </div>
        </div>

        {/* Four More Input Boxes Below with Different Colors */}
        <div style={eightInputContainerStyle}>
        <div style={inputContainerStyle}>
            <p style={titleStyle}>ทองก่อนเริ่มงาน</p>
            <input
              type="text"
              style={{ ...smallInputStyle1}}
              onChange={handlebeforeGoldChange}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>เพชรแดงก่อนเริ่มงาน</p>
            <input
              type="text"
              style={{ ...smallInputStyle2}}
              onChange={handlebeforeDiamondChange}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>ลูกแก้วแดงก่อนเริ่มงาน</p>
            <input
              type="text"
              style={{ ...smallInputStyle3}}
              onChange={handlebeforeMarbleChange}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>คูปองก่อนเริ่มงาน</p>
            <input
              type="text"
              style={{ ...smallInputStyle4}}
              onChange={handlebeforeCouponChange}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
        </div>
        {/* Four More Input Boxes Below with Different Colors */}
        <div style={eightInputContainerStyle}>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>ทองหลังเริ่มงาน</p>
            <input
              type="text"
              style={{ ...smallInputStyle1}}
              onChange={handleafterGoldChange}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>เพชรแดงหลังเริ่มงาน</p>
            <input
              type="text"
              style={{ ...smallInputStyle2}}
              onChange={handleafterDiamondChange}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>ลูกแก้วแดงหลังเริ่มงาน</p>
            <input
              type="text"
              style={{ ...smallInputStyle3}}
              onChange={handleafterMarbleChange}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>คูปองหลังเริ่มงาน</p>
            <input
              type="text"
              style={{ ...smallInputStyle4}}
              onChange={handleafterCouponChange}
            />
          </div>
        </div>

        <div style={largeInputContainerStyle}>
          <div style={inputContainerStyle}>
          <p style={titleStyle}>Facebook</p>
            <input
              type="text"
              style={{ ...largeInputStyleFacebook}}
              onChange={handlefacebookChange}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>Line</p>
            <input
              type="text"
              style={{ ...largeInputStyleLine}}
              onChange={handlelineChange}
            />
          </div>
        </div>
        
        <div style={eightInputContainerStyle}>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>แรงค์ที่เริ่ม</p>
            <select style={dropdownContainerStyle} onChange={handlebeforeTierChange}>
            <option value="0">Bronze III</option>
              <option value="1">Bronze II</option>
              <option value="2">Bronze I</option>

              {/* Silver */}
              <option value="3">Silver III</option>
              <option value="4">Silver II</option>
              <option value="5">Silver I</option>

              {/* Gold */}
              <option value="6">Gold IV</option>
              <option value="7">Gold III</option>
              <option value="8">Gold II</option>
              <option value="9">Gold I</option>

              {/* Platinum */}
              <option value="10">Platinum V</option>
              <option value="11">Platinum IV</option>
              <option value="12">Platinum III</option>
              <option value="13">Platinum II</option>
              <option value="14">Platinum I</option>

              {/* Diamond */}
              <option value="15">Diamond V</option>
              <option value="16">Diamond IV</option>
              <option value="17">Diamond III</option>
              <option value="18">Diamond II</option>
              <option value="19">Diamond I</option>

              {/* Commander */}
              <option value="20">Commander V</option>
              <option value="21">Commander IV</option>
              <option value="22">Commander III</option>
              <option value="23">Commander II</option>
              <option value="24">Commander I</option>
            </select>
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>แรงค์หลังจบงาน</p>
            <select style={dropdownContainerStyle} onChange={handleafterTierChange}>
            <option value="0">Bronze III</option>
              <option value="1">Bronze II</option>
              <option value="2">Bronze I</option>

              {/* Silver */}
              <option value="3">Silver III</option>
              <option value="4">Silver II</option>
              <option value="5">Silver I</option>

              {/* Gold */}
              <option value="6">Gold IV</option>
              <option value="7">Gold III</option>
              <option value="8">Gold II</option>
              <option value="9">Gold I</option>

              {/* Platinum */}
              <option value="10">Platinum V</option>
              <option value="11">Platinum IV</option>
              <option value="12">Platinum III</option>
              <option value="13">Platinum II</option>
              <option value="14">Platinum I</option>

              {/* Diamond */}
              <option value="15">Diamond V</option>
              <option value="16">Diamond IV</option>
              <option value="17">Diamond III</option>
              <option value="18">Diamond II</option>
              <option value="19">Diamond I</option>

              {/* Commander */}
              <option value="20">Commander V</option>
              <option value="21">Commander IV</option>
              <option value="22">Commander III</option>
              <option value="23">Commander II</option>
              <option value="24">Commander I</option>
            </select>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem', marginLeft: 'auto' }} onClick={handleSubmit}>
            <button style={greenButtonStyle}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default UserReport;