import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div>
      <h1 className="featured-heading">Featured Product</h1>
      <div className="products">
        {data.products.map((product, index) => (
          <div key={index} className="product">
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p className="product-name">{product.name}</p>
              </Link>
              <p>
                <strong>Rs {product.price}</strong>
              </p>
              <button className="btn">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
