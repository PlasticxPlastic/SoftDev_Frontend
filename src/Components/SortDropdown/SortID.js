// SortDropdown.js
import React from 'react';
import './SortID.css';

const SortID = ({ sortOrder, onSortChange }) => {
    return (
        <div className="sort-container">
            <select onChange={onSortChange} value={sortOrder} className="sort-dropdown">
                <option value="">เรียงลำดับราคา ID</option>
                <option value="lowToHigh">ราคาน้อยไปราคามาก</option>
                <option value="highToLow">ราคามากไปราคาน้อย</option>
            </select>
        </div>
    );
}

export default SortID;
