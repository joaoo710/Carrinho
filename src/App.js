import 'normalize.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((prod) => prod.id !== product.id);
      return [product, ...newCart];
    });
  };

  return (
    <>
      <Header cart={cart} />
      <main>
        <Routes>
          <Route index element={<Home addToCart={addToCart} cart={cart} />} />
          <Route path='products' element={<Products />} />
          <Route path='cart' element={null} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
