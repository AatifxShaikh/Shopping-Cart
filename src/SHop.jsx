import React from 'react'
import Nav from './Nav'
import Cards from './Cards'
import { useState } from 'react'
import { useEffect } from 'react'
import Cart from './Cart'
import { Link, Route } from 'react-router-dom'
import { CartProvider } from './CartContext'
const SHop = () => {
    const [fake, setFake] = useState([]);
    useEffect(() => {
        const fakeStore = async () => {
            const response = await fetch("https://fakestoreapi.com/products")
            const jsondata = await response.json()
            // console.log(jsondata)
            setFake(jsondata)
        }
        fakeStore()
    }, [])

    const [cartItems, setCartItems] = useState([]);

    // Function to add an item to the cart
    const addToCart = (product) => {
        setCartItems((prevCartItems) => [...prevCartItems, product]);
    };

    return (
        <div>
            <CartProvider>
                <Nav cartItems={cartItems} />
                <Cards fake={fake} addToCart={addToCart} />

            </CartProvider>
        </div>
    )
}

export default SHop