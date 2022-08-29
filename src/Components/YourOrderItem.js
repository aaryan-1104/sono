import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import sonoContext from '../context/notes/sonoContext'

const YourOrderItem = (props) => {

    const {_id,productId,brand,title,image,category,price,quantity,value,address,date}=props.product;

    const context=useContext(sonoContext)
    const {getProductDetail}=context;
    
    const handleDetail=()=>{
        getProductDetail(productId);
    }

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 7);
  return (
        <div>
            <div className="card my-3" key={_id}>
                <div className='row ms-3 mt-4'>
                    <div className='col-4'>
                        Order Placed : {date.split("T")[0]}
                    </div>
                    <div className='col-4'>
                        Shipped To : {address.split(", ")[0]}
                    </div>
                    <div className='col-4' style={{"float":"right"}}>
                        Order Id : {_id}
                    </div>                    
                </div>
                <div className='ms-4 mt-4'>
                    <div>
                        <h3>Arriving By : {tomorrow.getFullYear()+'-'+tomorrow.getMonth()+'-'+tomorrow.getDate()}</h3>
                    </div>
                </div>
                <div className="row g-0 ms-4 mt-4">
                    <div className="col-4">
                        <Link to={`/shop/wishlist/${_id}`} style={{"textDecoration":"none", "color":"black"}} onClick={handleDetail}>
                            <img src={image} className="img-fluid rounded-start" style={{"width": "50%"}} alt="..."/>
                        </Link>
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h4 className="card-title">{brand}</h4>
                            <h5 className="card-title">{title}</h5>
                            <h5 className="card-title">{category}</h5>
                            <h5 className="card-title">Quantity : {quantity}</h5>
                            <h5 className="card-title">Price : {price}</h5>
                            <h4 className="card-title">Sub Total : {value}</h4>
                            {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default YourOrderItem;
