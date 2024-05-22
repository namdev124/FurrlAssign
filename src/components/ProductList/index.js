import React, { useState, useEffect, useCallback } from 'react';
import './index.css';
import ProductItem from '../ProductItem';
import { fetchProducts } from '../../api';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadProducts = useCallback(async () => {
    setLoading(true);
    try {
      const newProducts = await fetchProducts(page);
      setProducts(prev => [...prev, ...newProducts]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    loadProducts();
  }, [page, loadProducts]);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !loading) {
      setPage(prev => prev + 1);
    }
  }, [loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default ProductList;
