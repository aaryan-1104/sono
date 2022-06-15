import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import sonoContext from '../context/notes/sonoContext'

const UpdateAddress = () => {
    const context = useContext(sonoContext)
    const { updateAddress} = context;
    const navigate = useNavigate();
    const params= useParams()
    const addressId=params.addressId;
    
    const address=JSON.parse(localStorage.getItem("currentAddress"))

    const initialAddressState={
        "firstName":address.firstName,
        "lastName":address.lastName,
        "contactNumber":address.contactNumber,
        "addressLine1":address.addressLine1,
        "addressLine2":address.addressLine2,
        "pincode":address.pincode,
        "city":address.city,
        "district":address.district,
        "state":address.state,
        "country":address.country
    }
    const [newAddress, setNewAddress] = useState(initialAddressState)
    
    const onChange=(e)=>{
        setNewAddress({...newAddress, [e.target.name]:e.target.value})
    }
    const handleUpdateAddress=()=>{
        console.log("Add the new address")
        const {firstName,lastName,contactNumber,addressLine1,addressLine2,pincode,city,district,state,country}=newAddress
        updateAddress(addressId,firstName,lastName,contactNumber,addressLine1,addressLine2,pincode,city,district,state,country);

        navigate('/shop/profile/manageAddress');
    }

    return (
        <div className='container mb-5' style={{"marginTop":"75px"}}>
            <div style={{"margin": "auto","width": "60%"}}>
            <form className="row g-3 pt-3 pb-5">
                <h1>Update address</h1>
                <div className="col-md-6 py-2">
                    <label htmlFor="inputFirstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="inputCity" name="firstName" value={newAddress.firstName}
              placeholder="Enter your first name"
              onChange={onChange}/>
                </div>
                <div className="col-md-6 py-2">
                    <label htmlFor="inputLastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="inputCity" name="lastName" value={newAddress.lastName}
              placeholder="Enter your last name "
              onChange={onChange}/>
                </div>
                <div className="col-12 py-2">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="addressLine1" value={newAddress.addressLine1}
              onChange={onChange}/>
                </div>
                <div className="col-12 py-2">
                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" name="addressLine2" value={newAddress.addressLine2} onChange={onChange}/>
                </div>
                <div className="col-md-6 py-2">
                    <label htmlFor="inputContactNumber" minLength="10" maxLength="10" className="form-label" >Contact Number</label>
                    <input type="text" className="form-control" id="contactNumber"name="contactNumber" value={newAddress.contactNumber} placeholder="Enter your phone number" onChange={onChange}/>
                </div>
                <div className="col-md-6 py-2">
                    <label htmlFor="inputPincode" className="form-label">Pincode</label>
                    <input type="text" className="form-control" id="inputZip" name="pincode" value={newAddress.pincode}
              placeholder="Enter your pincode"
              onChange={onChange} />
                </div>
                <div className="col-md-6 py-2">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" name="city" value={newAddress.city}
              placeholder="City"
              onChange={onChange}/>
                </div>
                <div className="col-md-6 py-2">
                    <label htmlFor="inputDistrict" className="form-label">District</label>
                    <input type="text" className="form-control" id="inputDistrict" name="district" value={newAddress.district}
              placeholder="District"
              onChange={onChange}/>
                </div>
                <div className="col-md-6 py-2">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <input type="text" className="form-control" id="inputState" name="state" value={newAddress.state} placeholder="State" onChange={onChange}/>
                </div>
                <div className="col-md-6 py-2">
                    <label htmlFor="inputCountry" className="form-label" >Country</label>
                    <input type="text" className="form-control" id="inputCountry" name="country" value={newAddress.country} placeholder="Country" onChange={onChange}/>
                </div>
                <div className="col-12 py-2">
                    <button type="button" className="btn btn-dark border-none shadow-none" onClick={handleUpdateAddress}>Update address</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default UpdateAddress
