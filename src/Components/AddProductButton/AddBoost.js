import React from 'react';
import './AddBoost.css';
import addProductIcon from '../../Asset/Add.png';

function AddBoost({ onClick }) {
    return (
        <button className="add-boost-button">
            <img src={addProductIcon} alt="Add Boost" />
            <span className="overlay-text">Add Boost</span>
        </button>
    );
}

export default AddBoost;
