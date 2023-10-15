import React from 'react';

function BuyerReport() {
  const greenButtonStyle = {
    width: '28rem',
    height: '3rem',
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

  const containerStyle = {
    display: 'flex',
    height: '100vh',
  };

  const leftSideStyle = {
    width: '30%',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center-align the content
    justifyContent: 'center', // Center-align the content
    padding: '2rem',
    borderRadius: '10px',
    marginRight: '2rem',
  };

  const textInsideSquareStyle = {
    fontSize: '1.5rem',
    color: 'white',
    marginBottom: '1rem',
  };

  const squareWithTextStyle = {
    width: '18rem',
    height: '15rem',
    borderRadius: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
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
    alignItems: 'center', // Center-align all content in the right side
    justifyContent: 'center', // Center-align all content in the right side
    padding: '2rem',
    marginBottom: '20rem',
  };


  const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '0.2rem',
};

const dateTimeInputStyle = {
    width: '25rem',
    height: '3rem',
    borderRadius: '10px',
    border: '1px solid gray',
    fontSize: '1rem',
    padding: '0.5rem',
    color: 'black',
    backgroundColor: '#D9D9D9',
};

const titleStyle = {
    color: 'black',
    marginBottom: '0.5rem',
    fontSize: '1rem',
};

const inputStyle = {
    width: '25rem',
    height: '3rem',
    borderRadius: '10px',
    border: '1px solid gray',
    fontSize: '1rem',
    padding: '0.5rem',
    color: 'black',
    backgroundColor: '#D9D9D9',
    outline: 'none',
};

const largeInputStyleFacebook = {
    width: '25rem',
    height: '3rem',
    borderRadius: '10px',
    border: '1px solid gray',
    fontSize: '1rem',
    padding: '0.5rem',
    color: 'black',
    backgroundColor: '#17A9FD', // Color for large input 1
};

const largeInputStyleLine = {
    width: '25rem',
    height: '3rem',
    borderRadius: '10px',
    border: '1px solid gray',
    fontSize: '1rem',
    padding: '0.5rem',
    color: 'black',
    backgroundColor: '#4CC764', // Color for large input 1
};

const largeInputStyle = {
    width: '50rem',
    height: '20rem',
    borderRadius: '10px',
    border: '1px solid gray',
    fontSize: '2rem',
    padding: '0.5rem',
    color: 'black',
    backgroundColor: '#D9D9D9', // Color for large input 1
};

const largeInputContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
};

  return (
    <div style={containerStyle}>
      {/* Left Side */}
      <div style={leftSideStyle}>
        <div style={squareWithTextStyle}>
          <p style={textInsideSquareStyle}>Text Inside Square</p>
        </div>
      </div>

      {/* Right Side with Input Boxes */}
      <div style={rightSideStyle}>
        <div style={inputContainerStyle}>
            <p style={titleStyle}>UID</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <input
                    type="text"
                    style={{ ...inputStyle}}
                />
                <div style={{ width: '1rem' }}></div>
                <input
                    type="date"
                    style={{ ...dateTimeInputStyle}}
                />
            </div>
        </div>

        <div style={largeInputContainerStyle}>
            <div style={inputContainerStyle}>
                <p style={titleStyle}>Detail</p>
                <textarea
                style={{
                    ...largeInputStyle,
                    height: '10rem', // Set the desired height for the textarea
                    resize: 'vertical', // Allow vertical resizing
                }}
                />
            </div>
        </div>

        <div style={largeInputContainerStyle}>
          <div style={inputContainerStyle}>
          <p style={titleStyle}>Facebook</p>
            <input
              type="text"
              style={{ ...largeInputStyleFacebook}}
            />
          </div>
          <div style={{ width: '1rem' }}></div>
          <div style={inputContainerStyle}>
            <p style={titleStyle}>Line</p>
            <input
              type="text"
              style={{ ...largeInputStyleLine}}
            />
          </div>
        </div>


        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem', marginLeft: 'auto' }}>
            <button style={greenButtonStyle}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default BuyerReport;
