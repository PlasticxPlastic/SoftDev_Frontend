import React from 'react';

function Card({ price, username }) {
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
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '1rem', // Add padding to separate the text from the state text
  };

  const priceTextStyle = {
    textAlign: 'right',
  };

  const usernameTextStyle = {
    textAlign: 'right',
  };

  return (
    <div style={cardStyle}>
      <div style={leftSideStyle}>
        <div style={imageStyle}></div>
        <p style={textBelowImageStyle}>Order</p>
      </div>
      <div style={rightSideStyle}>
        <p style={priceTextStyle}>{price}</p>
        <p style={usernameTextStyle}>{username}</p>
      </div>
    </div>
  );
}

export default Card;
