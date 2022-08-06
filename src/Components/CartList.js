import React from 'react'
import {useEffect, useContext } from 'react'
import sonoContext from '../context/notes/sonoContext'
import CartProduct from './CartProduct'
import Loader from './Loader'
import { Link, useLocation } from "react-router-dom";

import StripeCheckout from 'react-stripe-checkout';

const CartList = () => {
    const context=useContext(sonoContext)
    const {loading, cart, getCart, cartValue, setstripePaymentToken, makePaymentRequest}=context;
    const address=localStorage.getItem("primaryAddress")? JSON.parse(localStorage.getItem("primaryAddress")):{};
    const location=useLocation()

    useEffect(() => {
        getCart()
        // eslint-disable-next-line
    }, [location])
    
    const onToken=(token)=>{
        setstripePaymentToken(token);
        setTimeout(()=>{
            JSON.parse(localStorage.getItem('stripeToken')) && makePaymentRequest();
        },4000)
    }
    
    const onOpened=()=>{
        console.log("opened payment gateway");
    }
    const onClosed=()=>{
        console.log("closed payment gateway");
    }

    return (
        <div className="container" style={{"marginTop":"125px"}}>
            {loading ?<Loader/>:<div>
                
                <h1>Your Shopping Cart</h1>
                {cart.length>0?
                <div className='row'>
                    <div className='col-md-8 px-0 me-5'>
                        {/* //*Address section */}
                        {localStorage.getItem("primaryAddress")==='false'?
                        <div className='text-end'>
                            <Link className="btn btn-outline-dark shadow-none border-none" to="/shop/payment/chooseAddress"><h3>Add a Primary Address</h3></Link>
                        </div>:
                        <div className="bg-white p-4 row m-0">
                            <div className='col-sm-9'>
                                <h3>Deliver to : {address.firstName} {address.lastName}, {address.pincode}</h3>
                                <h4>{address.addressLine1}, {address.addressLine2} {address.city} {address.district}</h4>
                            </div>
                            <div className='col-sm-2 text-center align-middle'>
                                    <Link className="btn btn-outline-white shadow-none border-none" to="/shop/payment/chooseAddress" style={{backgroundColor:`rgb(0, 148, 115,0.3)`}}><h3>Change</h3></Link>
                            </div>
                        </div>
                        }

                        {/* //*Cart Item List */}
                        <div className="m-0">
                                <div className='px-0'>
                                    {cart.map((product)=>{
                                        return(
                                                <div className="mb-3" key={product._id} >
                                                    <CartProduct product={product} />
                                                </div>
                                            )
                                        }
                                        )    
                                    }
                                </div>
                        </div>
                    </div>
                    {/* //*Grand Total of cart item*/}
                    {(cartValue!==0)&&
                    <div className="col-md-3 bg-white p-4 mb-3" style={{"maxHeight":"450px"}}>
                        <h3 className='mb-4'>PRICE DETAILS</h3>
                        <div>
                            <span className='fs-5'>Total MRP</span> <span  className='fs-5' style={{"float":"right"}}>{cartValue}</span>
                        </div>
                        <div>
                            <span className='fs-5'>Discount on MRP</span> <span  className='fs-5' style={{"float":"right"}}>0</span>
                        </div>
                        
                        <div>
                            <span className='fs-5'>Convenience Fee</span> <span  className='fs-5' style={{"float":"right"}}>0</span>
                        </div>
                        <div>
                            <span className='fs-5'>Total Amount</span> <span  className='fs-5' style={{"float":"right"}}>{cartValue}</span>
                        </div>
                        <div>
                            <StripeCheckout
                                name="Sono Fashion"
                                // image="https://stripe.com/img/documentation/checkout/marketplace.png"
                                ComponentClass="div"
                                amount={cartValue*100}
                                shippingAddress
                                billingAddress
                                currency="INR"
                                stripeKey="pk_test_51JyuqHSFiHGN0dpnq16IJutUBCBt2ronLwP69yD6eAezw4HFiiazAqnijwG0OJdn7XsJd9cb6g4x7mLuDcq1E9fl00r05DC2Xp"
                                token={onToken}
                                opened={onOpened}
                                closed={onClosed}
                            >
                                {/* #E6E2DD */}
                                <div className='text-center mt-5 d-grid'>
                                    <button className="btn shadow-none border-none" style={{"backgroundColor":"rgb(0, 148, 115,0.3)"}}>Place your order</button>
                                </div>
                            </StripeCheckout>
                        </div>
                    </div>
                    }
                </div>: 
                <div className='m-0 text-center my-5'>
                    <h2 style={{color:"darkslategrey"}}>Your cart is empty</h2>
                    <h3 style={{color:"darkslategrey"}}>Add some products to preceed ahead</h3>
                    <Link className={`nav-link ${location==="/shop/wishlist"?"active":""}`} to="/shop/wishlist" style={{color:'#009473'}}>Buy some products from your Wishlist</Link>
                </div>
                }
            </div>
            }
        </div>
    )
}

export default CartList
