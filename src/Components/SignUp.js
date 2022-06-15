import React, { useState } from "react";
import { useNavigate } from "react-router";

const SignUp = (props) => {
  // document.body.style.backgroundColor="#0f0f0f"
  // document.body.style.color="#ffffff"

    const history=useNavigate()

    const [cred, setCred] = useState({name:"", email:"", password:"", cpassword:""})

    const onChange=(e)=>{
        setCred({...cred, [e.target.name]:e.target.value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(cred.password!==cred.cpassword){
            props.showAlert("Please enter valid password","danger")
            setCred({password:"",cpassword:""})
            return
        }
        const response=await fetch(`http://localhost:5000/api/auth/createUser`,
        {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({name:cred.name, email:cred.email, password:cred.password})
        },
      )

        const json=await response.json();
        console.log(json)

        if(json.success){
            localStorage.setItem("token", json.authToken)
            history('/')
            props.showAlert("Account created successfully","primary")
            setCred({name:"", email:"", password:"",cpassword:""})
            document.body.style.backgroundColor="#ffffff"
            document.body.style.color="#0f0f0f"
        }
        else{
            props.showAlert("Invalid Credentials","danger")
        }
    }

  return (
    <div className="container p-5" >
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{marginTop:"8%"}}>
          <h2>Create Account</h2>
          <label className="my-2" htmlFor="InputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="name"
            placeholder="Enter your Name"
            name="name"
            onChange={onChange}
            value={cred.name}
          />
          <label className="my-2" htmlFor="InputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="InputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            value={cred.email}
            onChange={onChange}

          />
        
          <label className="my-2" htmlFor="InputPassword1 ">Password</label>
          <input
            type="password"
            className="form-control"
            id="InputPassword1"
            placeholder="Password"
            name="password"
            onChange={onChange}
            value={cred.password}
            />
          <label className="my-2" htmlFor="InputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="cInputPassword1"
            placeholder="Confirm Password"
            name="cpassword"
            onChange={onChange}
            value={cred.cpassword}
            />
        </div>
        <div className="d-grid gap-2 col-6 mx-auto ">
            <button type="submit" style={{textAlign:"center"}} className="btn btn-dark my-4" >
            SignUp
            </button>
            <button className="btn btn-white shadow-none" onClick={()=>{history('/login')}}>Already regitered ? Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
