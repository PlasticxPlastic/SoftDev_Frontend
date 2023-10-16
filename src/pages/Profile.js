import React, { useState } from 'react';
import Card from '../Components/Card/CardProfile';

function ProfilePage() {
  const [currentState, setCurrentState] = useState('');

  const handleStateChange = (newState) => {
    setCurrentState(newState);
  };

  const cardData = [
    { id: 2, price: '150 baht', username: 'username2', status: 'Selling' },
    { id: 4, price: '250 baht', username: 'username4', status: 'Boosting' },
    { id: 5, price: '180 baht', username: 'username5', status: 'Complete' },
  ];
  

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

  const filteredCardData = cardData.filter((card) => {
    switch (card.status) {
      case 'Selling':
        return currentState === 'Selling';
      case 'Boosting':
        return currentState === 'Boosting';
      case 'Complete':
        return currentState === 'History';
      default:
        return false;
    }
  });

  

  return (
    <div style={containerStyle}>
      <div style={profileSideStyle}>
        <div style={leftSectionStyle}>
          <img
            src="https://media.discordapp.net/attachments/1072640218223616051/1162320754742939658/Profile_2.png?ex=653b828e&is=65290d8e&hm=2d08d1b991f77f30981391bdc11fa3f0db80b3828867926fd8e65e473dde6840&=&width=178&height=202"
            alt="Buy"
          />
          <p style={textBelowImageStyle}>ซื้อขาย</p>
        </div>
        <div style={{ width: '20rem' }}></div>
        <div style={middleSectionStyle}>
          <p style={profileTextStyle}>Profile</p>
          <img
            src="https://media.discordapp.net/attachments/1072640218223616051/1162320754742939658/Profile_2.png?ex=653b828e&is=65290d8e&hm=2d08d1b991f77f30981391bdc11fa3f0db80b3828867926fd8e65e473dde6840&=&width=178&height=202"
            alt="Profile"
          />
          <p style={profileTextStyle}>Profile</p>
        </div>
        <div style={{ width: '20rem' }}></div>
        <div style={rightSectionStyle}>
          <img
            src="https://media.discordapp.net/attachments/1072640218223616051/1162320754742939658/Profile_2.png?ex=653b828e&is=65290d8e&hm=2d08d1b991f77f30981391bdc11fa3f0db80b3828867926fd8e65e473dde6840&=&width=178&height=202"
            alt="Boost"
          />
          <p style={textBelowImageStyle}>Boost</p>
        </div>
      </div>
      <div></div>
      <div style={historySideStyle}>
        <div style={topHistoryContainerStyle}>
          <div
            style={{
              ...clickableTextStyle,
              textDecoration:
                currentState === 'Boosting' ? 'underline' : 'none',
              fontWeight: currentState === 'Boosting' ? 'bold' : 'normal',
            }}
            onClick={() => handleStateChange('Boosting')}
          >
            ไอดีที่กำลังขาย
          </div>
          <div style={{ width: '4rem' }}></div>
          <div
            style={{
              ...clickableTextStyle,
              textDecoration:
                currentState === 'Selling' ? 'underline' : 'none',
              fontWeight: currentState === 'Selling' ? 'bold' : 'normal',
            }}
            onClick={() => handleStateChange('Selling')}
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
          {filteredCardData.map((card) => (
            <Card key={card.id} price={card.price} username={card.username} />            
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;