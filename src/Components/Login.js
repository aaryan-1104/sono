import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import sonoContext from "../context/notes/sonoContext";

const Login = (props) => {
  // document.body.style.backgroundColor="#0f0f0f"
  // document.body.style.color="#ffffff"
  const context = useContext(sonoContext);
  const { setProgress, setLoading, setCartItemCount } = context;

  const history = useNavigate();
  const [newCred, setCred] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setCred({ ...newCred, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    setProgress(0);
    e.preventDefault();
    setProgress(30);

    const response = await fetch(
      `https://sono-backend.herokuapp.com/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: newCred.email,
          password: newCred.password,
        }),
      }
    );
    setProgress(50);
    const json = await response.json();
    setProgress(70);

    if (json.success) {
      localStorage.setItem("token", json.authToken);
      localStorage.setItem("username", json.username);
      setCartItemCount(json.cartCount);

      setCred({ email: "", password: "" });
      history("/");
      props.showAlert("Logged in successfully", "primary");
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#0f0f0f";
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
    setProgress(100);
    setProgress(0);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="container p-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group my-5">
          <h2 className="my-3">Login</h2>
          <label className="my-1" htmlFor="InputEmail">
            Email address
          </label>
          <input
            type="email"
            className="form-control my-1"
            id="InputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            value={newCred.email}
            onChange={onChange}
          />

          <label htmlFor="InputPassword1">Password</label>
          <input
            type="password"
            className="form-control my-2"
            id="InputPassword1"
            placeholder="Password"
            name="password"
            value={newCred.password}
            onChange={onChange}
          />
        </div>
        <div
          className=" d-grid gap-2 col-6 mx-auto  "
          style={{ borderRadius: "25%" }}
        >
          <button type="submit" className="btn btn-dark">
            Login
          </button>
          <button
            type="submit"
            className="btn btn-white shadow-none"
            onClick={() => {
              history("/signup");
            }}
          >
            Not registered ? SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
