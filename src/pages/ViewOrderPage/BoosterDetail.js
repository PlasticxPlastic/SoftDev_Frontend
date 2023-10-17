import React, { useState } from 'react';

function BoosterDetail() {
  const [showPopup, setShowPopup] = useState(false); // สถานะเพื่อควบคุมการแสดง Popup
  // const popupContent = `
  //   bronze 10 บาทต่อแรงก์
  //   silver 10 บาทต่อแรงก์
  //   gold 20 บาทต่อแรงก์
  //   plat 30 บาทต่อแรงก์
  //   diamond 50 บาทต่อแรงก์
  //   Commander 70 บาทต่อแรงก์
  // `;

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

  const smallTextBoxStyle1 = {
    width: '10rem',
    height: '2rem',
    backgroundColor: '#E5F065',
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

  const additionalButtonStyle = {
    width: '10rem',
    height: '2rem',
    backgroundColor: '#D9D988',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const additionalButtonTitleStyle = {
    color: 'black',
    fontSize: '1rem',
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30rem',
    height: '30rem',
    background: 'white',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    zIndex: '999',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2rem',
  };

  const popupTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  const popupListStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  };

  const closePopupButtonStyle = {
    backgroundColor: '#D9D9D9',
    border: 'none',
    borderRadius: '10px',
    width: '100%',
    padding: '1rem',
    cursor: 'pointer',
  };

  const closePopupButtonTextStyle = {
    fontSize: '1rem',
  };

  const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '0.2rem',
  };

  const dropdownContainerStyle = {
    width: '9rem',
    height: '2rem',
    borderRadius: '10px',
    border: '1px solid gray',
    fontSize: '0.9rem',
    padding: '0.5rem',
    color: 'black',
    backgroundColor: '#D9D9D9', // สีหลัก
  };

    const popupContent = `
    bronze 10 บาทต่อแรงก์
    silver 10 บาทต่อแรงก์
    gold 20 บาทต่อแรงก์
    plat 30 บาทต่อแรงก์
    diamond 50 บาทต่อแรงก์
    Commander 70 บาทต่อแรงก์
`;



  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        {/* ส่วนซ้ายมือ */}
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
          {/* ช่องข้อความห้าช่องด้วยชื่อเดียวกันในบรรทัดเดียวกัน */}
          <div style={smallTextBoxContainerStyle}>
            <div>
              <p style={smallTextBoxTitleStyle}>แรงค์เริ่มต้นที่รับ</p>
              <div style={smallTextBoxStyle}></div>
            </div>
            <div style={{ width: '1rem' }}></div>
            <div>
              <p style={smallTextBoxTitleStyle}>แรงค์สูงสุดที่รับ</p>
              <div style={smallTextBoxStyle}></div>
            </div>
            <div style={{ width: '1rem' }}></div>
            <div>
              <p style={smallTextBoxTitleStyle}>ราคา</p>
              <button
                style={additionalButtonStyle}
                onClick={() => togglePopup()}
              >
                <p style={additionalButtonTitleStyle}>คลิกที่นี่</p>
              </button>
              {showPopup && (
                <div style={popupStyle}>
                  <p style={popupTitleStyle}>ราคาแรงค์</p>
                  <ul style={popupListStyle}>
                    <li>bronze 10 บาทต่อแรงก์</li>
                    <li>silver 10 บาทต่อแรงก์</li>
                    <li>gold 20 บาทต่อแรงก์</li>
                    <li>plat 30 บาทต่อแรงก์</li>
                    <li>diamond 50 บาทต่อแรงก์</li>
                    <li>Commander 70 บาทต่อแรงก์</li>
                    <li>Conqueror 80 บาทต่อดาว</li>
                    <li>Glorious 100 บาทต่อดาว</li>
                  </ul>
                  <button
                    style={closePopupButtonStyle}
                    onClick={togglePopup}
                  >
                    <p style={closePopupButtonTextStyle}>ปิด</p>
                  </button>
                </div>
              )}
            </div>
            <div style={{ width: '1rem' }}></div>
            <div>
              <p style={smallTextBoxTitleStyle}>Winrate</p>
              <div style={smallTextBoxStyle}></div>
            </div>
          </div>
          <div style={smallTextBoxContainerStyle}>
            <div style={inputContainerStyle}>
              <p style={titleStyle}>แรงค์ที่เริ่ม</p>
              <select style={dropdownContainerStyle}>
                <option value="0">Bronze III</option>
                <option value="1">Bronze II</option>
                <option value="2">Bronze I</option>

                <option value="3">Silver III</option>
                <option value="4">Silver II</option>
                <option value="5">Silver I</option>

                <option value="6">Gold IV</option>
                <option value="7">Gold III</option>
                <option value="8">Gold II</option>
                <option value="9">Gold I</option>

                <option value="10">Platinum V</option>
                <option value="11">Platinum IV</option>
                <option value="12">Platinum III</option>
                <option value="13">Platinum II</option>
                <option value="14">Platinum I</option>

                <option value="15">Diamond V</option>
                <option value="16">Diamond IV</option>
                <option value="17">Diamond III</option>
                <option value="18">Diamond II</option>
                <option value="19">Diamond I</option>

                <option value="20">Commander V</option>
                <option value="21">Commander IV</option>
                <option value="22">Commander III</option>
                <option value="23">Commander II</option>
                <option value="24">Commander I</option>
              </select>
            </div>
            <div style={{ width: '1rem' }}></div>
            <div style={inputContainerStyle}>
              <p style={titleStyle}>แรงค์ที่ต้องการ</p>
              <select style={dropdownContainerStyle}>
                <option value="0">Bronze III</option>
                <option value="1">Bronze II</option>
                <option value="2">Bronze I</option>

                <option value="3">Silver III</option>
                <option value="4">Silver II</option>
                <option value="5">Silver I</option>

                <option value="6">Gold IV</option>
                <option value="7">Gold III</option>
                <option value="8">Gold II</option>
                <option value="9">Gold I</option>

                <option value="10">Platinum V</option>
                <option value="11">Platinum IV</option>
                <option value="12">Platinum III</option>
                <option value="13">Platinum II</option>
                <option value="14">Platinum I</option>

                <option value="15">Diamond V</option>
                <option value="16">Diamond IV</option>
                <option value="17">Diamond III</option>
                <option value="18">Diamond II</option>
                <option value="19">Diamond I</option>

                <option value="20">Commander V</option>
                <option value="21">Commander IV</option>
                <option value="22">Commander III</option>
                <option value="23">Commander II</option>
                <option value="24">Commander I</option>
              </select>
            </div>
            <div style={{ width: '1rem' }}></div>
            <div>
              <p style={smallTextBoxTitleStyle}>ราคา</p>
              <div style={smallTextBoxStyle1}></div>
            </div>
          </div>
          <p style={smallTextBoxTitleStyle2}>ข้อมูลผู้ขาย</p>
          <div style={imageBoxStyle}>
            <img src="./Profile (1).png" alt="Product" style={imageStyle} />
            <div style={textBoxStyle}>
              <p style={titleStyleinside}>ชื่อผู้ใช้</p>
            </div>
          </div>
        </div>

        <div style={rightSideStyle}>
          <p style={smallTextBoxTitleStyle3}>ราคา</p>
          <button style={buttonStyle}>
            <p style={buttonTextInsideStyle}></p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BoosterDetail;
