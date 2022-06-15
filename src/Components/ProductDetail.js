import React from 'react';
// import { useLocation } from 'react-router';
import { useContext } from 'react';
import Loader from "./Loader";
import sonoContext from '../context/notes/sonoContext'


const ProductDetail = () => {
    const {loading, addToWishlist, addToCart}=useContext(sonoContext)
    
    // const { productId }=useParams()

    const handleWishlist=()=>{
        const id = JSON.parse(localStorage.getItem("product"))._id
        addToWishlist(id);
        console.log("Add To WishList")
    }


    const handleCart=()=>{
        const id = JSON.parse(localStorage.getItem("product"))._id
        addToCart(id);
        console.log("Add To Cart")
    }

    return (

        <div className="card mb-3 border-0 py-4 px-5" style={{"marginTop":"60px","width":"100%"}} key={JSON.parse(localStorage.getItem("product"))._id}>
            {loading ? <Loader/> : <div className="row g-0">
                <div className="col-md-6">
                    <img className="img-fluid rounded-start" src={JSON.parse(localStorage.getItem("product")).image} alt="" />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h1 className="card-title">{JSON.parse(localStorage.getItem("product")).brand}</h1>
                        <h1 className="card-title">{JSON.parse(localStorage.getItem("product")).title}</h1>
                        <h3 className="card-text text-muted mb-3">{JSON.parse(localStorage.getItem("product")).category[0]}</h3>
                        {/* <h3 className="card-text text-muted mb-3">{productDetail.rating.rate} | {productDetail.rating.count}</h3> */}
                        <hr/>
                        <h1 className="card-text text-muted mb-3">Rs.{JSON.parse(localStorage.getItem("product")).price}</h1>
                        <div className="d-grid gap-2 mt-4 mb-4">
                            {/* papayawhip */}
                            <button className="btn border-none shadow-none" type="button" style={{"backgroundColor":"rgb(0, 148, 115,0.1)","color":"darkslategrey"}} onClick={handleWishlist}><h4>Add to WishList</h4>{` `}<img src="https://img.icons8.com/material-outlined/24/000000/like--v1.png" alt="WishList"/></button>
                            <button className="btn border-none shadow-none" type="button" style={{"backgroundColor":"rgb(0, 148, 115,0.1)","color":"darkslategrey"}} onClick={handleCart}><h4>Add to Cart</h4>{` `}<img src="https://img.icons8.com/material-outlined/24/000000/shopaholic.png" alt="Your Cart"/></button>
                        </div>
                        <h5 className="card-text text-muted">100% Original Products</h5>
                        <h5 className="card-text text-muted">Pay on delivery might be available</h5>
                        <h5 className="card-text text-muted">Easy 15 days returns and exchanges</h5>
                        <h2 className="mt-4">About this item</h2>
                        {/* {JSON.parse(localStorage.getItem("product")).description} */}
                        {JSON.parse(localStorage.getItem("product")).description.split('. ').map((line)=>{return <h5 className="card-text">{line}</h5>})}
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default ProductDetail
