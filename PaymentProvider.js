


import React from 'react';

function PaymentProvider() {
  const handlePayment = () => {
    alert('Payment successful!');
  };

  return (
    <div className='payment-block'>
      <h2>Payment Provider</h2>
      <p>Choose a payment method:</p>
      <button onClick={handlePayment}>Pay with Credit Card</button>
      <button onClick={handlePayment}>Pay with PayPal</button>
    </div>
  );
}

export default PaymentProvider;