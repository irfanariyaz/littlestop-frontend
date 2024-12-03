
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import AddProduct from './pages/AddProduct';
import { DataProvider } from './pages/context/DataContext';
import SearchProducts from './pages/SearchProducts';
import ProductTable from './pages/admin/adminProducts';
import Categories from './pages/Categories';
import Contact from './pages/Contact';
import Login from './pages/Login';
import { LoginProvider } from './pages/context/LoginContext';
import {Switch} from 'react-router-dom';

function App() {
  return (
    <DataProvider>
      <LoginProvider>
      <>
      
      <Navbar/>
      <div className="pt-[104px]">
       
        <Routes> 
        <Switch>   
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={< Products/>}/>
          <Route path='/productDetail/:id' element={< ProductDetails/>}/>
          <Route path='/products/add/' element={<AddProduct/>}/>
          <Route path='/search/products' element={< SearchProducts/>}/>
          <Route path='/admin/products' element={< ProductTable />}/>
          <Route path="/products/add/:id" element={<AddProduct />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<Login />} />
          </Switch>
        </Routes>
        <Footer/>
      </div> 
      </>
      </LoginProvider>
    </DataProvider>
   

  );
}

export default App;
