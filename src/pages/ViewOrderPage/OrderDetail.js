import React from 'react';

function OrderDetail() {
  const containerStyle = {
    display: 'flex',
    height: '100vh',
    marginTop: '5rem',
  };

  const contentStyle = {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  };

  const roundedSquareStyle = {
    width: '40rem',
    height: '20rem',
    borderRadius: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  };

  const leftSideStyle = {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    borderRadius: '10px',
    marginLeft: '10rem',
  };

  const rightSideStyle = {
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    marginBottom: '30rem',
  };

  const textBoxContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const textBoxStyle = {
    width: '35rem',
    height: '3rem',
    borderRadius: '10px',
    backgroundColor: '#D9D9D9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const titleStyle = {
    color: 'black',
    fontSize: '1rem',
  };

  const titleStyleinside = {
    color: 'black',
    fontSize: '1rem',
  };

  const smallTextBoxContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const smallTextBoxStyle = {
    width: '10rem',
    height: '2rem',
    backgroundColor: '#D9D9D9',
    borderRadius: '10px',
  };

  const smallTextBoxStyleGold = {
    width: '10rem',
    height: '2rem',
    backgroundColor: 'rgba(250, 180, 10, 0.62)',
    borderRadius: '10px',
  };

  const smallTextBoxStyleRedBeads = {
    width: '10rem',
    height: '2rem',
    backgroundColor: 'rgba(247, 0, 0, 0.74)',
    borderRadius: '10px',
  };

  const smallTextBoxStyleRedGems = {
    width: '10rem',
    height: '2rem',
    backgroundColor: 'rgba(247, 0, 0, 0.63)',
    borderRadius: '10px',
  };

  const smallTextBoxStyleCoupon = {
    width: '10rem',
    height: '2rem',
    backgroundColor: 'rgba(24, 119, 242, 0.78)',
    borderRadius: '10px',
  };

  const smallTextBoxTitleStyle = {
    color: 'black',
    fontSize: '1rem',
  };

  const smallTextBoxTitleStyle2 = {
    color: 'black',
    fontSize: '1.25rem',
  };

  const smallTextBoxTitleStyle3 = {
    color: 'black',
    fontSize: '2rem',
  };

  const imageBoxStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '1rem',
  };

  const imageStyle = {
    width: '8rem',
    height: '8rem',
  };

  const longTextBoxStyle = {
    width: '35rem',
    height: '2rem',
    borderRadius: '10px',
    backgroundColor: '#D9D9D9',
  };

  const buttonStyle = {
    borderRadius: '1.25rem',
    border: '1px solid #898989',
    background: '#FAB40A',
    width: '15rem',
    height: '5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  
  const buttonTitleStyle = {
    color: 'black',
    fontSize: '1rem',
  };
  
  const buttonTextInsideStyle = {
    color: 'black',
    fontSize: '3rem',
  };


  

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        {/* Left Side */}
        <div style={leftSideStyle}>
          <div style={roundedSquareStyle}></div>
          <div style={textBoxContainerStyle}>
            <div style={{ height: '1rem' }}></div>
            <p style={titleStyle}>ชื่อสินค้า</p>
            <div style={textBoxStyle}>
              <p style={titleStyleinside}>xxxxxxx</p>
            </div>
          </div>
          <div style={{ height: '1rem' }}></div>
          {/* Five Text Boxes with Titles in the Same Line */}
          <div style={smallTextBoxContainerStyle}>
            <div>
              <p style={smallTextBoxTitleStyle}>จำนวนฮีโร่</p>
              <div style={smallTextBoxStyle}></div>
            </div>
            <div style={{ width: '1rem' }}></div>
            <div>
              <p style={smallTextBoxTitleStyle}>จำนวนสกิน</p>
              <div style={smallTextBoxStyle}></div>
            </div>
            <div style={{ width: '1rem' }}></div>
            <div>
              <p style={smallTextBoxTitleStyle}>แรงก์</p>
              <div style={smallTextBoxStyle}></div>
            </div>
            <div style={{ width: '1rem' }}></div>
            <div>
              <p style={smallTextBoxTitleStyle}>วินเรท</p>
              <div style={smallTextBoxStyle}></div>
            </div>
            <div style={{ width: '1rem' }}></div>
            <div>
              <p style={smallTextBoxTitleStyle}>การเชื่อมต่อ</p>
              <div style={smallTextBoxStyle}></div>
            </div>
          </div>
          <div style={smallTextBoxContainerStyle}>
            <div>
              <p style={smallTextBoxTitleStyle}>ทอง</p>
              <div style={smallTextBoxStyleGold}></div>
            </div>
            <div style={{ width: '1rem' }}></div>
            <div>
              <p style={smallTextBoxTitleStyle}>เพชรแดง</p>
              <div style={smallTextBoxStyleRedGems}></div>
            </div>
            <div style={{ width: '1rem' }}></div>
            <div>
              <p style={smallTextBoxTitleStyle}>ลูกแก้วแดง</p>
              <div style={smallTextBoxStyleRedBeads}></div>
            </div>
            <div style={{ width: '1rem' }}></div>
            <div>
              <p style={smallTextBoxTitleStyle}>คูปอง</p>
              <div style={smallTextBoxStyleCoupon}></div>
            </div>
          </div>
          <div style={{ height: '2rem' }}></div>
          <p style={smallTextBoxTitleStyle2}>ข้อมูลผู้ขาย</p>
          <div style={imageBoxStyle}>
            
            <img src="./Profile (1).png" alt="Product" style={imageStyle} />
            
            <div style={textBoxStyle}>
              <p style={titleStyleinside}>Username</p>
            </div>
          </div>
        </div>

      <div style={rightSideStyle}>
        <p style={smallTextBoxTitleStyle3}>ราคา</p>
        <button style={buttonStyle}>
          <p style={buttonTextInsideStyle}>400</p>
        </button>
      </div>
      </div>
    </div>
  );
}

export default OrderDetail;
