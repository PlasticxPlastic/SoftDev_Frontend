import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing to the signin page

function signup() {
  const containerStyle = {
    display: 'flex',
    height: '100vh',
  };

  const leftSideStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4', // Background color for the left side
  };

  const innerContainerStyle = {
    marginBottom: '20rem', // Increase margin at the bottom
  };

  const typographyGroupStyle = {
    color: '#000',
    textAlign: 'center', // Center-align the text
  };

  const typography1Style = {
    fontSize: '3.125rem',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
  };

  const typography2Style = {
    fontSize: '2.1875rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
  };

  const typography3Style = {
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  };

  const loginLinkStyle = {
    color: '#4D47C3', // Text color for the "Login here!"
    textDecoration: 'none', // Remove underline
  };

  const rightSideStyle = {
    flex: 1,
    backgroundColor: 'white', // Background color for the right side
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const signUpTextStyle = {
    color: '#000',
    fontSize: '1.875rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
  };

  const inputStyle = {
    width: '28rem',
    height: '1rem',
    flexShrink: 0,
    borderRadius: '0.5rem',
    background: 'rgba(250, 180, 10, 0.62)',
    fontSize: '1rem',
    border: 'none',
    padding: '1rem',
    margin: '1rem 0',
  };

  const buttonStyle = {
    width: '30rem',
    height: '2rem',
    borderRadius: '0.5rem',
    background: '#C58B00',
    color: 'white',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      {/* Left Side */}
      <div style={leftSideStyle}>
        <div style={innerContainerStyle}>
          <div style={typographyGroupStyle}>
            <p style={typography1Style}>Sign Up to</p>
            <p style={typography2Style}>Our Website</p>
            <p style={typography3Style}>
              If you already have an account, You can{' '}
              <Link to="/signin" style={loginLinkStyle}>
                Login here!
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div style={rightSideStyle}>
        <p style={signUpTextStyle}>Sign Up</p>
        <input type="text" style={inputStyle} placeholder="Enter Email" />
        <input type="text" style={inputStyle} placeholder="Create Username" />
        <input type="text" style={inputStyle} placeholder="Contact Number" />
        <input type="text" style={inputStyle} placeholder="First name" />
        <input type="text" style={inputStyle} placeholder="Last name" />
        <input type="password" style={inputStyle} placeholder="Password" />
        <input type="password" style={inputStyle} placeholder="Confirm Password" />
        <button style={buttonStyle}>Register</button>
      </div>
    </div>
  );
}

export default signup;
