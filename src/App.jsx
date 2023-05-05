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
      </Routes>
      <Sidebar />
      <Footer />
    </Router>
  )
}

export default App
