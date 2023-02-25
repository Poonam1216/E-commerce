import React from 'react';

function Cart({ cart, removeFromCart, clearCart, handleCheckout }) {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className='cart-block'>
      <h2>Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={clearCart}>Clear Cart</button>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default Cart;