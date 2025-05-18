import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './productDetail.css';
import productsData from './ProductData';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  const product = productsData.find(product => product.id === id);

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const colors = ['Black', 'White', 'Blue', 'Red', 'Green'];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      quantity,
    };

    addToCart(item);
    alert(`Added ${quantity} ${product.name} (Size: ${selectedSize}) to cart`);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <div className="product-detail-container">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/collections">Collections</Link> / <span>{product.name}</span>
      </div>

      <div className="product-detail-grid">
        <div className="product-images">
          <div className="main-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="thumbnail-images">
            {[1, 2, 3].map((_, idx) => (
              <img key={idx} src={product.image} alt={`Thumbnail ${idx + 1}`} />
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-category">Category: {product.category}</p>

          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          <div className="size-selector">
            <h3>Size</h3>
            <div className="size-options">
              {sizes.map(size => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="color-selector">
            <h3>Color</h3>
            <div className="color-options">
              {colors.map(color => (
                <button
                  key={color}
                  className="color-btn"
                  style={{ backgroundColor: color.toLowerCase() }}
                  title={color}
                />
              ))}
            </div>
          </div>

          <div className="quantity-selector">
            <h3>Quantity</h3>
            <div className="quantity-controls">
              <button onClick={decrementQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={incrementQuantity}>+</button>
            </div>
          </div>

          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>

          <div className="product-meta">
            <div className="meta-item">
              <span>SKU:</span> {product.id}
            </div>
            <div className="meta-item">
              <span>Category:</span> {product.category}
            </div>
          </div>
        </div>
      </div>

      <div className="related-products">
        <h2>You May Also Like</h2>
        <div className="related-products-grid">
          {productsData
            .filter(
              (relatedProduct) =>
                relatedProduct.category === product.category &&
                relatedProduct.id !== product.id
            )
            .slice(0, 4)
            .map((relatedProduct) => (
              <Link
                to={`/product/${relatedProduct.id}`}
                key={relatedProduct.id}
                className="related-product-card"
              >
                <img src={relatedProduct.image} alt={relatedProduct.name} />
                <h3>{relatedProduct.name}</h3>
                <p>${relatedProduct.price.toFixed(2)}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
