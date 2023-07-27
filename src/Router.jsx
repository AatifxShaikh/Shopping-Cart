import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SHop from './SHop'
import Home from './Home'
import About from './About'
import Cart from './Cart'
const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/Shop",
            element: <SHop />
        },
        {
            path: "/About",
            element: <About />
        },
        {
            path: "/Cart",
            element: <Cart />
        }
    ])
    return (

        <RouterProvider router={router} />
    )
}

export default Router