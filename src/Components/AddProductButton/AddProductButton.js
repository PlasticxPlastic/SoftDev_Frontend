import React from 'react';
import './AddProductButton.css';
import addProductIcon from '../../Asset/Add.png';

function AddProductButton({ onClick }) {
    return (
        <button className="add-product-button">
            <img src={addProductIcon} alt="Add Product" />
            <span className="overlay-text">Add Product</span>
        </button>
    );
}

export default AddProductButton;
