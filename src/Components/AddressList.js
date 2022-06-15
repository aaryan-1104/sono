import React from 'react'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import sonoContext from '../context/notes/sonoContext'

const AddressList = () => {
    const context=useContext(sonoContext)
    const {addressList, getAddress, deleteAddress, setPrimaryAddress} = context;

    const handleRemoveAddress=(addressId)=>{
        deleteAddress(addressId)
        console.log("Remove address clicked")
    }
    
    const handleEditAddress=(addressId)=>{
        const addressArray=addressList.filter((address)=>{return address._id===addressId})
        if(localStorage.getItem("currentAddress")){
            localStorage.removeItem("currentAddress")
            localStorage.setItem("currentAddress", JSON.stringify(addressArray[0]))
        }else{
            localStorage.setItem("currentAddress", JSON.stringify(addressArray[0]))
        }
    }

    const handleSetPrimaryAddress=(addresssId)=>{
        setPrimaryAddress(addresssId);
        console.log("Set the address as primary address");
    }
    
    useEffect(() => {
        getAddress()
    // eslint-disable-next-line
}, [])

    return (
        <div className='container mb-5' style={{"marginTop":"75px"}}>
        <div style={{"margin": "auto","width": "80%"}}>

            <div className='row mb-4 pt-5'>
                <div className='col-md-6'>
                    <h1>Your Addresses</h1>
                </div>
                <div className='col-md-6'>
                    <Link className="btn btn-outline-white shadow-none border-none" to="/shop/profile/address"  style={{"width": "100%", "backgroundColor":"rgb(0, 148, 115,0.3)"}}><h3>+ Add new Address</h3></Link>
                </div>
            </div>
            {addressList.map((address)=>{
                console.log("address list")
                return(
                    <div className='bg-white col-md-12 p-4 mb-3' key={address._id}>
                        <h3>{address.firstName} {address.lastName}, {address.pincode}</h3>
                        <h4>{address.addressLine1}, {address.addressLine2} {address.city} {address.district}</h4>
                        <div className='row'>
                            <div className={`col-md-${address.isPrimary?6:4} text-center`}><button className="btn btn-white border-none shadow-none" onClick={()=>{handleEditAddress(address._id)}}><Link className="text-dark nav-link" to={`/shop/profile/updateAddress/${address._id}`}>Edit</Link></button></div>
                            <div className={`col-md-${address.isPrimary?6:4} text-center`}><button className="btn btn-white border-none shadow-none" onClick={()=>{handleRemoveAddress(address._id)}}>Remove</button></div>
                            <div className={`col-md-4  ${address.isPrimary?"d-none":" "} text-center`}><button className="btn btn-white border-none shadow-none" onClick={()=>{handleSetPrimaryAddress(address._id)}}>Set as Primary Address</button></div>
                        </div>
                    </div>
                )
            })
        }
        </div>
        </div>
    )
}

export default AddressList
