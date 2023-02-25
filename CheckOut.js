import React, { useState } from 'react';

function CheckOut({ cart, handlePayment }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePayment();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='form-block'>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <label>Address</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
        <label>City</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
        <label>State</label>
        <input type="text" name="state" value={formData.state} onChange={handleChange} />
        <label>ZIP Code</label>
        <input type="text" name="zip" value={formData.zip} onChange={handleChange} />
        <label>Card Number</label>
        <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
        <label>Expiration Date</label>
        <input type="text" name="expDate" value={formData.expDate} onChange={handleChange} />
        <label>CVV</label>
        <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} />
        <button type="submit">Pay</button>
      </form>
    </div>
  );
}

export default CheckOut;
