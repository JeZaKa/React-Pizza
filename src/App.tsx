import Header from './components/Header';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import CartPage from './pages/CartPage';
import FullPizza from './pages/FullPizza';

function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/pizza/:id' element={<FullPizza/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
