import React, { useState } from 'react';
import './FilterBoost.css';

const FilterBoost = ({ onFilter }) => {
    const [selections, setSelections] = useState({
        Rank: [],
        WinRate: "",
        Price: ""
    });

    const [isOpen, setIsOpen] = useState({
        Rank: false,
        WinRate: false,
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
        <div className="FilterBoost">
            <h2>Filter</h2>

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
                <button onClick={() => toggleDropdown('WinRate')}>Win Rate: {selections.WinRate || "Select"}</button>
                {isOpen.WinRate && (
                    <div>
                        <button onClick={() => handleOptionClick("1-25 %", 'WinRate')} className="dropdown-button">1-25 %</button>
                        <button onClick={() => handleOptionClick("26-50 %", 'WinRate')} className="dropdown-button">26-50 %</button>
                        <button onClick={() => handleOptionClick("51-75 %", 'WinRate')} className="dropdown-button">51-75 %</button>
                        <button onClick={() => handleOptionClick("76-100 %", 'WinRate')} className="dropdown-button">76-100 %</button>
                        {/* ... other Hero options */}
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

export default FilterBoost;