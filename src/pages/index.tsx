import {useEffect} from "react";
import { useSelector} from 'react-redux';
import {Routes, Route} from 'react-router-dom'
import { selectItem } from '../features/cart/cartSlice';
import Navbar from '../components/Navbar';
import Home from './Home';
import ProductDetails from './ProductDetails';
import Category from './Category';
import Cart from './Cart';
import Checkout from './Checkout';
import Notfound from './Notfound';
import ScrollToUp from "../components/ScrollToUp";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from "framer-motion";
function Pages() {
  const items = useSelector(selectItem);
  // as the user adds to thier cart we store it in local storage in case they refresh the app.
  useEffect(()=>{
      localStorage.setItem('cart',JSON.stringify(items));
  },[items])
  return (
    <>
  <Navbar/>  
    <AnimatePresence mode='wait'>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='products/:id' element={<ProductDetails/>}/>
          <Route path='products/category/:categoryname' element={<Category/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='checkout' element={<Checkout/>}/>
          <Route path='*' element={<Notfound/>}/>
      </Routes>
      </AnimatePresence>
      <ScrollToUp/>
      <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      </>
  )
}

export default Pages;