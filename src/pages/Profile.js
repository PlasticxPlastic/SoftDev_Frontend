import React from 'react';

function ProfilePage() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const profileSideStyle = {
    flex: 4,
    display: 'flex',
    flexDirection: 'row',
  };

  const historySideStyle = {
    flex: 6,
  };

  const leftSectionStyle = {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const middleSectionStyle = {
    flex: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const rightSectionStyle = {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '9rem',
    height: '9rem', // Adjust the height as needed
    backgroundColor: 'gray', // Placeholder for image
    borderRadius: '1rem', // Add border radius to create rounded corners
  };
  

  const textBelowImageStyle = {
    textAlign: 'center',
  };

  const profileTextStyle = {
    margin: '0.5rem', // Adjust as needed
  };

  return (
    <div style={containerStyle}>
      <div style={profileSideStyle}>
        <div style={leftSectionStyle}>
        <img src="https://media.discordapp.net/attachments/1072640218223616051/1162320754742939658/Profile_2.png?ex=653b828e&is=65290d8e&hm=2d08d1b991f77f30981391bdc11fa3f0db80b3828867926fd8e65e473dde6840&=&width=178&height=202" alt="Buy" />
          <p style={textBelowImageStyle}>ซื้อขาย</p>
        </div>
        <div style={{ width: '20rem' }}></div>
        <div style={middleSectionStyle}>
          <p style={profileTextStyle}>Profile</p>
          <img src="https://media.discordapp.net/attachments/1072640218223616051/1162320754742939658/Profile_2.png?ex=653b828e&is=65290d8e&hm=2d08d1b991f77f30981391bdc11fa3f0db80b3828867926fd8e65e473dde6840&=&width=178&height=202" alt="Profile" />
          <p style={profileTextStyle}>Profile</p>
        </div>
        <div style={{ width: '20rem' }}></div>
        <div style={rightSectionStyle}>
        <img src="https://media.discordapp.net/attachments/1072640218223616051/1162320754742939658/Profile_2.png?ex=653b828e&is=65290d8e&hm=2d08d1b991f77f30981391bdc11fa3f0db80b3828867926fd8e65e473dde6840&=&width=178&height=202" alt="Boost" />
          <p style={textBelowImageStyle}>Boost</p>
        </div>
      </div>
      <div style={historySideStyle}>
        {/* Place your content for the history side here */}
      </div>
    </div>
  );
}

export default ProfilePage;
