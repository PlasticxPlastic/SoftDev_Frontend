import React from 'react';

function BoosterReport() {
  const containerStyle = {
    display: 'flex',
    height: '100vh',
  };

  const leftSideStyle = {
    width: '30%',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2rem',
    borderRadius: '10px',
    marginRight: '2rem',
  };

  const roundedSquareStyle = {
    width: '18rem',
    height: '15rem',
    borderRadius: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
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


  return (
    <div style={containerStyle}>
      {/* Left Side */}
      <div style={leftSideStyle}>
        <div style={{ height: '2rem' }}></div> {/* 2rem gap */}
        <div style={roundedSquareStyle}></div>
        <div style={{ height: '2rem' }}></div> {/* 2rem gap */}
        <div style={roundedSquareStyle}></div>
      </div>

      {/* Right Side with Input Boxes */}
      <div style={rightSideStyle}>
        
        <div style={inputContainerStyle}>
          <p style={titleStyle}>Title 1</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <input
              type="text"
              style={{ ...inputStyle}}
            />
            <div style={{ width: '1rem' }}></div>
            <input
              type="datetime-local"
              style={{ ...dateTimeInputStyle}}
            />
          </div>
        </div>

        {/* Four More Input Boxes Below with Different Colors */}
        <div style={eightInputContainerStyle}>
        <div style={inputContainerStyle}>
            <p style={titleStyle}>Title 5</p>
            <input
              type="text"
              style={{ ...smallInputStyle1}}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>Title 5</p>
            <input
              type="text"
              style={{ ...smallInputStyle2}}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>Title 5</p>
            <input
              type="text"
              style={{ ...smallInputStyle3}}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>Title 5</p>
            <input
              type="text"
              style={{ ...smallInputStyle4}}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
        </div>
        {/* Four More Input Boxes Below with Different Colors */}
        <div style={eightInputContainerStyle}>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>Title 5</p>
            <input
              type="text"
              style={{ ...smallInputStyle1}}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>Title 5</p>
            <input
              type="text"
              style={{ ...smallInputStyle2}}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>Title 5</p>
            <input
              type="text"
              style={{ ...smallInputStyle3}}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>Title 5</p>
            <input
              type="text"
              style={{ ...smallInputStyle4}}
            />
          </div>
        </div>

        {/* Two Large Input Boxes in the Next Line */}
        <div style={largeInputContainerStyle}>
          <div style={inputContainerStyle}>
          <p style={titleStyle}>safasfasf</p>
            <input
              type="text"
              style={{ ...largeInputStyle}}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>safasfasf</p>
            <input
              type="text"
              style={{ ...largeInputStyle}}
            />
          </div>
        </div>

        <div style={largeInputContainerStyle}>
          <div style={inputContainerStyle}>
          <p style={titleStyle}>safasfasf</p>
            <input
              type="text"
              style={{ ...largeInputStyle}}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>safasfasf</p>
            <input
              type="text"
              style={{ ...largeInputStyle}}
            />
          </div>
        </div>
        <div style={dropdownContainerStyle}>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>Dropdown 1</p>
            <select style={dropdownInputStyle}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>Dropdown 2</p>
            <select style={dropdownInputStyle}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>Dropdown 3</p>
            <select style={dropdownInputStyle}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>Dropdown 4</p>
            <select style={dropdownInputStyle}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem', marginLeft: 'auto' }}>
          <button style={greenButtonStyle}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default BoosterReport;
