import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Router from './Router.jsx'
import { CartProvider } from './CartContext.jsx'
import { CartProviderr } from './CartContextt.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProviderr>
      <CartProvider>
        <App />
        <Router />
      </CartProvider>
    </CartProviderr>
  </React.StrictMode>,
)
