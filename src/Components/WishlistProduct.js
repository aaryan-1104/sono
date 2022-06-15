import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import sonoContext from '../context/notes/sonoContext'


const WishlistProduct = (props) => {
    const context=useContext(sonoContext)
    const {addToCart, getProductDetail,removeFromWishlist}=context;

    const handleRemoveFromWishlist=()=>{
        removeFromWishlist(props.id)
    }

    const handleDetail=()=>{
        getProductDetail(props.productId);
    }

    // eslint-disable-next-line
    const {id,title, image, price, category, rate, count, description }= props
    
    const handleCart=()=>{
        addToCart(props.productId);
        removeFromWishlist(props.id)
    }
    
    return (
            <div style={{"boxShadow":"-7px -7px 16px rgba(255,255,255,0.5), 7px 7px 16px #d1cdc77e"}}>
                    <div className="card px-4 py-4 border-0 " key={id} style={{"backgroundColor":"rgba(0, 148, 115,0)", "width":"100%","boxShadow":"-7px -7px 16px rgb(0, 148, 115,0), 7px 7px 20px #d1cdc77e"}}><span className={`btn position-absolute top-2 start-3 translate-middle badge rounded-circle text-dark`} style={{"backgroundColor":"rgba(0, 148, 115,0.2)"}} onClick={handleRemoveFromWishlist}>X</span>
                    <Link to={`/shop/wishlist/${id}`} style={{"textDecoration":"none", "color":"black"}} onClick={handleDetail}>
                        <img src={image} className="card-img-top" alt="..." style={{"height":"320px"}}/>
                    </Link>
                    
                        <div className="card-body">
                            <h5 className="mb-3 text-muted"  >{rate} | {count}</h5>
                            <h5 className="card-title text-decoration-none">{title.slice(0,64)}</h5>
                            <h5 className="card-title">Rs.{price}</h5>
                        </div>
                    </div>  
                     {/*{` `}<img src="https://img.icons8.com/material-outlined/24/000000/like--v1.png" alt="WishList"/> */}
                    {/* papayawhip  */}
                <button className="btn border-none shadow-none pt-2" type="button" style={{"backgroundColor":"rgba(0, 148, 115,0.3)","color":"darkslategrey","width":"100%"}} onClick={()=>{handleCart()}}><h4>Move to Cart</h4></button>     
        </div>
    )
}
export default WishlistProduct
