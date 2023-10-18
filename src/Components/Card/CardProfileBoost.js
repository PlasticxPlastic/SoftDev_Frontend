import React from 'react';

function CardBoost({ price, username, after_tier, before_tier, type }) {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '80rem',
    height: '5rem',
    border: '1px solid #000',
    marginBottom: '1rem',
  };

  const leftSideStyle = {
    flex: '30%',
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
    flex: '70%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingLeft: '1rem', // Add padding to separate the text from the state text
    marginTop: '1rem',
    marginRight: '5rem',
  };

  const priceTextStyle = {
    textAlign: 'right',
    color: 'red',
    
  };

  const usernameTextStyle = {
    textAlign: 'right',
    color: 'blue',
  };

  return (
    <div style={cardStyle}>
      <div style={leftSideStyle}>
        <div style={imageStyle}></div>
        <div style={{ width: '3rem' }}></div>
        <p style={textBelowImageStyle}>ผู้ว่าจ้าง: {username}</p>
      </div>
      <div style={rightSideStyle}>
      {price !== 0 ? (
        <p style={priceTextStyle}>ราคา : {price} บาท</p>
      ) : (
        <p style={priceTextStyle}>
          {type === 'Selling' || type === 'Buying' ? 'ประเภท : ซื้อขาย' : 'ประเภท : Boost'}
        </p>
      )}

        <div style={{ width: '10rem' }}></div>
        {price !== 0 ? (
        <p style={usernameTextStyle}>{before_tier} - {after_tier}</p>
        ) : (
          <p style={usernameTextStyle}></p>
        )}
      </div>
    </div>
  );
}

export default CardBoost;
