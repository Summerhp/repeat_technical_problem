import Navbar from './components/navbar.tsx'
import Footer from './components/footer.tsx'
import Products from './components/products.tsx'
import Carrusel from './components/carousel.tsx'
import ProductDetail from './components/productDetail.tsx'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<><br></br><Products/><br></br> <br></br><Carrusel/></>} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
