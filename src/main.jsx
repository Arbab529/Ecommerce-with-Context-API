import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductsProvider from './contexts/ProductContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductsProvider>
)
