
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <>
    <Navbar/>
    <div className="pt-[104px]">
      <Routes>    
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={< Products/>}/>
        <Route path='/productDetail/:id' element={< ProductDetails/>}/>
        <Route path='/add' element={<AddProduct/>}/>
      </Routes>
      <Footer/>
    </div>

  
    </>
   

  );
}

export default App;
