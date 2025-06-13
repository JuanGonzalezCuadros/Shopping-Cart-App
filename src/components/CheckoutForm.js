import React, { useState } from 'react';

const CheckoutForm = () => {
    const [formData, setFormData] = useState({name: '', address: '',});

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Order placed successfully!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
            </div>
            <div>
                <label>Address:</label>
                <input type="text" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })}/>
            </div>
            <button type="submit">Place Order</button>
        </form>
    );
};

export default CheckoutForm;
