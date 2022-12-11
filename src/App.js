import 'normalize.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import Product from './pages/Product';
import Products from './pages/Products';
import Hortifruti from './pages/Hortifruti';
import Laticinios from './pages/Laticinios';
import Acougue from './pages/Acougue'
import Higiene from './pages/Higiene';
import Bebidas from './pages/Bebidas';
import Limpeza from './pages/Limpeza';
import Padaria from './pages/Padaria';
import Congelados from './pages/Congelados';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      if (prevCart.some((item) => item.id === product.id)) {
        return prevCart.map((item) => {
          if (item.id === product.id) {
            const newItem = { ...item };
            newItem.quantity++;
            return newItem;
          }
          return item;
        });
      } else {
        product.quantity = 1;
        return [product, ...prevCart];
      }
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const newCart = prevCart.map((item) => {
        if (item.id === product.id) {
          const newItem = { ...item };
          newItem.quantity--;
          return newItem;
        }
        return item;
      });
      return newCart.filter((item) => item.quantity > 0);
    });
  };

  const homePage = <Home addToCart={addToCart} cart={cart} />;
  
  const productsHortifruti = (
    <Hortifruti
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      cart={cart}
    />
  );

  const productsLaticinios = (
    <Laticinios
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      cart={cart}
    />
  );

  const productsAcougue = (
    <Acougue
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      cart={cart}
    />
  );

  const productsHigiene = (
    <Higiene
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      cart={cart}
    />
  );
  const productsBebidas = (
    <Bebidas
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      cart={cart}
    />
  );
  const productsLimpeza = (
    <Limpeza
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      cart={cart}
    />
  );
  const productsPadaria = (
    <Padaria
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      cart={cart}
    />
  );
  const productsCongelados = (
    <Congelados
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      cart={cart}
    />
  );

  const productsPage = (
    <Products
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      cart={cart}
    />
  );
  const productPage = (
    <Product
      cart={cart}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
    />
  );
  const cartPage = (
    <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
  );

  return (
    <>
      <Header cart={cart} />
      <main>
        <Routes>
          <Route index element={homePage} />
          <Route path='products' element={productsPage} />
          <Route path='products/:productId' element={productPage} />
          <Route path='cart' element={cartPage} />
          <Route path='*' element={<Page404 />} />
          
          <Route path='hortifruti' element={productsHortifruti} />
          <Route path='hortifruti/:productId' element={productPage} />
          
          <Route path='laticinios' element={productsLaticinios} />
          <Route path='laticinios/:productId' element={productPage} />
          
          <Route path='acougue' element={productsAcougue} />
          <Route path='acougue/:productId' element={productPage} />

          <Route path='higiene' element={productsHigiene} />
          <Route path='higiene/:productId' element={productPage} />

          <Route path='bebidas' element={productsBebidas} />
          <Route path='bebidas/:productId' element={productPage} />

          <Route path='limpeza' element={productsLimpeza} />
          <Route path='limpeza/:productId' element={productPage} />

          <Route path='padaria' element={productsPadaria} />
          <Route path= 'padaria/:productId' element={productPage} />

          <Route path='congelados' element={productsCongelados} />
          <Route path='congelados/:productId' element={productPage} />

        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;