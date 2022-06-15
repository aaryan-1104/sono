import './App.css';
import React from 'react';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ProductPage from './Components/ProductPage';
import ProductDetail from './Components/ProductDetail';
import Wishlist from './Components/Wishlist';
import CartList from './Components/CartList';
import SonoState from "./context/notes/SonoState";
import Login from "./Components/Login";
import SignUp from './Components/SignUp';
import Alert from './Components/Alert';
import {useState} from "react"
import Address from './Components/Address';
import AddressList from './Components/AddressList';
import UpdateAddress from './Components/UpdateAddress';
import Success from './Components/Success';
import YourOrders from './Components/YourOrders';
import FilteredProductPage from './Components/FilteredProductPage';
import PaymentAddressOption from './Components/PaymentAddressOption';
import SearchedProducts from './Components/SearchedProducts';

function App() {
  // document.body.style.backgroundColor="#EFEEEE"
  document.body.style.backgroundColor='rgb(0, 148, 115,0.1)'

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  setTimeout(() => {
    setAlert(null);
  }, 1000);

  return (
    <>
        <Router>
          <SonoState>
              <div className="App">
                <Navbar/>
                <Alert warn={alert} />  

                <Routes>
                  <Route exact path="/login" element={<Login showAlert={showAlert}/>}></Route>
                  <Route exact path="/signup" element={<SignUp showAlert={showAlert}/>}></Route>
                  <Route exact path ="/" element={localStorage.getItem("token")? <Home/>:<Login showAlert={showAlert}/>}></Route>
                  <Route exact path ="/shop/men" element={<ProductPage category="men"/>}></Route>
                  <Route exact path ="/shop/women" element={<ProductPage category="women"/>}></Route>
                  <Route exact path ="/shop/footwear" element={<ProductPage category="footwear"/>}></Route>
                  <Route exact path ="/shop/accessories" element={<ProductPage category="accessories"/>}></Route>
                  <Route exact path ="/shop/products/:productId" element={<ProductDetail/>}></Route>
                  <Route exact path ="/shop/wishlist" element={<Wishlist/>}></Route>
                  <Route exact path ="/shop/wishlist/:productId" element={<ProductDetail/>}></Route>
                  <Route exact path ="/shop/cart" element={<CartList/>}></Route>
                  <Route exact path ="/shop/profile/manageAddress" element={<AddressList/>}></Route>
                  <Route exact path ="/shop/profile/address" element={<Address/>}></Route>
                  <Route exact path ="/shop/profile/updateAddress/:addressId" element={<UpdateAddress/>}></Route>
                  <Route exact path ="/shop/payment/success" element={<Success/>}></Route>
                  <Route exact path ="/shop/yourOrders" element={<YourOrders/>}></Route>
                  <Route exact path ="/shop/yourOrders/:productId" element={<YourOrders/>}></Route>
                  <Route exact path ="/shop/products/filter" element={<FilteredProductPage/>}></Route>
                  <Route exact path ="/shop/payment/chooseAddress" element={<PaymentAddressOption/>}></Route>
                  <Route exact path ="/shop/products/search" element={<SearchedProducts/>}></Route>
                </Routes>

                <Footer/>
              </div>
          </SonoState>
        </Router>
    </>
  );
}

export default App;
