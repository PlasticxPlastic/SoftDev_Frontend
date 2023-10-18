import React, { useState, useEffect } from 'react';
import Card from '../../Components/Card/CardOwnProfile';
import CardBoost from '../../Components/Card/CardOwnProfileBoost';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

function OwnProfilePage() {
  const { userId } = useParams();
  const [currentState, setCurrentState] = useState('');

  const handleStateChange = (newState) => {
    setCurrentState(newState);
  };
  
  const [buySuccessCount, setBuySuccessCount] = useState();

  const [boostSuccessCount, setBoostSuccessCount] = useState();

  const [profileData, setProfileData] = useState({});

  const [userData, setUserData] = useState({});

  const [sellConfirmData, setSellConfirmData] = useState({});

  const [sellingData, setSellingData] = useState({});

  const [boostConfirmData, setBoostConfirmData] = useState({});

  const [boostingData, setBoostingData] = useState({});

  const [historyData, setHistoryData] = useState({});

  var token = localStorage.getItem('accessToken');

  const config = {
    headers: {
      authorization: `${token}`, // กำหนดค่า Authorization header ด้วย Bearer token
    },
  }; 
  const getProfileData = async(e) => {
    if (token) {
      Axios.get(`http://localhost:3333/profile/own/${userId}`,
      config).then((response) => {
        const userData = response.data.profileData[0];
        const sellConfirmData = response.data.OwnBoughtNotConfirmed;
        const sellingData = response.data.OwnSoldNotConfirmed;
        const boostConfirmData = response.data.OwnBoosted;
        const boostingData = response.data.OwnBoosting;
        const historyData = response.data.OwnHistory;
        setUserData(response.data.profileData[0]);
        setSellConfirmData(response.data.OwnBoughtNotConfirmed);
        setSellingData(response.data.OwnSoldNotConfirmed);
        setBoostConfirmData(response.data.OwnBoosted);
        setBoostingData(response.data.OwnBoosting);
        setHistoryData(response.data.OwnHistory);
        console.log(userData);
        console.log(sellConfirmData);
        console.log(sellingData);
        console.log(boostConfirmData);
        console.log(boostingData);
        console.log(historyData);
        setBuySuccessCount(historyData.filter((item) => item.type === 'ส่งมอบไอดีเรียบร้อยแล้ว' || item.type === 'ได้รับไอดีเรียบร้อยแล้ว').length);
        setBoostSuccessCount(historyData.filter((item) => item.type === 'ได้รับการบูสเรียบร้อยแล้ว' || item.type === 'ส่งมอบไอดีเรียบร้อยแล้ว').length);
        
        
      }).catch((error) => {
        console.log("เกิดข้อผิดพลาดในการดึงข้อมูล");
        console.error(error);
      });
    } else {
      console.log("ไม่พบ token ใน local storage");
    }
  }

  useEffect(() => {
    getProfileData();
  }, []);
  

  const clickableTextStyle = {
    color: 'black',
    fontSize: '1rem',
    cursor: 'pointer',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const profileSideStyle = {
    flex: 4,
    display: 'flex',
    flexDirection: 'row',
  };

  const historySideStyle = {
    flex: 6,
  };

  const leftSectionStyle = {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const middleSectionStyle = {
    flex: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const rightSectionStyle = {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '9rem',
    height: '9rem',
    backgroundColor: 'gray',
    borderRadius: '1rem',
  };

  const textBelowImageStyle = {
    textAlign: 'center',
  };

  const profileTextStyle = {
    margin: '0.5rem',
  };

  const topHistoryContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 0',
  };

  const topHistoryTextStyle = {
    color: 'black',
    fontSize: '1rem',
  };

  

  return (
    <div style={containerStyle}>
      <div style={profileSideStyle}>
        <div style={leftSectionStyle}>
          <img
            src="https://media.discordapp.net/attachments/1072640218223616051/1162320754742939658/Profile_2.png?ex=653b828e&is=65290d8e&hm=2d08d1b991f77f30981391bdc11fa3f0db80b3828867926fd8e65e473dde6840&=&width=178&height=202"
            alt="Buy"
          />
          <p style={textBelowImageStyle}>ซื้อขายสำเร็จ {buySuccessCount} ครั้ง</p>
        </div>
        <div style={{ width: '20rem' }}></div>
        <div style={middleSectionStyle}>
        <p style={profileTextStyle}>
          {userData.user_name || 'ไม่พบชื่อผู้ใช้'}
        </p>
          <img
            src="https://media.discordapp.net/attachments/1072640218223616051/1162320754742939658/Profile_2.png?ex=653b828e&is=65290d8e&hm=2d08d1b991f77f30981391bdc11fa3f0db80b3828867926fd8e65e473dde6840&=&width=178&height=202"
            alt="Profile"
          />
          <p style={textBelowImageStyle}>Review Score :  {userData.review_score || '0'} </p>
        </div>
        <div style={{ width: '20rem' }}></div>
        <div style={rightSectionStyle}>
          <img
            src="https://media.discordapp.net/attachments/1072640218223616051/1162320754742939658/Profile_2.png?ex=653b828e&is=65290d8e&hm=2d08d1b991f77f30981391bdc11fa3f0db80b3828867926fd8e65e473dde6840&=&width=178&height=202"
            alt="Boost"
          />
          <p style={textBelowImageStyle}>Boostสำเร็จ {boostSuccessCount} ครั้ง</p>
        </div>
      </div>
      <div></div>
      <div style={historySideStyle}>
        <div style={topHistoryContainerStyle}>
          <div
            style={{
              ...clickableTextStyle,
              textDecoration:
                currentState === 'BuyConfirm' ? 'underline' : 'none',
              fontWeight: currentState === 'BuyConfirm' ? 'bold' : 'normal',
            }}
            onClick={() => handleStateChange('BuyConfirm')}
          >
            ไอดีที่รอการยืนยัน
          </div>
          <div style={{ width: '4rem' }}></div>
          <div
            style={{
              ...clickableTextStyle,
              textDecoration:
                currentState === 'SellerConfirm' ? 'underline' : 'none',
              fontWeight: currentState === 'SellerConfirm' ? 'bold' : 'normal',
            }}
            onClick={() => handleStateChange('SellerConfirm')}
          >
            ไอดีที่ขาย
          </div>
          <div style={{ width: '4rem' }}></div>
          <div
            style={{
              ...clickableTextStyle,
              textDecoration:
                currentState === 'BoostConfirm' ? 'underline' : 'none',
              fontWeight: currentState === 'BoostConfirm' ? 'bold' : 'normal',
            }}
            onClick={() => handleStateChange('BoostConfirm')}
          >
            ไอดีที่กำลังให้บูส
          </div>
          <div style={{ width: '4rem' }}></div>
          <div
            style={{
              ...clickableTextStyle,
              textDecoration:
                currentState === 'BoosterConfirm' ? 'underline' : 'none',
              fontWeight: currentState === 'BoosterConfirm' ? 'bold' : 'normal',
            }}
            onClick={() => handleStateChange('BoosterConfirm')}
          >
            ไอดีที่เรากำลังบูส
          </div>
          <div style={{ width: '4rem' }}></div>
            <div
            style={{
              ...clickableTextStyle,
              textDecoration:
                currentState === 'History' ? 'underline' : 'none',
              fontWeight: currentState === 'History' ? 'bold' : 'normal',
            }}
            onClick={() => handleStateChange('History')}
          >
            ประวัติการซื้อขาย
          </div>
        </div>
        <div>
        {currentState === 'BuyConfirm' && Array.isArray(sellConfirmData) && (
          sellConfirmData
            .filter((card) => card.status !== 'Completed' && card.status !== 'Pending'&& card.status !== 'Reported')
            .map((card, index) => (
              <Card key={index} price={card.price} seller_user_name={card.seller_user_name} order_name={card.order_name} 
                currentState={currentState} orderID={card.orderID} userID={userId} buyer_user_name={card.buyer_user_name}  />
            ))
        )}

          {currentState === 'SellerConfirm' && Array.isArray(sellingData) && (
            sellingData
              .filter((card) => card.status !== 'Completed' && card.status !== 'Pending'&& card.status !== 'Reported')
              .map((card, index) => (
                <Card key={index} price={card.price} seller_user_name={card.seller_user_name} order_name={card.order_name} 
                currentState={currentState} orderID={card.orderID} userID={userId} buyer_user_name={card.buyer_user_name}  />
              ))
          )}
          {currentState === 'BoostConfirm' && Array.isArray(boostConfirmData) && (
            boostConfirmData
              .filter((card) => card.status !== 'Completed' && card.status !== 'Pending'&& card.status !== 'Reported')
              .map((card, index) => (
                <CardBoost key={index} price={card.price} 
                after_tier={card.after_tier} before_tier={card.before_tier} 
                currentState={currentState} user_name={card.user_name}
                userID={userId} boostingID={card.boostingID} />
              ))
          )}
          {currentState === 'BoosterConfirm' && Array.isArray(boostingData) && (
            boostingData
              .filter((card) => card.status !== 'Completed' && card.status !== 'Pending'&& card.status !== 'Reported')
              .map((card, index) => (
                <CardBoost key={index} price={card.price} 
                after_tier={card.after_tier} before_tier={card.before_tier} 
                currentState={currentState} user_name={card.user_name} />
              ))
          )}
          {currentState === 'History' && Array.isArray(historyData) && (
            historyData.map((card, index) => (
              <div key={index}>
                {card.type === 'ได้รับไอดีเรียบร้อยแล้ว' || card.type === 'ส่งมอบไอดีเรียบร้อยแล้ว' ? (
                  <Card
                    price={card.price}
                    seller_user_name={card.seller_user_name}
                    order_name={card.order_name}
                    currentState={currentState}
                    orderID={card.orderID}
                    userID={userId}
                    buyer_user_name={card.buyer_user_name}
                  />
                ) : (
                  <CardBoost
                    type = {card.type}
                    price={0}
                    after_tier={card.after_tier}
                    before_tier={card.before_tier}
                    currentState={currentState}
                    user_name={card.buyer_user_name}
                  />
                )}

              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default OwnProfilePage;
