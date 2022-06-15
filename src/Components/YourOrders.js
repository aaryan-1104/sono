import React from 'react';
import {useContext} from 'react'
import sonoContext from '../context/notes/sonoContext'
import Loader from './Loader';
import YourOrderItem from './YourOrderItem';

const YourOrders = () => {

    const context=useContext(sonoContext)
    const {yourOrderList, loading}=context;

  return(
        <div>
           <div className="container" style={{"marginTop":"125px"}}>
                {loading ?<Loader/>:<div>
                    
                    <h1>Your Orders</h1>
                    <div className="m-0 mt-5">
                        <h2>Showing all Orders</h2>
                        <div className='px-0'>
                            {yourOrderList.map((product)=>{
                                return(
                                        <div className="mb-3" key={product._id} >
                                            <YourOrderItem product={product} />
                                        </div>
                                    )
                                }
                                )    
                            }
                        </div>
                    </div>
                </div>}
            </div> 
        </div>);
};

export default YourOrders
