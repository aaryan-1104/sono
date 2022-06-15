import React from "react";
import SonoContext from "./sonoContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router";

const SonoState = (props) => {
  const initialProducts = [];
  const [products, setProducts] = useState(initialProducts);
  const [productDetail, setProductDetail] = useState(initialProducts);

  const initialWishlist = [];
  const [wishlist, setWishlist] = useState(initialWishlist);

  const initialCart = [];
  const [cart, setCart] = useState(initialCart);

  const initialCartValue=0;
  const [cartValue, setCartValue]= useState(initialCartValue)

  const initialAddressList=[];
  const [addressList, setAddressList]= useState(initialAddressList)

  const initialYourOrders=[];
  const [yourOrderList, setYourOrderList]= useState(initialYourOrders)

  const initialCartCount=0;
  const [cartCount, setCartCount]= useState(initialCartCount)

  const [stripeToken, setstripeToken] = useState(null);

  const [loading, setLoading]=useState(false)

  const initialFilterProduct=[];
  const [filteredProducts, setFilteredProducts]=useState(initialFilterProduct)

  const initialSearchedProducts=[];
  const [searchedProducts, setSearchedProducts] = useState(initialSearchedProducts)

  // const [paymentStatus, setPaymentStatus]=useState(false)

  const navigate=useNavigate();

  //Todo Get Count of items in Cart
  const setCartItemCount=(num)=>{
    localStorage.setItem("cartCount", num)
    setCartCount(num)
  }

  //todo set Products Filters 
  const setProductFilterCategory=(categ)=>{
    if(categ.category.length>0 && categ.brand!==" "){
      const newFilter = {category:categ.category, brand:categ.brand}
      if(localStorage.getItem('filterCategory')){
        localStorage.removeItem('filterCategory')
        localStorage.setItem('filterCategory', JSON.stringify(newFilter))
      }else{
        localStorage.setItem('filterCategory', JSON.stringify(newFilter))
      }
      
    }
    else if(categ.brand){
      const newFilter = {"brand":categ.brand}      
      
      if(localStorage.getItem('filterCategory')){
        localStorage.removeItem('filterCategory')
        localStorage.setItem('filterCategory', JSON.stringify(newFilter))
      }else{
        localStorage.setItem('filterCategory', JSON.stringify(newFilter))
      }

    }
    else{
      const newFilter = {category:categ.category}
      if(localStorage.getItem('filterCategory')){
        localStorage.removeItem('filterCategory')
        localStorage.setItem('filterCategory', JSON.stringify(newFilter))
      }else{
        localStorage.setItem('filterCategory', JSON.stringify(newFilter))
      }
    }
  }

  //todo get Filtered Products 
  const getFilteredProduct = async()=>{
    setLoading(true)
    const url = "http://localhost:5000/api/shop/getAllProducts/filter"
    
    //* Api Call
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(JSON.parse(localStorage.getItem('filterCategory')))
    });
    const json =await response.json();

    setFilteredProducts(json)
    setTimeout(()=>{setLoading(false)},400)
  }

  //todo get Products 
  const getProducts = async (categ) => {
    setLoading(true)
    const url = "http://localhost:5000/api/shop/getAllProducts"

    //* Api Call
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "category":categ
          // localStorage.getItem('token')
      }
    });
    const json =await response.json();
    setProducts(json)
    setTimeout(()=>{setLoading(false)},400)
    // setLoading(false)
  };

  //todo get Product details 
  const getProductDetail = async (id) => {
    setLoading(true)
    const url = "http://localhost:5000/api/shop/getProduct"

    //* Api Call
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "productId":id
          // localStorage.getItem('token')
      }
    });
    const json =await response.json();
    setProductDetail(json[0])

    const str=JSON.stringify(json[0])
    if(!localStorage.getItem("product")){
      localStorage.setItem("product",str)}
    else{
      localStorage.removeItem("product");
      localStorage.setItem("product",str)}
      
    setTimeout(()=>{setLoading(false)},400)
  };


  // TODO Add to Wishlist
  const addToWishlist = async (productId) => {
    // setLoading(true)
    const url = `http://localhost:5000/api/wishlist/addToWishlist`;

  //* Api Call
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
        "productId":productId,
      },
      // body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();

    //* Logic to add to Wishlist on client Side
    const newItem = {
      _id: json._id,
      user: json.user,
      productId:json.productId,
      brand:json.brand,
      title: json.title,
      image: json.image,
      price: json.price,
      description:json.description,
      count: json.count,
      rate: json.rate,
      date: json.date,
      __v: 0,
    };
    setWishlist(wishlist.concat(newItem));
    if(json==="already present")
      console.log(json)
    // setTimeout(()=>{setLoading(false)},400)
  };

  // TODO Get the Wishlist
  const getWishlist=async()=>{
    setLoading(true)
    const url='http://localhost:5000/api/wishlist/getWishlist'

    const response=await fetch(url,{
      method:"GET",
      headers:{
        "content-type": "application/json",
        "auth-token":localStorage.getItem('token')
      }
    })

    const json = await response.json();

    setWishlist(json)
    setTimeout(()=>{setLoading(false)},400)
  }

  //todo: Remove From Wishlist
  const removeFromWishlist = async(productWishId) => {
    //* Api Call
    const url = `http://localhost:5000/api/wishlist/removeFromWishlist`
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
        "productWishId":productWishId
      }
    });

    // eslint-disable-next-line 
    const json = await response.json();

    const newWishlist = wishlist.filter((product) => {
      return product._id !== productWishId;
    });
    setWishlist(newWishlist);
    // return true
  };

  //Todo Get the cart
  const getCart=async()=>{
    const url="http://localhost:5000/api/cart/getCart";
    setLoading(true)
    
    //*Api call
    const response= await fetch(url,{
      method:"GET",
      headers:{
        "content-type": "application/json",
        "auth-token": localStorage.getItem('token'),
      }
    })
    
    const json= await response.json();
    
    //* Primary Address added to local storage
    if(json.addressPrimary===false){
      localStorage.setItem("primaryAddress",false);
    }
    else{
      const primaryAddress=JSON.stringify(json.addressPrimary[0])

      if(!localStorage.getItem("primaryAddress")){
        localStorage.setItem("primaryAddress",primaryAddress);
      }
      else{
        localStorage.removeItem("primaryAddress");
        localStorage.setItem("primaryAddress",primaryAddress)
      }
    }
    //* Changing state of cart        
    setCart(json.cartList);
    setCartValue(json.totalCartValue)

    setTimeout(()=>{setLoading(false)},400)

  }

  //Todo Added to cart
  const addToCart=async(productId)=>{
    const url="http://localhost:5000/api/cart/addToCart";
    setLoading(true)
    
    //*Api call
    const response= await fetch(url,{
      method:"POST",
      headers:{
        "content-type": "application/json",
        "auth-token": localStorage.getItem('token'),
        "productId":productId
      }
    })
    
    const temp= await response.json();
    
    //* Logic to add to CartList on client Side
    if(temp==="already present")
    console.log(temp)
    else{
    const json=temp.cartItem;
    const newItem = {
      _id: json._id,
      user: json.user,
      productId:json.productId,
      brand:json.brand,
      title: json.title,
      image: json.image,
      price: json.price,
      description:json.description,
      count: json.count,
      rate: json.rate,
      quantity:json.quantity,
      value:json.alue,
      date: json.date,
      __v: 0,
    };

    setCart(cart.concat(newItem));
    setCartItemCount(temp.cartCount)

    setCartValue(temp.totalCartValue);
    }

    setTimeout(()=>{setLoading(false)},400)
  }

  //TODO: Update quantity of a Product in Cart
  const updateQuantity = async(bool,cartProductId)=>{

    const url = `http://localhost:5000/api/cart/updateCart`
    const response = await fetch(url, {
      method:"PUT",
      headers:{
        "content-type":"application/json",
        "auth-token":localStorage.getItem('token'),
        "productCartId":cartProductId,
        "updatedN":`${bool}`
      }
    });
    const json = await response.json();

    if(json.success){

      const newCart = JSON.parse(JSON.stringify(cart));

      for(let i=0;i<newCart.length;i++){
        if(newCart[i]._id===cartProductId){
          newCart[i].quantity=newCart[i].quantity + (bool?1:-1);
          newCart[i].value=json.subTotal;
        }
      }
      setCartValue(json.totalCartValue)
      setCart(newCart)
    }

  }

  //todo: Remove From Cart
  const removeFromCart = async(productCartId) => {
    //* Api Call
    const url = `http://localhost:5000/api/cart/removeFromCart`
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
        "productCartId":productCartId
      }
    });

    const json = await response.json();
  
    const newCartlist = cart.filter((product) => {
      return product._id !== productCartId;
    });
    setCart(newCartlist);
    setCartValue(json.totalCartValue);
    setCartItemCount(json.cartCount)
  };
  
  //todo: Add a new address
  const addAddress=async(firstName,lastName,contactNumber,addressLine1,addressLine2,pincode,city,district,state,country)=>{
    const url= "http://localhost:5000/api/address/addAddress";

    const address={
      "firstName":firstName,
      "lastName":lastName,
      "contactNumber":contactNumber,
      "addressLine1":addressLine1,
      "addressLine2":addressLine2,
      "pincode":pincode,
      "city":city,
      "district":district,
      "state":state,
      "country":country
    }

    const response=await fetch(url,{
      method:"POST",
      headers:{
        "content-type": "application/json",
        "auth-token":localStorage.getItem('token'),
      },
      body:JSON.stringify(address)
    })

    const json = await response.json();

    //* Address added to local storage
    const primaryAddress=JSON.stringify(json.addressPrimary[0])
    // const allAddress=JSON.stringify(json)
    
    if(!localStorage.getItem("primaryAddress")){
      localStorage.setItem("primaryAddress",primaryAddress);
    }
    else{
      localStorage.removeItem("primaryAddress");
      localStorage.setItem("primaryAddress",primaryAddress)
    }
    setAddressList(json.addressList)
  }  
  
  //todo: Update a address
  const updateAddress=async(addressId,firstName,lastName,contactNumber,addressLine1,addressLine2,pincode,city,district,state,country)=>{
    const url= "http://localhost:5000/api/address/updateAddress";

    const address={
      "firstName":firstName,
      "lastName":lastName,
      "contactNumber":contactNumber,
      "addressLine1":addressLine1,
      "addressLine2":addressLine2,
      "pincode":pincode,
      "city":city,
      "district":district,
      "state":state,
      "country":country
    }

    const response=await fetch(url,{
      method:"PUT",
      headers:{
        "content-type": "application/json",
        "auth-token":localStorage.getItem('token'),
        "addressId":addressId
      },
      body:JSON.stringify(address)
    })

    // eslint-disable-next-line 
    const json = await response.json();

    if(json.success){
      const newAddressList= JSON.parse(JSON.stringify(addressList))
      for(let index=0;index<newAddressList.length;index++){
        const address=addressList[index];
        if(address._id===addressId){
          newAddressList[index].firstName=firstName;
          newAddressList[index].lastName=lastName;
          newAddressList[index].contactNumber=contactNumber;
          newAddressList[index].addressLine1=addressLine1;
          newAddressList[index].addressLine2=addressLine2;
          newAddressList[index].pincode=pincode;
          newAddressList[index].city=city;
          newAddressList[index].district=district;
          newAddressList[index].state=state;
          newAddressList[index].country=country;
          break;
        }
      }
      
      setAddressList(newAddressList)
      
      localStorage.removeItem("currentAddress")
    }
  }
  
  //Todo Set the address as Primary Address and remove the older one if exists
  const setPrimaryAddress=async(addressId)=>{
    const url= "http://localhost:5000/api/address/setPrimary";
    setLoading(true);
    const response=await fetch(url,{
      method:"PUT",
      headers:{
        "content-type":"application/json",
        "auth-token":localStorage.getItem('token'),
        "addressId":addressId
      }
    })

    const json=await response.json();

    if(json.success){
      
      let newAddress=JSON.parse(JSON.stringify(addressList));
      for(let index=0;index<newAddress.length;index++){
        
        if(newAddress[index].isPrimary){
          newAddress[index].isPrimary=false;
        }
        else if(newAddress[index]._id===addressId){
          newAddress[index].isPrimary=true;
        }
        
      }
      setAddressList(newAddress)
      setLoading(false);
    }
  }

  //Todo Delete a Address
  const deleteAddress=async(addressId)=>{
    const url= "http://localhost:5000/api/address/deleteAddress";
    const response=await fetch(url,{
      method:"DELETE",
      headers:{
        "content-type": "application/json",
        "auth-token":localStorage.getItem('token'),
        "addressId":addressId
      }
    })

    const json=await response.json();
    if(json.success){

      const newAddresslist = addressList.filter((address) => {
        return address._id !== addressId;
      });

      setAddressList(newAddresslist);
    }else{
      console.log("Failed to delete the address");
    }
  }
  

  //Todo Get all the Addresses
  const getAddress=async()=>{
    const url= "http://localhost:5000/api/address/getAddress";
    const response=await fetch(url,{
      method:"GET",
      headers:{
        "content-type": "application/json",
        "auth-token":localStorage.getItem('token'),
      }
    })

    const json = await response.json();
    
    //* Address added to local storage
    if(json.success){
      const primaryAddress=JSON.stringify(json.addressPrimary[0])
      // const allAddress=JSON.stringify(json)
      
      if(!localStorage.getItem("primaryAddress")){
        localStorage.setItem("primaryAddress",primaryAddress);
      }
      else{
        localStorage.removeItem("primaryAddress");
        localStorage.setItem("primaryAddress",primaryAddress)
      }
      
      setAddressList(json.address)
    }
  }
  
  //Todo Add the Stripe Token  for Payment
  const setstripePaymentToken=(token)=>{
    setstripeToken(token);
  }

  //Todo Add items to "Your Order" section with order Id(Along with Payment)
  const makePaymentRequest= async()=>{
    const url = "http://localhost:5000/api/checkout/payment"
    setLoading(true);
    // setPaymentStatus(false);
    const data={
      "tokenId":stripeToken.id,
      "amount":cartValue,
      "auth-token":localStorage.getItem('token')
    }
    const response=await fetch(url,{
      method:"POST",
      headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(data)
        })
        
    const json=await response.json();

    if(json.status==="succeeded"){
      const { id, billing_details, receipt_url}=json
        const data={
          "paymentId":id,
          "address":`${billing_details.name}, ${billing_details.address.line1}, ${billing_details.address.line2}, ${billing_details.address.postal_code}, ${billing_details.address.city}, ${billing_details.address.country}`,
          "recieptUrl":receipt_url,
          "shippingAddress":localStorage.getItem('primaryAddress')
        }

        const url='http://localhost:5000/api/orders/addOrder';
        const response=await fetch(url,{
          method:'POST',
          headers:{
            "content-type":"application/json",
            "auth-token":localStorage.getItem('token')
          },
          body:JSON.stringify(data)
        })
        const json1 = await response.json();
        setYourOrderList(json1)
        // setPaymentStatus(true);
        setCart(initialCart);
        setCartItemCount(0);
        // if(paymentStatus)
        setLoading(false);
        navigate("/shop/payment/success")
      }
    };
    
    //Todo Get all items of "Your Order" section
    const getYourOrders=async()=>{
      const url= "http://localhost:5000/api/orders/getOrders";
    setLoading(true)
    const response=await fetch(url,{
      method:"GET",
      headers:{
        "content-type":"application/json",
        "auth-token":localStorage.getItem('token')
      }
    })
    
    const json=await response.json();
    setYourOrderList(json);
    setLoading(false)
    
  }
  
  
  //todo: Search Products
  const searchProducts = async(id) => {
    setLoading(true)
      //* Api Call
      const url = `http://localhost:5000/api/shop/searchProducts`
      const response = await fetch(url, {
          method: "GET",
          headers: {
              "content-type": "application/json",
              "searchString":
                localStorage.getItem('searchString')
            }
          });
        
      const json = await response.json();
    
      setSearchedProducts(json);
      setLoading(false)
      };
  
  return (
    <SonoContext.Provider
    value={{loading, products, getProducts, productDetail, getProductDetail, wishlist, addToWishlist, getWishlist, removeFromWishlist, cart, getCart, addToCart, removeFromCart, cartValue, addressList, getAddress, addAddress, updateAddress, setPrimaryAddress, deleteAddress, yourOrderList, getYourOrders, stripeToken, setstripePaymentToken, makePaymentRequest, cartCount, setCartItemCount, setProductFilterCategory, getFilteredProduct, filteredProducts, searchedProducts, searchProducts, updateQuantity}}
    >
      {props.children}
    </SonoContext.Provider>
  );
};

export default SonoState;