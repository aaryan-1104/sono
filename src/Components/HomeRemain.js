import React from "react";
import blobscatterhaikei from "../resource/blobscatterhaikei.svg"
import circlescatterhaikei from "../resource/circlescatterhaikei.svg"
import polygonscatterhaikei from "../resource/polygonscatterhaikei.svg"

import { Link } from 'react-router-dom'
import { useContext } from "react";
import sonoContext from "../context/notes/sonoContext";

const HomeRemain = () => {

  const context = useContext(sonoContext)
  const { setProductFilterCategory, getFilteredProduct }=context;

  const handleSortParam =async (categ)=>{
    setProductFilterCategory(categ)
    getFilteredProduct();

  }

  return (
    <div className="" style={{"backgroundColor":"#C7eDE4"}}>
      <div className="pt-5 pb-5" style={{"backgroundImage":`url(${polygonscatterhaikei})`,"backgroundSize":"100%"}}>
        <h2 className="py-3 px-3" >Shop by Brands</h2>
        <div className="d-flex flex-col">
          <div className="card-group mb-5">
            <div className="card mx-3" style={{"maxHeight":"372px"}}>
              <Link className={`nav-link p-0`} to="/shop/products/filter" onClick={()=>{handleSortParam({"category":[],"brand":"Roadster"})}}>
                <img
                  src="https://sonobucket.s3.amazonaws.com/Brands/Brand-1-Tommy-_CK.jpg"
                  className="card-img-top"
                  alt="..."
                  />
              </Link>
            </div>
            <div className="card mx-3" style={{"maxHeight":"372px"}}>
              <Link className={`nav-link p-0`} to="/shop/products/filter" onClick={()=>{handleSortParam({"category":[],"brand":"HIGHLANDER"})}}>
                <img
                  src="https://sonobucket.s3.amazonaws.com/Brands/Brand-2-max_all_articles.jpg"
                  className="card-img-top"
                  alt="..."  
                />
              </Link>
            </div>
            <div className="card mx-3" style={{"maxHeight":"372px"}}>
              <Link className={`nav-link p-0`} to="/shop/products/filter" onClick={()=>{handleSortParam({"category":[],"brand":"HERE&NOW"})}}>
                <img
                  src="https://sonobucket.s3.amazonaws.com/Brands/Brand-3-Levis-_USPA_40-60.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </Link>
            </div>
            <div className="card mx-3" style={{"maxHeight":"372px"}}>
              <Link className={`nav-link p-0`} to="/shop/products/filter" onClick={()=>{handleSortParam({"category":[],"brand":"Vishudh"})}}>
                <img
                  src="https://sonobucket.s3.amazonaws.com/Brands/Brand-4_Inddus-_Vishudh_-_more_-_min_60_off_-TS-.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </Link> 
            </div>
            <div className="card mx-3" style={{"maxHeight":"372px"}}>
              <Link className={`nav-link p-0`} to="/shop/products/filter" onClick={()=>{handleSortParam({"category":[],"brand":"H&M"})}}>
                <img
                  src="https://sonobucket.s3.amazonaws.com/Brands/Brand-5-UCB-_JJ_Min_50.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
     
      <div className="" style={{"backgroundColor":"#C7eDE4"}} >
        <h2 className="py-3 px-3">Deal of the Day</h2>
        <div className="d-flex flex-col">
          <div className="card-group mb-5">
            <div className="card mx-3">
              <Link className={`nav-link p-0`} to="/shop/products/filter" onClick={()=>{handleSortParam({"category":[],"brand":"Vishudh"})}}>
                <img
                  src="https://sonobucket.s3.amazonaws.com/Deal+of+the+Day/Deal-1_Libas-_Vishudh.jpg"
                  className="card-img-top"
                  alt="..."
                /> 
              </Link>
            </div>
            <div className="card mx-3">
              <Link className={`nav-link p-0`} to="/shop/products/filter" onClick={()=>{handleSortParam({"category":[],"brand":"Ben Sherman"})}}>
                <img
                  src="https://sonobucket.s3.amazonaws.com/Deal+of+the+Day/Deal-2-International_Styles___40-60_Off-_Gant-_Ben_Sherman_-_More.jpg"
                  className="card-img-top"
                  alt="..."
                />  
              </Link>
            </div>
            <div className="card mx-3">
              <Link className={`nav-link p-0`} to="/shop/products/filter" onClick={()=>{handleSortParam({"category":[],"brand":"Indo Era"})}}>
                <img
                  src="https://sonobucket.s3.amazonaws.com/Deal+of+the+Day/Deal-3-Varanga-_Indo_Era.jpg"
                  className="card-img-top"
                  alt="..."
                /> 
              </Link>
            </div>
            <div className="card mx-3">
              <Link className={`nav-link p-0`} to="/shop/products/filter" onClick={()=>{handleSortParam({"category":[],"brand":"Sojanya"})}}>
                <img
                  src="https://sonobucket.s3.amazonaws.com/Deal+of+the+Day/Deal-4-Sojanya-_Deyann.jpg"
                  className="card-img-top"
                  alt="..."
                />   
              </Link>
            </div>
            <div className="card mx-3">
              <Link className={`nav-link p-0`} to="/shop/products/filter" onClick={()=>{handleSortParam({"category":[],"brand":"HOUSE OF PATAUDI"})}}>
                <img
                  src="https://sonobucket.s3.amazonaws.com/Deal+of+the+Day/Deal-5-Ethnic_Collection_for_you.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="" style={{"backgroundImage":`url(${blobscatterhaikei})`,"backgroundSize":"100%"}}>
        <h2 className="py-3 px-3">Categories to shop</h2>
        <div className="d-flex flex-col">
          <div className="card-group mb-5 ">
            <div
              className="card mx-3 border-0"
              // style={{"backgroundColor":"#566E3D"}}
              style={{ "borderRadius": "50%" }}
            >
              <Link className={`nav-link p-0`} style={{"textDecoration":"none", "color":"black"}}  to="/shop/products/filter" onClick={()=>{handleSortParam({"category":["men","tshirt"],"brand":""})}}>
                <img
                  src="https://picsum.photos/300.webp?random=1"
                  className="card-img-top "
                  alt="..."
                  style={{ "borderRadius": "50%" }}
                />

                <div className="card-img-overlay d-flex align-items-center justify-content-center d-flex align-items-center justify-content-center" >
                    <h1 className="card-title text-center">T-SHIRTS</h1>
                </div>
              </Link>
            </div>
            <div
              className="card mx-3 border-0"
              // style={{"backgroundColor":"#305252"}}
              style={{ "borderRadius": "50%" }}
            >
              <Link className={`nav-link p-0`} style={{"textDecoration":"none", "color":"black"}}  to="/shop/products/filter" onClick={()=>{handleSortParam({"category":["women","dress"],"brand":""})}}>
                <img
                  src="https://picsum.photos/300.webp?random=2"
                  className="card-img-top"
                  alt="..."
                  style={{ "borderRadius": "50%" }}
                />

                <div className="card-img-overlay d-flex align-items-center justify-content-center" >
                    <h1 className="card-title text-center">DRESS</h1>
                </div>
              </Link>
            </div>
            <div
              className="card mx-3 border-0"
              // style={{"backgroundColor":"#FFFD99"}}
              style={{ "borderRadius": "50%" }}
            >
              <Link className={`nav-link p-0`} style={{"textDecoration":"none", "color":"black"}}  to="/shop/products/filter" onClick={()=>{handleSortParam({"category":["men","shirt"],"brand":""})}}>
                <img
                  src="https://picsum.photos/300.webp?random=3"
                  className="card-img-top"
                  style={{ "borderRadius": "50%" }}
                  alt="..."
                />

                <div className="card-img-overlay d-flex align-items-center justify-content-center" >
                    <h1 className="card-title text-center">SHIRTS</h1>
                </div>
              </Link>
            </div>
            <div
              className="card mx-3 border-0"
              // style={{"backgroundColor":"#D7D7D6"}}
              style={{ "borderRadius": "50%" }}
            >
              <Link className={`nav-link p-0`} style={{"textDecoration":"none", "color":"black"}}  to="/shop/products/filter" onClick={()=>{handleSortParam({"category":["men","jacket"],"brand":""})}}>
                <img
                  src="https://picsum.photos/300.webp?random=4"
                  className="card-img-top"
                  style={{ "borderRadius": "50%" }}
                  alt="..."
                />
                
              <div className="card-img-overlay d-flex align-items-center justify-content-center" >
                    <h1 className="card-title text-center">JACKETS</h1>
                </div>
              </Link>
            </div>
            <div
              className="card mx-3 border-0"
              // style={{"backgroundColor":"#3C3E3C"}}
              style={{ "borderRadius": "50%" }}

            >
              <Link className={`nav-link p-0`} style={{"textDecoration":"none", "color":"black"}}  to="/shop/products/filter" onClick={()=>{handleSortParam({"category":["footwear","men"],"brand":""})}}>
                <img
                  src="https://picsum.photos/300.webp?random=5"
                  className="card-img-top"
                  style={{ "borderRadius": "50%" }}
                  alt="..."
                />

                <div className="card-img-overlay d-flex align-items-center justify-content-center" >
                    <h1 className="card-title text-center">SHOES</h1>
                    <h3 className="card-title text-center"> -For him</h3>
                </div>
              </Link>             
            </div>
          </div>
        </div>
        <div className="d-flex flex-col">
          <div className="card-group mb-5">
            <div
              className="card mx-3 border-0 "
              style={{ "borderRadius": "50%" }}
            >
              <Link className={`nav-link p-0`} style={{"textDecoration":"none", "color":"black"}}  to="/shop/products/filter" onClick={()=>{handleSortParam({"category":["men","trackpants"],"brand":""})}}>
                <img
                  src="https://picsum.photos/300.webp?random=6"
                  className="card-img-top"
                  style={{ "borderRadius": "50%" }}
                  alt="..."
                />
                <div className="card-img-overlay d-flex align-items-center justify-content-center" >
                  <h1 className="card-title text-center">TROUSER</h1>
                </div>
              </Link>
            </div>
            <div
              className="card mx-3 border-0"
              style={{ "borderRadius": "50%" }}
            >
              <Link className={`nav-link p-0`} style={{"textDecoration":"none", "color":"black"}}  to="/shop/products/filter" onClick={()=>{handleSortParam({"category":["men","formal"],"brand":""})}}>
                <img
                  src="https://picsum.photos/300.webp?random=7"
                  className="card-img-top"
                  style={{ "borderRadius": "50%" }}
                  alt="..."
                />    
                <div className="card-img-overlay d-flex align-items-center justify-content-center" >
                  <h1 className="card-title text-center">FORMAL</h1>
                </div>
              </Link>
            </div>
            <div
              className="card mx-3 border-0"
              style={{ "borderRadius": "50%" }}
            >
              <Link className={`nav-link p-0`} style={{"textDecoration":"none", "color":"black"}}  to="/shop/products/filter" onClick={()=>{handleSortParam({"category":["men","jeans"],"brand":""})}}>
                <img
                  src="https://picsum.photos/300.webp?random=8"
                  className="card-img-top"
                  style={{ "borderRadius": "50%" }}
                  alt="..."
                /> 
                <div className="card-img-overlay d-flex align-items-center justify-content-center" >
                  <h1 className="card-title text-center">JEANS</h1>
                </div>
              </Link>
            </div>
            <div
              className="card mx-3 border-0"
              style={{ "borderRadius": "50%" }}
            >
              <Link className={`nav-link p-0`} style={{"textDecoration":"none", "color":"black"}}  to="/shop/products/filter" onClick={()=>{handleSortParam({"category":["accessories","men"],"brand":""})}}>
                <img
                  src="https://picsum.photos/300.webp?random=9"
                  className="card-img-top"
                  style={{ "borderRadius": "50%" }}
                  alt="..."
                />              
                <div className="card-img-overlay d-flex align-items-center justify-content-center" >
                  <h1 className="card-title text-center">WATCHES</h1>
                </div>
              </Link>
            </div>
            <div
              className="card mx-3 border-0 "
              // style={{"backgroundColor":"#FFC1AD"}}
              style={{ borderRadius: "50%" }}
            >
              <Link className={`nav-link p-0`} style={{"textDecoration":"none", "color":"black"}}  to="/shop/products/filter" onClick={()=>{handleSortParam({"category":["footwear","women"],"brand":""})}}>
                <img
                  src="https://picsum.photos/300.webp?random=10"
                  className="card-img-top"
                  style={{ "borderRadius": "50%" }}
                  alt="..."
                /> 
                <div className="card-img-overlay d-flex align-items-center justify-content-center" >
                  <h1 className="card-title text-center">SHOES</h1>
                  <h3 className="card-title text-center"> -For her</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="" style={{"backgroundColor":"#FFC1AD"}} >
        <h2 className="py-3 px-3">Trending in Western Wear</h2>
        <div className="d-flex flex-col">
          <div className="card-group mb-5">
            <div className="card mx-3">
              <img
                src="https://picsum.photos/300.webp?random=1"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card.</p>
              </div>
            </div>
            <div className="card mx-3">
              <img
                src="https://picsum.photos/300.webp?random=2"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card.</p>
              </div>
            </div>
            <div className="card mx-3">
              <img
                src="https://picsum.photos/300.webp?random=3"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card.</p>
              </div>
            </div>
            <div className="card mx-3">
              <img
                src="https://picsum.photos/300.webp?random=4"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card.</p>
              </div>
            </div>
            <div className="card mx-3">
              <img
                src="https://picsum.photos/300.webp?random=5"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" "  style={{"backgroundImage":`url(${circlescatterhaikei})`,"backgroundSize":"100%"}} >
        <h2 className="py-3 px-3">Trending in Indian Wear</h2>
        <div className="d-flex flex-col">
          <div className="card-group mb-5">
            <div className="card mx-3">
              <img
                src="https://picsum.photos/300.webp?random=1"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card.</p>
              </div>
            </div>
            <div className="card mx-3">
              <img
                src="https://picsum.photos/300.webp?random=2"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card.</p>
              </div>
            </div>
            <div className="card mx-3">
              <img
                src="https://picsum.photos/300.webp?random=3"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card.</p>
              </div>
            </div>
            <div className="card mx-3">
              <img
                src="https://picsum.photos/300.webp?random=4"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card.</p>
              </div>
            </div>
            <div className="card mx-3">
              <img
                src="https://picsum.photos/300.webp?random=5"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="" style={{"backgroundColor":"#fcff6b"}}>
        <h2 className="py-3 px-3">Trending in Sports Wear</h2>
        <div className="d-flex flex-col">
          <div className="card-group mb-5">
            <div className="card mx-3" style={{"boxShadow":"-7px -7px 16px rgba(255,255,255,0.5), 7px 7px 16px #d1cdc77e"}}>
              <img
                src="https://picsum.photos/300.webp?random=1"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card.</p>
              </div>
            </div>
            <div className="card mx-3"style={{"boxShadow":"-7px -7px 16px rgba(255,255,255,0.5), 7px 7px 16px #d1cdc77e"}}>
              <img
                src="https://picsum.photos/300.webp?random=2"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card.</p>
              </div>
            </div>
            <div className="card mx-3"style={{"boxShadow":"-7px -7px 16px rgba(255,255,255,0.5), 7px 7px 16px #d1cdc77e"}}>
              <img
                src="https://picsum.photos/300.webp?random=3"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card.</p>
              </div>
            </div>
            <div className="card mx-3"style={{"boxShadow":"-7px -7px 16px rgba(255,255,255,0.5), 7px 7px 16px #d1cdc77e"}}>
              <img
                src="https://picsum.photos/300.webp?random=4"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card.</p>
              </div>
            </div>
            <div className="card mx-3"style={{"boxShadow":"-7px -7px 16px rgba(255,255,255,0.5), 7px 7px 16px #d1cdc77e"}}>
              <img
                src="https://picsum.photos/300.webp?random=5"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRemain;
