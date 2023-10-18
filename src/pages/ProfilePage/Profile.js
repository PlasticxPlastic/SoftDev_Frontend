import React, { useState, useEffect } from 'react';
import Card from '../../Components/Card/CardProfile';
import CardBoost from '../../Components/Card/CardProfileBoost'
import Axios from 'axios';
import { useParams } from 'react-router-dom';


function ProfilePage() {
  const { userId } = useParams();
  const [currentState, setCurrentState] = useState('');

  const handleStateChange = (newState) => {
    setCurrentState(newState);
  };

  const [profileData, setProfileData] = useState({});

  const [buySuccessCount, setBuySuccessCount] = useState();

  const [boostSuccessCount, setBoostSuccessCount] = useState();

  const [userData, setUserData] = useState({});

  const [sellingData, setSellingData] = useState({});

  const [boostingData, setBoostingData] = useState({});

  const [historyData, setHistoryData] = useState({});

  const getProfileData = () => {
    Axios.get(`http://localhost:3333/profile/profile/${userId}`).then((response) => {
      const userData = response.data.profileData[0];
      const sellingData = response.data.accountBeingSold;
      const boostingData = response.data.accountBeingBoosted;
      const historyData = response.data.accountHistory;
      setUserData(response.data.profileData[0]);
      setSellingData(response.data.accountBeingSold);
      setBoostingData(response.data.accountBeingBoosted);
      setHistoryData(response.data.accountHistory);
      console.log(userData);
      console.log(sellingData); 
      console.log(boostingData);       
      console.log(historyData); 
      setBuySuccessCount(historyData.filter(card => card.type === 'Buying' || card.type === 'Selling').length);
      setBoostSuccessCount(historyData.filter(card => card.type === 'Boosting' || card.type === 'Boosted').length);
    });
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
                currentState === 'Selling' ? 'underline' : 'none',
              fontWeight: currentState === 'Selling' ? 'bold' : 'normal',
            }}
            onClick={() => handleStateChange('Selling')}
          >
            ไอดีที่กำลังขาย
          </div>
          <div style={{ width: '4rem' }}></div>
          <div
            style={{
              ...clickableTextStyle,
              textDecoration:
                currentState === 'Boosting' ? 'underline' : 'none',
              fontWeight: currentState === 'Boosting' ? 'bold' : 'normal',
            }}
            onClick={() => handleStateChange('Boosting')}
          >
            ไอดีที่กำลังบูส
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
          {currentState === 'Selling' && (
            sellingData
              .filter((card) => card.status === 'Selling')
              .map((card, index) => (
                <Card key={index} price={card.price} username={card.user_name} order_name={card.order_name} />
              ))
          )}
          {currentState === 'Boosting' && (
            boostingData
              .filter((card) => card.status !== 'Completed')
              .map((card, index) => (
                <CardBoost key={index} price={card.price} username={card.user_name} after_tier={card.after_tier} before_tier={card.before_tier} />
              ))
          )}
          {currentState === 'History' && (
            historyData.map((card, index) => (
              <div key={index}>
                {card.type === 'Buying' || card.type === 'Selling' ? (
                  <Card key={index} price={0} username={card.user_name} order_name={card.order_name} type={card.type} />
                ) : (
                  <CardBoost key={index} price={0} username={card.user_name} after_tier={card.after_tier} before_tier={card.before_tier} type={card.type} />
                )}

              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
