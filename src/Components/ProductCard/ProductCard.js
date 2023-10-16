// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';


const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageURL} alt={product.name} className="product-image" />
      <p className="product-name">{product.name}</p>
      <h3 className="product-price">{product.price} บาท</h3>
    </div>
  );
}

export default ProductCard;