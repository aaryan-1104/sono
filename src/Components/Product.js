import React from 'react'

const Product = (props) => {
  
    // eslint-disable-next-line
    const {id, title, image, price, category, rate, count, description }= props
    return (
            <div style={{"boxShadow":"-7px -7px 16px rgba(255,255,255,0.5), 7px 7px 16px #d1cdc77e"}}>
                <div className="card px-4 py-4 border-0 " key={id} style={{"backgroundColor":"rgb(0, 148, 115,0)", "width":"100%","boxShadow":"-7px -7px 16px rgb(0, 148, 115,0), 7px 7px 16px #d1cdc77e"}}>
                {/* #F5F9FF  */}
                    <img src={image} className="card-img-top" alt="..." style={{"height":"320px"}}/>
                    <div className="card-body">
                        <h5 className="mb-3 text-muted"  >{rate} | {count}</h5>
                        <h5 className="card-title text-decoration-none">{title.slice(0,64)}</h5>
                        <h5 className="card-title">Rs.{price}</h5>
                    </div>
                </div>       
        </div>
    )
}
export default Product
