import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-left text-white" >
        {/* <!-- Grid container --> */}
        <div className="row p-5 p-5"style={{"width":"100%"}}>
          {/* <!-- Section: Social media --> */}
            <div className="col">
                <h5 className="mx-3">Keep in touch:</h5>
                <section className="mb-4">
                    <a className="btn btn-floating m-1 border-0" href="#!" role="button">
                    <i className="fab fa-facebook-f"><img src="https://img.icons8.com/material-sharp/36/ffffff/facebook-new.png" alt="facebook"/></i>
                    </a>

                    <a className="btn  btn-floating m-1 border-0" href="#!" role="button">
                    <i className="fab fa-twitter"><img src="https://img.icons8.com/color/36/4a90e2/twitter--v1.png" alt="twitter"/></i>
                    </a>

                    <a className="btn btn-floating m-1 border-0" href="#!" role="button">
                    <i className="fab fa-instagram"><img src="https://img.icons8.com/material-rounded/36/ffffff/instagram-new.png"alt="instagram"/></i>
                    </a>
                </section>
            </div>
            <div className="col">
                <Link  className=" text-decoration-none" to="/" ><h5 style={{"color":"white"}}>About Us</h5></Link>
                <Link  className=" text-decoration-none" to="/" ><h5 style={{"color":"white"}}>Terms of Use</h5></Link>
                <Link  className=" text-decoration-none" to="/" ><h5 style={{"color":"white"}}>T&C</h5></Link>
                <Link  className=" text-decoration-none" to="/" ><h5 style={{"color":"white"}}>FAQ</h5></Link>
            </div>
            <div className="col">
                <h5><img src="https://img.icons8.com/fluency-systems-filled/48/ffffff/verified-badge.png" alt=""/>  100% ORIGINAL products at myntra.com</h5>
                <h5><img src="https://img.icons8.com/dotty/48/ffffff/replay-30.png" alt=""/> Return within 15 days of receiving your order</h5>
                <h5><img src="https://img.icons8.com/windows/48/ffffff/delivery.png" alt=""/> Get free delivery for every order above Rs. 799</h5>
            </div>
        </div>

        {/* <!-- Copyright --> */}
        <div className="text-center p-4" style={{"backgroundColor": "rgba(0, 0, 0, 0.2)","textDecoration":"none"}}>
         <Link  className=" text-decoration-none" to="/" ><h5 style={{"color":"white"}}>Having issues ? Contact Us</h5></Link>
          <h5>© 2020 Copyright : Sono.com</h5>
          <h5>All rights Reserved</h5>
        </div>

      </footer>
    </div>
  );
};

export default Footer;
