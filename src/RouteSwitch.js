import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='products' element={null} />
          <Route path='cart' element={null} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
