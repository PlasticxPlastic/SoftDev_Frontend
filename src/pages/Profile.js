import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="profile-container">
            <div className="top-image">
                <img src="image/Profile.png" alt="Icognito Man" />
                <p>Icognito Man</p>
            </div>
            <div className="bottom-images">
                <div>
                    <img src="image/Profile (1).png" alt="ซื้อขาย 900 ครั้ง" />
                    <p>ซื้อขาย 900 ครั้ง</p>
                </div>
                <div>
                    <img src="image/Profile (1).png" alt="คะแนนผู้ใช้" />
                    <p><img src="image/ss.png" /></p>
                </div>
                <div>
                    <img src="image/Profile (2).png" alt="Boost 900 ครั้ง" />
                    <p>Boost 900 ครั้ง</p>
                </div>
            </div>
            <div className="options-container">
                <button
                    className={`option-button ${selectedOption === 'selling' ? 'active' : ''}`}
                    onClick={() => handleOptionClick('selling')}
                >
                    กำลังขาย
                </button>
                <button
                    className={`option-button ${selectedOption === 'boosting' ? 'active' : ''}`}
                    onClick={() => handleOptionClick('boosting')}
                >
                    Boosting
                </button>
                <button
                    className={`option-button ${selectedOption === 'trading' ? 'active' : ''}`}
                    onClick={() => handleOptionClick('trading')}
                >
                    กำลังทำการซื้อขาย
                </button>
            </div>
            {selectedOption && (
                <div className="selected-option-info">
                    {/* Display information based on the selected option */}
                    {selectedOption === 'selling' && <p>ข้อมูลกำลังขาย</p>}
                    {selectedOption === 'boosting' && <p>ข้อมูล Boosting</p>}
                    {selectedOption === 'trading' && <p>ข้อมูลกำลังทำการซื้อขาย</p>}
                </div>
            )}
        </div>
    );
};

export default Profile;
