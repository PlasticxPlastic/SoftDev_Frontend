import React, { useState, useEffect } from 'react';

function CheckoutOrder() {
  const [countdown, setCountdown] = useState(900); // 15 นาที (15 x 60 วินาที)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown === 0) {
        // เมื่อนับถึง 0 ให้เปลี่ยนเส้นทางไปยัง '/OrderDetail'
        window.location.href = '/OrderDetail';
      } else {
        setCountdown(countdown - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  const imageUrl = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-dHN4KiD3dsU%2FXRxU5JRV7DI%2FAAAAAAAAAz4%2Fu1ynpCMIuKwZMA642dHEoXFVKuHQbJvwgCEwYBhgL%2Fs1600%2Fqr-code.png&f=1&nofb=1&ipt=d2f5aff57d8fb074c276eab6958be639ec651e93c7c41a3b97815dd9f001a2f5';

  return (
    <div style={containerStyle}>
      <div style={timerStyle}>{formatTime(countdown)}</div>
      <img src={imageUrl} alt="QR Code" style={imageStyle} />
      <button style={checkoutButtonStyle}>Checkout</button>
    </div>
  );
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const timerStyle = {
  fontSize: '2rem',
  marginTop: '2rem',
};

const imageStyle = {
  width: '25rem',
  height: '25rem',
};

const checkoutButtonStyle = {
  marginTop: '2rem',
  padding: '1rem 2rem',
  fontSize: '1.5rem',
  backgroundColor: '#007BFF',
  color: 'white',
  borderRadius: '1rem',
  cursor: 'pointer',
};

export default CheckoutOrder;
