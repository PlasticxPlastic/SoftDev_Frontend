// App.js
import React from 'react';
import CardProfile from './cardProfile';

const CallCardProfile = () => {
    const productData = {
        imageUrl: 'image/ROV.jpg',
        productName: 'Murad Broze 2',
        status: 'กำลังตั้งขาย',
        seller: 'Incognito Man',
        price: 750,
    };

    return (
        <div style={containerStyle}>
            <CardProfile {...productData} />
        </div>
    );
};

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
};

export default CallCardProfile;
