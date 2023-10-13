import React from 'react';

function UserReport() {
<<<<<<< Updated upstream
    
      
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
=======
  const containerStyle = {
    display: 'flex',
    height: '100vh',
  };

  const leftSideStyle = {
>>>>>>> Stashed changes
    width: '30%',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    display: 'flex',
    flexDirection: 'column',
<<<<<<< Updated upstream
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2rem',
    borderRadius: '10px',
    marginRight: '2rem',
    textAlign: 'center', // Center-align text
  };
  
  const textInsideSquareStyle = {
    fontSize: '1.5rem', // Adjust the font size as needed
    color: 'white', // Text color
    marginBottom: '1rem', // Adjust the spacing between the text and the squares
  };
  
  const squareWithTextStyle = {
=======
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem',
    borderRadius: '10px',
    marginRight: '2rem',
  };

  const roundedSquareStyle = {
>>>>>>> Stashed changes
    width: '18rem',
    height: '15rem',
    borderRadius: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
<<<<<<< Updated upstream
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
        alignItems: 'center',
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
=======
  };

  const rightSideStyle = {
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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

  const dropdownInputStyle = {
    width: '8rem',
    height: '1.5rem',
    borderRadius: '10px',
    background: '#D9D9D9',
    fontSize: '1rem',
    color: 'black',
  };

  // Container style for the dropdown inputs
  const dropdownContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
  };

  const greenButtonStyle = {
    width: '12rem',
    height: '2rem',
    backgroundColor: '#05FF00',
    border: '2px solid #05FF00',
    color: 'white',
    borderRadius: '10px',
    fontSize: '1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
>>>>>>> Stashed changes


  return (
    <div style={containerStyle}>
      {/* Left Side */}
      <div style={leftSideStyle}>
<<<<<<< Updated upstream
        <div style={squareWithTextStyle}>
        <p style={textInsideSquareStyle}>รูปก่อนเริ่มงาน</p>
        </div>
        <div style={squareWithTextStyle}>
        <p style={textInsideSquareStyle}>รูปหลังเริ่มงาน</p>
        </div>
=======
        <div style={{ height: '2rem' }}></div> {/* 2rem gap */}
        <div style={roundedSquareStyle}></div>
        <div style={{ height: '2rem' }}></div> {/* 2rem gap */}
        <div style={roundedSquareStyle}></div>
>>>>>>> Stashed changes
      </div>

      {/* Right Side with Input Boxes */}
      <div style={rightSideStyle}>
<<<<<<< Updated upstream
        <div style={inputContainerStyle}>
          <p style={titleStyle}>UID</p>
=======
        
        <div style={inputContainerStyle}>
          <p style={titleStyle}>UserID</p>
>>>>>>> Stashed changes
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <input
              type="text"
              style={{ ...inputStyle}}
<<<<<<< Updated upstream
=======
              name = "userID"
>>>>>>> Stashed changes
            />
            <div style={{ width: '1rem' }}></div>
            <input
              type="date"
              style={{ ...dateTimeInputStyle}}
<<<<<<< Updated upstream
=======
              name = "dateTime"
>>>>>>> Stashed changes
            />
          </div>
        </div>

        {/* Four More Input Boxes Below with Different Colors */}
<<<<<<< Updated upstream
        <div style={eightInputContainerStyle}>
        <div style={inputContainerStyle}>
            <p style={titleStyle}>ทองก่อนเริ่มงาน</p>
            <input
              type="text"
              style={{ ...smallInputStyle1}}
=======
        <p style={{fontWeight: 'bold',fontSize: '18px',}}>Before Boosted</p>
        <div style={eightInputContainerStyle}>
        <div style={inputContainerStyle}>
            <p style={titleStyle}>Gold</p>
            <input
              type="text"
              style={{ ...smallInputStyle1}}
              name = "beforeGold"
>>>>>>> Stashed changes
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
<<<<<<< Updated upstream
            <p style={titleStyle}>เพชรแดงก่อนเริ่มงาน</p>
            <input
              type="text"
              style={{ ...smallInputStyle2}}
=======
            <p style={titleStyle}>Gems</p>
            <input
              type="text"
              style={{ ...smallInputStyle2}}
              name = "beforeGems"
>>>>>>> Stashed changes
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
<<<<<<< Updated upstream
            <p style={titleStyle}>ลูกแก้วแดงก่อนเริ่มงาน</p>
            <input
              type="text"
              style={{ ...smallInputStyle3}}
=======
            <p style={titleStyle}>Beads</p>
            <input
              type="text"
              style={{ ...smallInputStyle3}}
              name = "beforeBeads"
>>>>>>> Stashed changes
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
<<<<<<< Updated upstream
            <p style={titleStyle}>คูปองก่อนเริ่มงาน</p>
            <input
              type="text"
              style={{ ...smallInputStyle4}}
=======
            <p style={titleStyle}>Coupon</p>
            <input
              type="text"
              style={{ ...smallInputStyle4}}
              name = "beforeCoupon"
>>>>>>> Stashed changes
            />
          </div>
          <div style={{ width: '1rem' }}></div>
        </div>
<<<<<<< Updated upstream
        {/* Four More Input Boxes Below with Different Colors */}
        <div style={eightInputContainerStyle}>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>ทองหลังเริ่มงาน</p>
            <input
              type="text"
              style={{ ...smallInputStyle1}}
=======
        <p style={{fontWeight: 'bold',fontSize: '18px',}}>After Boosted</p>
        {/* Four More Input Boxes Below with Different Colors */}
        <div style={eightInputContainerStyle}>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>Gold</p>
            <input
              type="text"
              style={{ ...smallInputStyle1}}
              name = "afterGold"
>>>>>>> Stashed changes
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
<<<<<<< Updated upstream
            <p style={titleStyle}>เพชรแดงหลังเริ่มงาน</p>
            <input
              type="text"
              style={{ ...smallInputStyle2}}
=======
            <p style={titleStyle}>Gems</p>
            <input
              type="text"
              style={{ ...smallInputStyle2}}
              name = "afterGems"
>>>>>>> Stashed changes
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
<<<<<<< Updated upstream
            <p style={titleStyle}>ลูกแก้วแดงหลังเริ่มงาน</p>
            <input
              type="text"
              style={{ ...smallInputStyle3}}
=======
            <p style={titleStyle}>Beads</p>
            <input
              type="text"
              style={{ ...smallInputStyle3}}
              name = "afterBeads"
>>>>>>> Stashed changes
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
<<<<<<< Updated upstream
            <p style={titleStyle}>คูปองหลังเริ่มงาน</p>
            <input
              type="text"
              style={{ ...smallInputStyle4}}
            />
          </div>
        </div>

=======
            <p style={titleStyle}>Coupon</p>
            <input
              type="text"
              style={{ ...smallInputStyle4}}
              name = "afterCoupon"
            />
          </div>
        </div>
>>>>>>> Stashed changes
        {/* Two Large Input Boxes in the Next Line */}
        <div style={largeInputContainerStyle}>
          <div style={inputContainerStyle}>
          <p style={titleStyle}>Email</p>
            <input
              type="text"
              style={{ ...largeInputStyle}}
<<<<<<< Updated upstream
=======
              name = "email"
>>>>>>> Stashed changes
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
<<<<<<< Updated upstream
            <p style={titleStyle}>เบอร์โทรศัพท์</p>
            <input
              type="text"
              style={{ ...largeInputStyle}}
=======
            <p style={titleStyle}>Tel</p>
            <input
              type="text"
              style={{ ...largeInputStyle}}
              name = "tel"
>>>>>>> Stashed changes
            />
          </div>
        </div>

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
        <div style={largeInputContainerStyle}>
          <div style={inputContainerStyle}>
          <p style={titleStyle}>Facebook</p>
            <input
              type="text"
<<<<<<< Updated upstream
              style={{ ...largeInputStyleFacebook}}
=======
              style={{ ...largeInputStyle}}
              name = "facebook"
>>>>>>> Stashed changes
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>Line</p>
            <input
              type="text"
<<<<<<< Updated upstream
              style={{ ...largeInputStyleLine}}
            />
          </div>
        </div>
        
        <div style={eightInputContainerStyle}>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>แรงค์ที่เริ่ม</p>
            <select style={dropdownContainerStyle}>
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
=======
              style={{ ...largeInputStyle}}
              name = "line"
            />
          </div>
        </div>
        <div style={dropdownContainerStyle}>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>Started Rank</p>
            <select style={dropdownInputStyle}>
              <option value="Bronze">Bronze</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
              <option value="Platinum">Platinum</option>
              <option value="Diamond">Diamond</option>
              <option value="Commander">Commander</option>
              <option value="Conqueror">Conqueror</option>
              <option value="Glorious Ruler">Glorious Ruler</option>
>>>>>>> Stashed changes
            </select>
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
<<<<<<< Updated upstream
            <p style={titleStyle}>แรงค์ที่ต้องการ</p>
            <select style={dropdownContainerStyle}>
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
=======
            <p style={titleStyle}>Wanted Rank</p>
            <select style={dropdownInputStyle}>
              <option value="Bronze">Bronze</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
              <option value="Platinum">Platinum</option>
              <option value="Diamond">Diamond</option>
              <option value="Commander">Commander</option>
              <option value="Conqueror">Conqueror</option>
              <option value="Glorious Ruler">Glorious Ruler</option>
>>>>>>> Stashed changes
            </select>
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
<<<<<<< Updated upstream
            <p style={titleStyle}>แรงค์หลังจบงาน</p>
            <select style={dropdownContainerStyle}>
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
=======
            <p style={titleStyle}>Ended Rank</p>
            <select style={dropdownInputStyle}>
              <option value="Bronze">Bronze</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
              <option value="Platinum">Platinum</option>
              <option value="Diamond">Diamond</option>
              <option value="Commander">Commander</option>
              <option value="Conqueror">Conqueror</option>
              <option value="Glorious Ruler">Glorious Ruler</option>
>>>>>>> Stashed changes
            </select>
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
<<<<<<< Updated upstream
            <p style={titleStyle}>เวลาที่ใช้</p>
            <select style={dropdownContainerStyle}>
                <option value="option1">ตรงตามเวลา</option>
                <option value="option2">เกินเวลา</option>
=======
            <p style={titleStyle}>Time</p>
            <select style={dropdownInputStyle}>
              <option value="option1">Overtime</option>
              <option value="option2">Intime</option>
>>>>>>> Stashed changes
            </select>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem', marginLeft: 'auto' }}>
<<<<<<< Updated upstream
            <button style={greenButtonStyle}>Submit</button>
=======
          <button style={greenButtonStyle}>
            Submit
          </button>
>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  );
}

export default UserReport;