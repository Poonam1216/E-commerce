import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import Checkout from './CheckOut';
import PaymentProvider from './PaymentProvider';

const products = [
  {
    id: 1,
    name: "Perfume",
    image:'https://images.unsplash.com/photo-1676487538577-fc5a7143a2a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
     price: 159.99,
    category: "Men Perfume"
  },
  {
    id: 2,
    name: "Designer Watch",
    image:'https://images.unsplash.com/photo-1677083800091-825eb72cb2a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    price: 49.00,
    category: "watch"
  },
  {
    id: 3,
    name: "Death Stranding",
    image: 'https://images.unsplash.com/photo-1651864757108-761b6af2a469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGUlMjBnYW1lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    price: 39.99,
    category: "videogames"
  },
  {
    id: 4,
    name: "Silver bracelet",
    image: "https://images.unsplash.com/photo-1676485284310-7d588a7a5164?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    price: 19.99,
    category: "Accesories"
  },
  {
    id: 5,
    name: "Designer Saree",
    image: "https://images.unsplash.com/photo-1615886753866-79396abc446e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    price: 219.99,
    category: "Saree"
  },
  {
    id: 6,
    name: "Banarsee saree",
    image: "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    price: 59.99,
    category: "saree"
  }
  ,{
    id: 7,
    name: 'Saree Combo',
    image: 'https://images.unsplash.com/photo-1610189026205-27510cfc52f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    price: 359.99,
    category: 'Saree',
  },
  {
    id: 8,
    name: 'Tshirt',
    image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    price: 39.99,
    category: 'Tshirt',
  },
];

function OnlineStore() {
  const [cart, setCart] = useState([]);
  const [step, setStep] = useState(1);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter((p) => p.id !== product.id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleCheckout = () => {
    setStep(2);
  };

  const handlePayment = () => {
    setStep(3);
  };

  return (
    <div>
      {step === 1 && (
        <>
          <ProductList products={products} addToCart={addToCart} />
          <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} handleCheckout={handleCheckout} />
        </>
      )}
      {step === 2 && (
        <>
          <Checkout cart={cart} handlePayment={handlePayment} />
        </>
      )}
      {step === 3 && (
        <>
          <PaymentProvider />
        </>
      )}
    </div>
  );
}

export default OnlineStore;