// CartContext.js

import React, { createContext, useState } from 'react';

const CartContextt = createContext();

const CartProviderr = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    return <CartContextt.Provider value={{ cartItems, setCartItems }}>{children}</CartContextt.Provider>;
};

export { CartContextt, CartProviderr };
