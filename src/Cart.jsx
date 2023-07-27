// Cart.js

import React, { useContext } from 'react';
import { CartContextt } from './CartContextt';

const Cart = () => {
    const { cartItems } = useContext(CartContextt);

    if (cartItems.length === 0) {
        return <div>Your cart is empty.</div>;
    }
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4">Cart</h1>
            <ul>
                {cartItems.map((item) => (
                    <div><div key={item.id} className="border-b py-2">
                        <img src={item.image} className=' h-40 m-4 rounded-lg' />
                        <h1 className='text-xl font-bold mb-2'>{item.title}</h1>
                        <p className='font-bold'>${item.price}</p>

                    </div>
                    </div>
                ))}

            </ul>
            <p className="mt-4 text-lg font-bold">Total Amount:${totalAmount.toFixed(2)}</p>
            <button type='submit' className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded" onClick={() => alert("Checkout succesful")}>CheckOut</button>
        </div>
    );
};

export default Cart;
