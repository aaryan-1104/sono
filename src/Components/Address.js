import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import sonoContext from '../context/notes/sonoContext'

const Address = () => {

    const navigate=useNavigate();
    const context=useContext(sonoContext)
    const {addAddress} = context;
    const val={"validationError1":false,
                "validationError2":false,
                "validationError3":false,
                "validationError4":false,
                "validationError5":false,
                "validationError6":false,
            }

    const [validate, setValidate] = useState(val);
    const initialAddressState={
        "firstName":"",
        "lastName":"",
        "contactNumber":"",
        "addressLine1":"",
        "addressLine2":"",
        "pincode":"",
        "city":"",
        "district":"",
        "state":"",
        "country":""
    }
    const [newAddress, setNewAddress] = useState(initialAddressState)
    
    const onChange=(e)=>{
        setNewAddress({...newAddress, [e.target.name]:e.target.value})
    }

    const handleValidate=(elname,errorname)=>{
        const input1=document.getElementById(elname);
        const valt=document.getElementById(errorname);

        if(input1.value.length<1){
            setValidate({...validate, [errorname]:false})
            valt.style.display="block"
        }
        else{
            setValidate({...validate, [errorname]:true})
            valt.style.display="none"
        }
    }

    const handleAddAddress=()=>{
        let valid=true;
        for(let key in validate){
            if(validate[key]===false){
                valid=false;
                // console.log(key)
                // const valt=document.getElementById(key)
                // if(valt)
                //     valt.style.display="block"
                //     setValidate({...validate, errorname:false})
            }
        }
       
        if(valid){
            const {firstName,lastName,contactNumber,addressLine1,addressLine2,pincode,city,district,state,country}=newAddress
            addAddress(firstName,lastName,contactNumber,addressLine1,addressLine2,pincode,city,district,state,country);
            setNewAddress(initialAddressState);
            navigate('/shop/profile/manageAddress')
            console.log("Added the new address")
        }

    }

    return (
        <div className='container mb-5' style={{"marginTop":"75px"}}>
            <div style={{"margin": "auto","width": "60%"}}>
            <form className="row g-3 pt-3 pb-5">
                <h1>Add new address</h1>
                <div className="col-md-6 py-2">
                    <label htmlFor="inputFirstName" className="form-label">First Name</label>
                    <input type="text" className="form-control focus" id="inputFirstName" name="firstName" value={newAddress.firstName} placeholder="Enter your first name" onChange={onChange} onBlur={()=>{handleValidate("inputFirstName","validationError1")}}/>
                    <span id="validationError1" className="text-danger" style={{"display":"none"}}>Please fill the detail correctly</span>
                </div>
                <div className="col-md-6 py-2">
                    <label htmlFor="inputLastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="inputLastName" name="lastName" value={newAddress.lastName} placeholder="Enter your last name " onChange={onChange} onBlur={()=>{handleValidate("inputLastName","validationError2")}}/>
                    <span id="validationError2" className="text-danger"style={{"display":"none"}}>Please fill the detail correctly</span>
                
                </div>
                <div className="col-12 py-2">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="addressLine1" value={newAddress.addressLine1} onChange={onChange} onBlur={()=>{handleValidate("inputAddress","validationError3")}}/>                
                    <span id="validationError3" className="text-danger"style={{"display":"none"}}>Please fill the detail correctly</span>
                </div>
                <div className="col-12 py-2">
                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" name="addressLine2" value={newAddress.addressLine2} onChange={onChange} onBlur={()=>{handleValidate("inputAddress2","validationError4")}}/>
                    <span id="validationError4" className="text-danger"style={{"display":"none"}}>Please fill the detail correctly</span>
                </div>
                <div className="col-md-6 py-2">
                    <label htmlFor="inputContactNumber" minLength="10" maxLength="10" className="form-label" >Contact Number</label>
                    <input type="text" className="form-control" id="contactNumber"name="contactNumber" value={newAddress.contactNumber} placeholder="Enter your phone number" onChange={onChange} onBlur={()=>{handleValidate("contactNumber","validationError5")}}/>
                    <span id="validationError5" className="text-danger"style={{"display":"none"}}>Please fill the detail correctly</span>
                </div>
                <div className="col-md-6 py-2">
                    <label htmlFor="inputPincode" className="form-label">Pincode</label>
                    <input type="text" className="form-control" id="inputZip" name="pincode" value={newAddress.pincode} placeholder="Enter your pincode" onChange={onChange} onBlur={()=>{handleValidate("inputZip","validationError6")}}/>
                    <span id="validationError6" className="text-danger"style={{"display":"none"}}>Please fill the detail correctly</span>
                </div>
                <div className="col-md-6 py-2">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" name="city" value={newAddress.city} placeholder="City" onChange={onChange}/>
                </div>
                <div className="col-md-6 py-2">
                    <label htmlFor="inputDistrict" className="form-label">District</label>
                    <input type="text" className="form-control" id="inputDistrict" name="district" value={newAddress.district} placeholder="District" onChange={onChange}/>
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
                    <button type="button" className="btn btn-dark border-none shadow-none" onClick={handleAddAddress}>Add address</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Address
