import React from 'react';
import './AddID.css';

function AddID({ onClick }) {
    return (
        <button className="add-id-button">
            <img src="https://cdn.pic.in.th/file/picinth/Add.png" alt="Add ID" />
            <span className="overlay-text">Add ID</span>
        </button>
    );
}

export default AddID;