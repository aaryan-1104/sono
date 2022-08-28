import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import sonoContext from "../context/notes/sonoContext";
import navbarpolygonscatterhaikei from "../resource/navbarpolygonscatterhaikei.svg";
import customstyle from "../../src/customstyle.module.css";
import LoadingBar from "react-top-loading-bar";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const context = useContext(sonoContext);
  const {
    loading,
    progress,
    setProgress,
    getWishlist,
    getCart,
    getAddress,
    getYourOrders,
    searchProducts,
  } = context;

  const handleWish = () => {
    getWishlist();
  };

  const handleCart = () => {
    getCart();
  };

  const handleGetAddress = () => {
    getAddress();
  };

  const handleGetOrder = () => {
    getYourOrders();
  };

  const handleSignout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const [searchString, setSearchString] = useState("");

  const onChange = (e) => {
    setSearchString(e.target.value);
    if (localStorage.getItem("searchString")) {
      localStorage.removeItem("searchString");
      localStorage.setItem("searchString", searchString);
    } else {
      localStorage.setItem("searchString", searchString);
    }
  };

  const handleSearchQuery = () => {
    searchProducts();
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow-lg py-2 fixed-top"
        style={{
          backgroundImage: `url(${navbarpolygonscatterhaikei})`,
          backgroundSize: "100%",
          boxShadow: "20px",
        }}
      >
        {/* #E7717D */}
        <div className="container-fluid">
          {!localStorage.getItem("token") ? (
            <Link className="navbar-brand" to="/login">
              <h3>SONO</h3>
            </Link>
          ) : (
            <Link className="navbar-brand" to="/">
              <h3>SONO</h3>
            </Link>
          )}

          {localStorage.getItem("token") && (
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          )}

          {localStorage.getItem("token") && (
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item  hover-underline-animation">
                  <Link
                    className={`${
                      customstyle.hoverUnderlineAnimation
                    } nav-link ${location.pathname === "/" ? "active" : ""}`}
                    aria-current="page"
                    to="/"
                  >
                    <h5>HOME</h5>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`${
                      customstyle.hoverUnderlineAnimation
                    } nav-link ${
                      location.pathname === "/shop/men" ? "active" : ""
                    }`}
                    to="/shop/men"
                  >
                    <h5>MEN</h5>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`${
                      customstyle.hoverUnderlineAnimation
                    } nav-link ${
                      location.pathname === "/shop/women" ? "active" : ""
                    }`}
                    to="/shop/women"
                  >
                    <h5>WOMEN</h5>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`${
                      customstyle.hoverUnderlineAnimation
                    } nav-link ${
                      location.pathname === "/shop/footwear" ? "active" : ""
                    }`}
                    to="/shop/footwear"
                  >
                    <h5>FOOTWEAR</h5>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`${
                      customstyle.hoverUnderlineAnimation
                    } nav-link ${
                      location.pathname === "/shop/accessories" ? "active" : ""
                    }`}
                    to="/shop/accessories"
                  >
                    <h5>ACCESSORIES</h5>
                  </Link>
                </li>
              </ul>
              {
                <div className="d-flex" id="searchnavc">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      searchProducts();
                    }}
                  >
                    <input
                      className="form-control me-2 shadow-none"
                      type="search"
                      value={searchString}
                      onChange={onChange}
                      placeholder="Search for products, brands"
                      aria-label="Search"
                    />
                  </form>
                  <Link
                    className={`nav-link p-0`}
                    to="/shop/products/search"
                    onClick={handleSearchQuery}
                  >
                    <button className="btn shadow-none">
                      <img
                        src="https://img.icons8.com/material-outlined/24/ffffff/search--v1.png"
                        alt="search"
                      />
                    </button>
                  </Link>
                  <div className="dropdown">
                    <a
                      className="btn btn-white dropdown border-none shadow-none"
                      href="/"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://img.icons8.com/small/24/ffffff/user-male-circle.png"
                        alt="Profile"
                      />
                    </a>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        <h4 className="ps-3">
                          Hello, {localStorage.getItem("username")}
                        </h4>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Edit Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/shop/yourOrders"
                          onClick={handleGetOrder}
                        >
                          Your Orders
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/shop/profile/manageAddress"
                          onClick={handleGetAddress}
                        >
                          Manage Address
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <button
                          className="btn btn-white border-none dropdown-item"
                          onClick={handleSignout}
                        >
                          Sign Out
                        </button>{" "}
                      </li>
                    </ul>
                  </div>
                  <Link
                    className={`nav-link ${
                      location === "/shop/wishlist" ? "active" : ""
                    }`}
                    to="/shop/wishlist"
                  >
                    <img
                      src="https://img.icons8.com/material-outlined/24/ffffff/like.png"
                      alt="WishList"
                      onClick={handleWish}
                    />
                  </Link>
                  <div className=" position-relative">
                    <Link
                      className={`nav-link ${
                        location === "/shop/cart" ? "active" : ""
                      }`}
                      to="/shop/cart"
                    >
                      <img
                        src="https://img.icons8.com/material-outlined/24/ffffff/shopaholic.png"
                        alt="Your Cart"
                        onClick={handleCart}
                      />
                      <span
                        className={`position-absolute top-5 start-95 translate-middle badge rounded-circle text-danger bg-light ${
                          localStorage.getItem("cartCount") > 0 ? " " : "d-none"
                        }`}
                      >
                        {localStorage.getItem("cartCount")}
                      </span>
                    </Link>
                  </div>
                </div>
              }
            </div>
          )}
        </div>
      </nav>
      {loading && (
        <LoadingBar
          color="#f11946"
          progress={progress}
          transitionTime={500}
          loaderSpeed={500}
          onLoaderFinished={()=>{setProgress(0)}}
        />
      )}
    </div>
  );
};

export default NavBar;
