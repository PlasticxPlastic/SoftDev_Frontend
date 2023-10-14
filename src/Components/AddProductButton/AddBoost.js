import React from 'react';
import './AddBoost.css';

function AddBoost({ onClick }) {
    return (
        <button className="add-boost-button">
            <img src="https://cdn.pic.in.th/file/picinth/Add.png" alt="Add Boost" />
            <span className="overlay-text">Add Boost</span>
        </button>
    );
}

export default AddBoost;