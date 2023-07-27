import React, { useContext } from 'react'
import { useState } from 'react'
import { useCart } from './CartContext'
import { CartContextt } from './CartContextt'
const ShoppinCard = ({ values, addToCart }) => {
    const { setCartItems } = useContext(CartContextt)
    const [operator, setOperator] = useState(true)
    const { cart, setCart } = useCart();
    const [count, setCount] = useState(0)
    const reduceClick = () => {
        if (count > 0) {
            setCount(count - 1)
            setCart((prevCart) => prevCart - 1)
            addToCart(values)
            setCartItems((prevCartItems) => [...prevCartItems, values]);
        }
    }
    const handleClick = () => {
        setCount(count + 1)
        setOperator(false)
        setCart((prevCart) => prevCart + 1)
        addToCart(values)
        setCartItems((prevCartItems) => [...prevCartItems, values]);
    }
    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        if (!isNaN(newQuantity) && newQuantity >= 0) {
            setCart((prevCart) => prevCart + (newQuantity - count));
            setCount(newQuantity);
            addToCart(values)
            setCartItems((prevCartItems) => [...prevCartItems, values]);
        }
    };
    return (
        <div><div key={values.id} className='bg-white rounded-lg shadow-lg p-6'>
            <img src={values.image} className=' h-40 m-4 rounded-lg md:h-20' />
            <h1 className='text-xl font-bold mb-2'>{values.title}</h1>
            <p className='text-gray-600'>${values.price}</p>
            <p className='font-bold'>Rating {values.rating.rate}</p> <p> from {values.rating.count} customers</p>
            {operator ? (<button onClick={handleClick} className='mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-2 rounded-lg'>Add to Cart</button>
            ) : (<div className='flex items-center justify-center'><button className='bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded' onClick={reduceClick}>-</button>
                <input type='number' className='w-12 text-center mx-2 border border-gray-300 rounded' value={count} onChange={handleQuantityChange} />
                <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">+</button></div>)}
        </div></div>
    )
}

export default ShoppinCard