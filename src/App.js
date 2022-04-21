import 'normalize.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <>
      <Header cartCount={cartCount} />
      <Outlet setCartCount={setCartCount} />
    </>
  );
}

export default App;
