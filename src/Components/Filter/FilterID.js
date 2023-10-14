import React, { useState } from 'react';
import './FilterID.css';

const FilterID = ({ onFilter }) => {
    const [selections, setSelections] = useState({
        Hero: "",
        Skin: "",
        Rank: [],
        Price: ""
    });

    const [isOpen, setIsOpen] = useState({
        Hero: false,
        Skin: false,
        Rank: false,
        Price: false
    });

    const handleOptionClick = (value, category) => {
        setSelections(prev => ({ ...prev, [category]: value }));
        toggleDropdown(category);
    };

    const toggleDropdown = (category) => {
        setIsOpen(prev => ({ ...prev, [category]: !prev[category] }));
    };

    const handleCheckboxChange = (e, category) => {
        const value = e.target.value;
        const checked = e.target.checked;

        setSelections(prev => {
            if (checked) {
                return { ...prev, [category]: [...prev[category], value] };
            } else {
                return { ...prev, [category]: prev[category].filter(item => item !== value) };
            }
        });
    };

    return (
        <div className="FilterID">
            <h2>Filter</h2>

            <div>
                <button onClick={() => toggleDropdown('Hero')}>Hero: {selections.Hero || "Select"}</button>
                {isOpen.Hero && (
                    <div>
                        <button onClick={() => handleOptionClick("1-25", 'Hero')} className="dropdown-button">1-25 hero</button>
                        <button onClick={() => handleOptionClick("26-50", 'Hero')} className="dropdown-button">26-50 hero</button>
                        <button onClick={() => handleOptionClick("51-75", 'Hero')} className="dropdown-button">51-75 hero</button>
                        <button onClick={() => handleOptionClick("76-100", 'Hero')} className="dropdown-button">76-100 hero</button>
                        <button onClick={() => handleOptionClick("> 100", 'Hero')} className="dropdown-button">{'> '}100 hero</button>
                        {/* ... other Hero options */}
                    </div>
                )}
            </div>

            <div>
                <button onClick={() => toggleDropdown('Skin')}>Skin: {selections.Skin || "Select"}</button>
                {isOpen.Skin && (
                    <div>
                        <button onClick={() => handleOptionClick("1-50", 'Skin')} className="dropdown-button">1-50 skin</button>
                        <button onClick={() => handleOptionClick("51-100", 'Skin')} className="dropdown-button">51-100 skin</button>
                        <button onClick={() => handleOptionClick("101-150", 'Skin')} className="dropdown-button">1-50 skin</button>
                        <button onClick={() => handleOptionClick("151-200", 'Skin')} className="dropdown-button">51-100 skin</button>
                        <button onClick={() => handleOptionClick("> 200", 'Skin')} className="dropdown-button">{'> '}200 skin</button>
                        {/* ... other Hero options */}
                    </div>
                )}
            </div>

            <div>
                <button onClick={() => toggleDropdown('Rank')}>Rank: {selections.Rank.join(", ") || "Select"}</button>
                {isOpen.Rank && (
                    <div className="rank-options">
                    <div className="rank-row">
                        <label>
                            <input type="checkbox" value="Bronze" 
                                   checked={selections.Rank.includes("Bronze")} 
                                   onChange={(e) => handleCheckboxChange(e, 'Rank')} /> Bronze
                        </label>
                        <label>
                            <input type="checkbox" value="Silver"
                                   checked={selections.Rank.includes("Silver")} 
                                   onChange={(e) => handleCheckboxChange(e, 'Rank')} /> Silver
                        </label>
                        <label>
                            <input type="checkbox" value="Gold" 
                                checked={selections.Rank.includes("Gold")} 
                                onChange={(e) => handleCheckboxChange(e, 'Rank')} /> Gold
                        </label>
                        <label>
                            <input type="checkbox" value="Platinum"
                                checked={selections.Rank.includes("Platinum")} 
                                onChange={(e) => handleCheckboxChange(e, 'Rank')} /> Platinum
                        </label>
                        <label>
                            <input type="checkbox" value="Diamond" 
                                   checked={selections.Rank.includes("Diamond")} 
                                   onChange={(e) => handleCheckboxChange(e, 'Rank')} /> Diamond
                        </label>
                        <label>
                            <input type="checkbox" value="Commander"
                                   checked={selections.Rank.includes("Commander")} 
                                   onChange={(e) => handleCheckboxChange(e, 'Rank')} /> Commander
                        </label>
                        <label>
                            <input type="checkbox" value="Conqueror" 
                                checked={selections.Rank.includes("Conqueror")} 
                                onChange={(e) => handleCheckboxChange(e, 'Rank')} /> Conqueror
                        </label>
                        <label>
                            <input type="checkbox" value="Glorious Ruler"
                                checked={selections.Rank.includes("Glorious Ruler")} 
                                onChange={(e) => handleCheckboxChange(e, 'Rank')} /> Glorious Ruler
                        </label>
                    </div>
                    {/* ... other Rank options */}
                </div>
                )}
            </div>

            <div>
                <button onClick={() => toggleDropdown('Price')}>Price: {selections.Price || "Select"}</button>
                {isOpen.Price && (
                    <div>
                        <button onClick={() => handleOptionClick("1-500 บาท", 'Price')} className="dropdown-button">1-500 บาท</button>
                        <button onClick={() => handleOptionClick("501-1000 บาท", 'Price')} className="dropdown-button">501-1000 บาท</button>
                        <button onClick={() => handleOptionClick("1001-1500 บาท", 'Price')} className="dropdown-button">1001-1500 บาท</button>
                        <button onClick={() => handleOptionClick("1501-2000 บาท", 'Price')} className="dropdown-button">1501-2000 บาท</button>
                        <button onClick={() => handleOptionClick("> 2000 บาท", 'Price')} className="dropdown-button">{'> '}2000 บาท</button>
                        {/* ... other Hero options */}
                    </div>
                )}
            </div>

            {/* ... other parts of the Filter component remain the same */}
        </div>
    );
};

export default FilterID;