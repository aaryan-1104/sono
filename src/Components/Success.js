import React from 'react';
// import CartProduct from './CartProduct';
import {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import sonoContext from '../context/notes/sonoContext'
import Loader from './Loader'

const Success = () => {
    const context=useContext(sonoContext)
    // eslint-disable-next-line
    const {cart, loading}=context;
    const navigate=useNavigate();
    const handleContinueShopping=()=>{
        navigate("/")
    }
  return( 
        <div>
            <div className="container" style={{"marginTop":"125px"}}>
                {loading ?<Loader/>:<div>
                    
                    <h1>Thank you for shopping with us</h1>
                    <div className="m-0 mt-5">
                        <h2>Your has been confirmed</h2>
                        <div className='text-center my-5 d-grid col-md-6'>
                            <button className="btn shadow-none border-none" style={{"backgroundColor":"#E6E2DD"}} onClick={handleContinueShopping}>Continue Shopping</button>
                        </div>
                    </div>
                </div>}
            </div>
        </div>);
};

export default Success;
