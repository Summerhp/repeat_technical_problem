import Navbar from './components/navbar.tsx'
import Footer from './components/footer.tsx'
import Products from './components/products.tsx'
import Carrusel from './components/carousel.tsx'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <br></br>
      <Products/>
      <br></br>
      <Carrusel/>
      <br></br>
      <Footer />
    </>
  )
}

export default App
