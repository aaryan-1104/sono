import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import sonoContext from '../context/notes/sonoContext'

const CartProduct = (props) => {
    const {_id,productId,brand,title,image,category,price,quantity,value}=props.product;

    const context=useContext(sonoContext)
    const {getProductDetail,removeFromCart, updateQuantity}=context;

    const handleRemoveFromCart=()=>{
        removeFromCart(_id)
        console.log("Removed from cart")
    }

    const handleDetail=()=>{
        getProductDetail(productId);
    }

    const handleQuantity =(bool)=>{
        if(bool){
            updateQuantity(true, _id)
        }
        else{
            updateQuantity(false, _id)
        }
    }

    return (
            <div className="card my-3" key={_id}>
                <button className="btn border-none shadow-none" type="button" style={{"backgroundColor":"white","position":"relative","width":"5%","height":"5%","left":"95%","color":"darkslategrey",}} onClick={handleRemoveFromCart}><h4>x</h4></button>     
                <div className="row g-0">
                    <div className="col-md-4">
                        <Link to={`/shop/wishlist/${_id}`} style={{"textDecoration":"none", "color":"black"}} onClick={handleDetail}>
                            <img src={image} className="img-fluid rounded-start" style={{"width": "50%"}} alt="..."/>
                        </Link>
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{brand}</h4>
                            <h5 className="card-title">{title}</h5>
                            <h5 className="card-title">{category}</h5>
                            <h5 className="card-title">Quantity : <span className='btn' onClick={()=>{handleQuantity(false)}}>-</span>  {quantity}  <span className='btn' onClick={()=>{handleQuantity(true)}}>+</span></h5>
                            <h5 className="card-title">Price : {price}</h5>
                            <h4 className="card-title">Sub Total : {value}</h4>
                            {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CartProduct
