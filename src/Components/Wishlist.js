import React from 'react'
import {useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import sonoContext from '../context/notes/sonoContext'
import Loader from './Loader'
import WishlistProduct from './WishlistProduct'

const Wishlist = () => {
    const context=useContext(sonoContext)
    const {loading, wishlist, getWishlist}=context;
    const location=useLocation()

    useEffect(() => {
        getWishlist()
    // eslint-disable-next-line
}, [location])
    
    return (
        <div>
            <div style={{"marginTop":"120px","marginLeft":"8%", "marginRight":"8%","backgroundColor":`rgb(0, 148, 115, 0)`}}>
            <h1>Your Wishlist</h1>

            {loading ? <Loader/> :
            <div>{ wishlist.length>0?
            <div className="row" >
                {wishlist.map((product)=>{
                        return(
                            <div className="col-sm-3 mb-3" key={product._id} >
                                    <WishlistProduct id={product._id} productId={product.productId} image={product.image} title={product.title} price={product.price} category={product.category} rate={product.rate} count={product.count} />
                            </div>
                        )
                    // }
                })}
            </div>:
            <div className='m-0 text-center my-5'>
                <h2 style={{color:"darkslategrey"}}>Your Wishlist is empty</h2>
                <h3 style={{color:"darkslategrey"}}>Add some products to wishlist to see here</h3>
                <Link className={`nav-link ${location==="/shop/wishlist"?"active":""}`} to="/" style={{color:'#009473'}}>Continue Exploring</Link>
            </div>
            }
            </div>
            }
        </div>
        </div>
    )
}

export default Wishlist
