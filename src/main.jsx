import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductsProvider from './contexts/ProductContext.jsx'
import SidebarProvider from './contexts/SidebarContext.jsx'
import CartProvider from './contexts/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <CartProvider>
      <ProductsProvider>
        {/* <React.StrictMode> */}
        <App />
        {/* </React.StrictMode> */}
      </ProductsProvider>
    </CartProvider>
  </SidebarProvider>
)
