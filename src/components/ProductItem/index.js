import React from 'react';
import './index.css';
import ShareButton from '../ShareButton';

const ProductItem = ({ product }) => (
  <div className="product-item">
    <a href={`/product/${product.id}`}>
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-name">{product.title}</h2>
      <p className="product-price">${product.price}</p>
    </a>
    <ShareButton product={product} />
  </div>
);

export default ProductItem;
