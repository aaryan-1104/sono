import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router'
import Product from './Product'
import { Link } from 'react-router-dom'
import Loader from "./Loader";
import sonoContext from '../context/notes/sonoContext'

const SearchedProducts = (props) => {


    const context = useContext(sonoContext)

    const {searchedProducts, loading, getProductDetail, searchProducts}=context
    
    const location = useLocation()
        
    useEffect(() => {
        if(location.pathname==="/shop/products/search"){
            searchProducts();
        }
        // eslint-disable-next-line
    }, [location])
    
    return (
        <div style={{"marginTop":"120px","marginLeft":"8%", "marginRight":"8%","backgroundColor":"rgb(0, 148, 115,0)"}}>
            {loading ? <Loader/> :<div className="row" >
                {searchedProducts.map((product)=>{
                    return(
                        <div className="col-sm-3 mb-3" key={product._id} >
                            <Link to={`/shop/products/${product._id}`} style={{"textDecoration":"none", "color":"black"}} onClick={()=>{getProductDetail(product._id)}}>
                                <Product image={product.image} title={product.title} price={product.price} category={product.category} rate={product.rate} count={product.count} />
                            </Link>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}

export default SearchedProducts
