import React from 'react';
import './AddID.css';
import addProductIcon from '../../Asset/Add.png';

function AddID({ onClick }) {
    return (
        <button className="add-id-button">
            <img src={addProductIcon} alt="Add ID" />
            <span className="overlay-text">Add ID</span>
        </button>
    );
}

export default AddID;
