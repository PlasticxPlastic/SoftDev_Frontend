import React, { useState, useEffect } from 'react';
import './MainShop.css';
import AddID from '../../Components/AddProductButton/AddID';
import AddBoost from '../../Components/AddProductButton/AddBoost';
import FilterID from '../../Components/Filter/FilterID';
import FilterBoost from '../../Components/Filter/FilterBoost';
import ProductCard from '../../Components/ProductCard/ProductCard';
import SortID from '../../Components/SortDropdown/SortID'; 
import SortBoost from '../../Components/SortDropdown/SortBoost'; 



const MainShop = () => {
    const token = localStorage.getItem('accessToken');
    console.log(token);

    const products = [
        { id: 1, name: 'สินค้า 1', price: 100, imageURL: "https://via.placeholder.com/150x150" },
        { id: 2, name: 'สินค้า 2', price: 150, imageURL: "https://via.placeholder.com/150x150" },
        { id: 3, name: 'สินค้า 3', price: 100, imageURL: "https://via.placeholder.com/150x150" },
        { id: 4, name: 'สินค้า 4', price: 150, imageURL: "https://via.placeholder.com/150x150" },
        { id: 5, name: 'สินค้า 5', price: 100, imageURL: "https://via.placeholder.com/150x150" },
        { id: 6, name: 'สินค้า 6', price: 150, imageURL: "https://via.placeholder.com/150x150" },
        { id: 7, name: 'สินค้า 7', price: 100, imageURL: "https://via.placeholder.com/150x150" },
        { id: 8, name: 'สินค้า 8', price: 150, imageURL: "https://via.placeholder.com/150x150" },
        { id: 9, name: 'สินค้า 9', price: 100, imageURL: "https://via.placeholder.com/150x150" },
        { id: 10, name: 'สินค้า 10', price: 150, imageURL: "https://via.placeholder.com/150x150" },
        { id: 11, name: 'สินค้า 11', price: 100, imageURL: "https://via.placeholder.com/150x150" },
        { id: 12, name: 'สินค้า 12', price: 150, imageURL: "https://via.placeholder.com/150x150" },
        { id: 13, name: 'สินค้า 13', price: 100, imageURL: "https://via.placeholder.com/150x150" },
        { id: 14, name: 'สินค้า 14', price: 150, imageURL: "https://via.placeholder.com/150x150" },
        { id: 15, name: 'สินค้า 15', price: 100, imageURL: "https://via.placeholder.com/150x150" },
        { id: 16, name: 'สินค้า 16', price: 150, imageURL: "https://via.placeholder.com/150x150" },
        { id: 17, name: 'สินค้า 17', price: 100, imageURL: "https://via.placeholder.com/150x150" },
        { id: 18, name: 'สินค้า 18', price: 150, imageURL: "https://via.placeholder.com/150x150" },
        { id: 19, name: 'สินค้า 19', price: 100, imageURL: "https://via.placeholder.com/150x150" },
        { id: 20, name: 'สินค้า 20', price: 150, imageURL: "https://via.placeholder.com/150x150" }
      ];

    const [isBoostMode, setBoostMode] = useState(false);
    const [sortOrder, setSortOrder] = useState(''); 

    useEffect(() => {
        setSortOrder(''); // reset sortOrder ทุกครั้งที่ isBoostMode เปลี่ยนแปลง
    }, [isBoostMode]);    

    const handleFilter = (category) => {
        console.log("Filter by:", category);
        // Handle product filtering by category here
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
        // handle the sorting logic here
    };
    

    return (
        <div className="MainShop">
            <header className="shop-header"></header>
            <div className="mode-buttons">
                <button className={isBoostMode ? '' : 'active'} onClick={() => setBoostMode(false)}>กำลังขาย</button>
                <button className={isBoostMode ? 'active' : ''} onClick={() => setBoostMode(true)}>Boost!!!</button>
            </div>
            {isBoostMode ? (
                        <SortBoost sortOrder={sortOrder} onSortChange={handleSortChange} />
                    ) : (
                        <SortID sortOrder={sortOrder} onSortChange={handleSortChange} />
                    )}
            
            <div className="shop-container">
                <div className="filter-container">
                    {/* Render FilterID or FilterBoost based on isBoostMode */}
                    {isBoostMode ? (
                        <FilterBoost onFilter={handleFilter} />
                    ) : (
                        <FilterID onFilter={handleFilter}/>
                    )}
                </div>
                <div className="products-container">
                    {/* โค้ดสำหรับแสดงสินค้าที่นี่ */}
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
            {isBoostMode ? (
                        <AddBoost onFilter={handleFilter} />
                    ) : (
                        <AddID onFilter={handleFilter}/>
                    )}
        </div>
    );
}
  
export default MainShop;