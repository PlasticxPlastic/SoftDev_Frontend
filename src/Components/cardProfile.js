// CardProfile.js
import React from 'react';
import PropTypes from 'prop-types';

const CardProfile = ({ imageUrl, productName, status, seller, price }) => {
    return (
        <div style={cardStyle}>
            <img src={imageUrl} alt={productName} style={imageStyle} />
            <div style={detailsContainerStyle}>
                <div style={productNameStyle}>
                    {productName}&nbsp;&nbsp;&nbsp;
                    <span style={statusStyle}>{status}</span>&nbsp;&nbsp;&nbsp;
                    <span style={sellerStyle}>{seller}</span>&nbsp;&nbsp;&nbsp;
                    <span style={priceStyle}>Price: ${price.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

CardProfile.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    seller: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

const cardStyle = {
    width: '620px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    border: '1px solid #ccc',
    borderRadius: '30px',
    padding: '20px',
    margin: '20px 0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    background: '#e0e0e0', // เปลี่ยนสีพื้นหลังเป็นสีเทา
};

const imageStyle = {
    width: '75px',
    height: '75px',
    objectFit: 'cover',
    marginRight: '30px',
    borderRadius: '8px',
};

const detailsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
};

const productNameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    whiteSpace: 'nowrap', // ป้องกันข้อความขึ้นบรรทัดใหม่
    overflow: 'hidden', // ป้องกันข้อความขึ้นบรรทัดใหม่
    textOverflow: 'ellipsis', // ป้องกันข้อความขึ้นบรรทัดใหม่
};

const statusStyle = {
    color: 'green', // ตั้งสีข้อความให้เป็นสีเขียว
    textDecoration: 'underline', // เพิ่มขีดเส้นใต้ข้อความ
};

const sellerStyle = {
    color: 'blue', // ตั้งสีข้อความให้เป็นสีน้ำเงิน
    textDecoration: 'underline', // เพิ่มขีดเส้นใต้ข้อความ
};

const priceStyle = {
    color: 'red', // ตั้งสีข้อความให้เป็นสีแดง
};

export default CardProfile;