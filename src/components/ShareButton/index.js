import React from 'react';
import './index.css';

const ShareButton = ({ product }) => {
  const shareProduct = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.title,
          url: `/product/${product.id}`
        });
      } catch (error) {
        console.error('Error sharing', error);
      }
    } else {
      console.log('Web share not supported');
    }
  };

  return (
    <button onClick={shareProduct} className="share-button">Share</button>
  );
};

export default ShareButton;
