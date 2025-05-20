import React from 'react';
import { productList } from '../data/products';

const ProductSection = () => (
  <>
    {productList.map((section, index) => (
      <section id="products" key={index}>
        <h2>Featured Products</h2>
        <div className="product-list">
          {section.items.map((product, i) => (
            <div className="product-item" key={`${product.name}-${i}`}>
              {/* ✅ Ensure image is rendered properly */}
              <img src={product.image.default || product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
        <a href={section.link} className="btn">SEE MORE</a>
      </section>
    ))}
  </>
);

export default ProductSection;
