import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing to the signin page
import axios from 'axios';

function Signup() {
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
    marginBottom: '5rem',
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
    height: '2rem',
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
    height: '4rem',
    borderRadius: '0.5rem',
    background: '#C58B00',
    color: 'white',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
  };

  const [formData, setFormData] = React.useState({
    user_email: '',
    password: '',
    first_name: '',
    last_name: '',
    con_num: '',
    user_name: '',
    confirmPassword: '',
  });
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Check if the passwords match
    if (formData.password !== formData.confirmPassword) {
      // Passwords do not match, show an error or take appropriate action
      alert("Passwords do not match");
      return; // Stop form submission
    }

    try {
      const response = await axios.post('http://localhost:3333/auth/register', formData);
      if (response.data.message === "Ok") {
        // Registration successful
        console.log("Registration successful");
        alert("Registration successful");
      } else if (response.data.error === "Email already exists!") {
        // Handle the case where the email already exists
        console.log("Email already exists. Please use a different email.");
        alert("Email already exists. Please use a different email.");
      } else {
        // Handle other cases
        console.log("Registration failed:", response.data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        <input type="text" style={inputStyle} placeholder="Enter Email" name="user_email" onChange={handleInputChange} />
        <input type="text" style={inputStyle} placeholder="Create Username" name="user_name" onChange={handleInputChange} />
        <input type="text" style={inputStyle} placeholder="Contact Number" name="con_num" onChange={handleInputChange} />
        <input type="text" style={inputStyle} placeholder="First name" name="first_name" onChange={handleInputChange} />
        <input type="text" style={inputStyle} placeholder="Last name" name="last_name" onChange={handleInputChange} />
        <input type="password" style={inputStyle} placeholder="Password" name="password" onChange={handleInputChange} />
        <input type="password" style={inputStyle} placeholder="Confirm Password" name="confirmPassword" onChange={handleInputChange} />
        <button style={buttonStyle} onClick={handleFormSubmit}>Register</button>
      </div>
    </div>
  );
}

export default Signup;