import React from 'react';

function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2 className='pro-heading'>E COMMERCE STORE</h2>
        <div className='prod-container'>
            <ul type="none">
            {products.map((product) => (
              <li key={product.id}>
                <div className='prod-block'>
                  <img className='prod-img' src={product.image} alt={product.name} />
                  <div className='prod-det'>
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
}

export default ProductList;