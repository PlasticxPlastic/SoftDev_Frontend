// SortDropdown.js
import React from 'react';
import './SortBoost.css';

const SortBoost = ({ sortOrder, onSortChange }) => {
    return (
        <div className="sort-container">
            <select onChange={onSortChange} value={sortOrder} className="sort-dropdown">
                <option value="">เรียงลำดับราคาBoost</option>
                <option value="lowToHigh">ราคาน้อยไปราคามาก</option>
                <option value="highToLow">ราคามากไปราคาน้อย</option>
            </select>
        </div>
    );
}

export default SortBoost;
