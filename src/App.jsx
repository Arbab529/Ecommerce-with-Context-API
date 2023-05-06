import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Pages
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
// Components
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='*' element={<h1 className='h-screen flex justify-center items-center'>Page not found</h1>} />
      </Routes>
      <Sidebar />
      <Footer />
    </Router>
  )
}

export default App
