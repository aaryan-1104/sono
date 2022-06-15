import React from "react";
import { Link , useLocation} from 'react-router-dom'

const Banner = () => {

  const location=useLocation()

  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators mb-1">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" style={{"maxHeight":"750px"}}>
          <Link className={`nav-link ${location.pathname==="/shop/men"?"active":""} p-0`} to="/shop/men">
            <img
              src="https://sonobucket.s3.amazonaws.com/Caraousal/C2Menbusiness-poses-for-days.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption card-img-overlay d-flex align-items-center justify-content-end">
              <h1 style={{fontFamily:"'Old Standard TT', serif","fontSize":"9vw", "fontStyle":"bold"}}>30-50% OFF</h1>
              {/* <h1>First slide label</h1> */}
              {/* <h1>First slide label</h1> */}
            </div>
            </Link>
          </div>
          <div className="carousel-item" style={{"maxHeight":"750px"}}>
            <Link className={`nav-link ${location.pathname==="/shop/men"?"active":""} p-0`} to="/shop/men">

            <img
              src="https://sonobucket.s3.amazonaws.com/Caraousal/C1Menwallpaperflare.jpg7b62b9.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption card-img-overlay d-flex align-items-center justify-content-end">
              <h1 style={{fontFamily:"'Old Standard TT', serif", "fontSize":"9vw", "fontStyle":"bold"}}>30-50% OFF</h1>
              {/* <h1>First slide label</h1> */}
              {/* <h1>First slide label</h1> */}
            </div>

            </Link>
          </div>
          <div className="carousel-item" style={{"maxHeight":"750px"}}>
          <Link className={`nav-link ${location.pathname==="/shop/accessories"?"active":""} p-0`} to="/shop/accessories">
          <img
              src="https://sonobucket.s3.amazonaws.com/Caraousal/3UCWatch_a-laptop-with-potted-plants-and-wooden-tray.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption card-img-overlay d-flex align-items-center justify-content-end">
              <h1 style={{fontFamily:"'Old Standard TT', serif", "fontSize":"9vw", "fontStyle":"bold"}}>30-50% OFF</h1>
              {/* <h1>First slide label</h1> */}
              {/* <h1>First slide label</h1> */}
            </div>
            </Link>
          </div>
          <div className="carousel-item" style={{"maxHeight":"750px"}}>
          <Link className={`nav-link ${location.pathname==="/shop/footwear"?"active":""} p-0`} to="/shop/footwear">
          <img
              src="https://sonobucket.s3.amazonaws.com/Caraousal/C4Womenpacking-sunglasses-and-cosmetics-for-a-holiday.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption card-img-overlay d-flex align-items-center justify-content-center">
              <h1 style={{fontFamily:"'Old Standard TT', serif", "fontSize":"9vw", "fontStyle":"bold"}}>30-50% OFF</h1>
              {/* <h1>First slide label</h1> */}
              {/* <h1>First slide label</h1> */}
            </div>
            </Link>
          </div>
          <div className="carousel-item" style={{"maxHeight":"750px"}}>
          <Link className={`nav-link ${location.pathname==="/shop/women"?"active":""} p-0`} to="/shop/women">
          <img
              src="https://sonobucket.s3.amazonaws.com/Caraousal/C5woman-shopping-for-clothes.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption card-img-overlay d-flex align-items-center justify-content-start">
              <h1 style={{fontFamily:"'Old Standard TT', serif", "fontSize":"9vw", "fontStyle":"bold"}}>30-50% OFF</h1>
              {/* <h1>First slide label</h1> */}
              {/* <h1>First slide label</h1> */}
            </div>
            </Link>
          </div>
          <div className="carousel-item" style={{"maxHeight":"750px"}}>
          <Link className={`nav-link ${location.pathname==="/shop/women"?"active":""} p-0`} to="/shop/women">
          <img
              src="https://sonobucket.s3.amazonaws.com/Caraousal/CU6Womanyoung-woman-looking-into-the-trees.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="pt-5 m-2 carousel-caption card-img-overlay d-flex align-items-start justify-content-center">
              <h1 style={{fontFamily:"'Old Standard TT', serif", "fontSize":"9vw", "fontStyle":"bold"}}>30-50% OFF</h1>
              {/* <h1>First slide label</h1> */}
              {/* <h1>First slide label</h1> */}
            </div>
          </Link>
          </div>
          <div className="carousel-item" style={{"maxHeight":"750px"}}>
          <Link className={`nav-link ${location.pathname==="/shop/accessories"?"active":""} p-0`} to="/shop/accessories">
          <img
              src="https://sonobucket.s3.amazonaws.com/Caraousal/CU7womenbright-red-purse-with-gold.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption card-img-overlay d-flex align-items-end justify-content-center">
              <h1 style={{fontFamily:"'Old Standard TT', serif", "fontSize":"9vw", "fontStyle":"bold"}}>30-50% OFF</h1>
              {/* <h1>First slide label</h1> */}
              {/* <h1>First slide label</h1> */}
            </div>
          </Link>
          </div>
          <div className="carousel-item" style={{"maxHeight":"750px"}}>
            <Link className={`nav-link ${location.pathname==="/"?"active":""} p-0`} to="/">
            <img
              src="https://sonobucket.s3.amazonaws.com/Caraousal/CGeneralFashionrack-of-blank-tshirts.jpg"
              className="d-block w-100"
              alt="..."
            />
            {/* d-none d-md-block */}
            <div className="carousel-caption card-img-overlay d-flex align-items-center justify-content-center">
              <h1 style={{fontFamily:"'Old Standard TT', serif", "fontSize":"9vw", "fontStyle":"bold"}}>30-50% OFF</h1>
              {/* <h1>First slide label</h1> */}
              {/* <h1>First slide label</h1> */}
            </div>
            </Link>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Banner;
