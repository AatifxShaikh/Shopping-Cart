import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import shop from '/Assets/shopping-cart.png'
import { useCart } from './CartContext'

const Nav = ({ cartItems }) => {
    const { cart } = useCart()



    return (
        <div className=' bg-black py-4' >
            <nav className=' flex justify-between items-center text-white text-lg'>
                <h1>Shopping Cart</h1>
                <div className='flex mr-36 md:flex'>

                    <Link className='pr-3' to="/">Home</Link>
                    <Link className='pr-3' to='/SHOP'>Shop</Link>

                    <Link to='/About'>About</Link>
                    <Link to={{ pathname: '/cart', state: { cartItems } }} >
                        <div className='flex justify-between'>
                            <img className='h-6 px-4' src={shop} />
                            <p>{cart}</p>
                        </div>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Nav