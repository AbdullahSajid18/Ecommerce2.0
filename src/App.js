import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Shop from './pages/shop/Shop'
import ShopCategory from './pages/shopCategory/ShopCategory' 
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
import LoginSignup from './pages/loginSignup/LoginSignup'
import Footer from './components/footer/Footer';
import men_banner from './components/Assets/banner_men.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'

function App() {
  return (
    <div >
      <Router> 
      <Navbar />
      <Routes> 
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<ShopCategory banner={men_banner} category= 'men' />} />
        <Route path='/women' element={<ShopCategory banner ={women_banner} category= 'women' />} />
        <Route path='/kids' element={<ShopCategory banner= {kid_banner} category= 'kid' />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
