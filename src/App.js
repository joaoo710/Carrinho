import 'normalize.css';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

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
          <Route path='products' element={null} />
          <Route path='cart' element={null} />
        </Routes>
      </main>
    </>
  );
}

export default App;
