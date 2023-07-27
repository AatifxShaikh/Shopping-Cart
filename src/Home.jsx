import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import image from '/Assets/home-background.jpg'
import './Home.css'
const Home = () => {
    return (
        <>
            <Nav />
            <div className='home text-white flex flex-col items-center text-center h-[50dvh] justify-evenly min-h-screen'>
                <p className='text-xl md:text-l'>
                    Welcome to Shopping Cart,
                    Shop anything you like
                    <br />
                    <button className=' bg-blue-400 m-5 rounded-lg px-4'>
                        <Link className='' to='Shop'>Shop</Link>
                    </button>

                </p>
            </div>

        </>

    )
}

export default Home