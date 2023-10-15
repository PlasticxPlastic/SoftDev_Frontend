import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing to the signup page

function SignInPage() {
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

  const registerLinkStyle = {
    color: '#FAB40A', // Text color for the "Register here!"
    textDecoration: 'none', // Remove underline
  };

  const rightSideStyle = {
    flex: 1,
    backgroundColor: 'white', // Background color for the right side
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20rem',
  };

  const signInTextStyle = {
    color: '#000',
    fontSize: '1.875rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
  };

  const inputStyle = {
    width: '25rem',
    height: '3rem',
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
    height: '5rem',
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
            <p style={typography1Style}>Sign in</p>
            <p style={typography2Style}>Our Website</p>
            <p style={typography3Style}>
              If you don't have an account, You can{' '}
              <Link to="/signup" style={registerLinkStyle}>
                Register here!
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div style={rightSideStyle}>
        <p style={signInTextStyle}>Sign in</p>
        <input
          type="text"
          style={inputStyle}
          placeholder="Enter email or username"
        />
        <input
          type="password"
          style={inputStyle}
          placeholder="Password"
        />
        <button style={buttonStyle}>Login</button>
      </div>
    </div>
  );
}

export default SignInPage;
