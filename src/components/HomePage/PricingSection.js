import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PricingSection = () => {

  const [pricing, setPricing] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/pricings`)
      .then((res) => res.json())
      .then((info) => setPricing(info));
  }, []);

  return (



    <>

      <div className="pricing-area default-padding-top mb-100" id='pricing'>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-title">Our Packages</h4>
                <h2 className="title">Best pricing plans</h2>
                <div className="devider" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="pricing-style-three-box">
            <div className="row">
              <div className="col-lg-12">

              {
                    pricing.map(b => b.packageName === 'Basic' &&<div className="pricing-style-three">
                    <div className="row align-center">
                      <div className="col-lg-2 thumb">
                        <img src="assets/img/icon/p1.png" alt="Image not found" />
                      </div>
                      <div className="col-lg-2 title">
                        <h2>{b.packageName} Plan</h2>
                      </div>
                      <div className="col-lg-3 details">
                        <ul>
                          <li><i className="fas fa-check" />{b.packagePointOne}</li>
                          <li><i className="fas fa-check" />{b.packagePointTwo}</li>
                          <li><i className="fas fa-check" />  {b.packagePointThree}</li>
                          <li><i className="fas fa-check" />  {b.packagePointFour}</li>
                        </ul>
                      </div>
                      <div className="col-lg-2 price">
                        <h2><sup>$</sup>{b.packagePrice} </h2>
                      </div>
                      <div className="col-lg-3 button text-end">
                       
                        <Link to={`/order-now/${b._id}`} className="btn circle btn-md btn-gradient animation"> {b.packageButtonText} </Link>
                      </div>
                    </div>
                  </div>)}
            
                
                  {
                    pricing.map(s => s.packageName === 'Premium' &&  <div className="pricing-style-three">
                    <div className="row align-center">
                      <div className="col-lg-2 thumb">
                        <img src="assets/img/icon/p2.png" alt="Image not found" />
                      </div>
                      <div className="col-lg-2 title">
                        <h2>{s.packageName} Plan</h2>
                      </div>
                      <div className="col-lg-3 details">
                        <ul>
                          <li><i className="fas fa-check" />{s.packagePointOne}</li>
                          <li><i className="fas fa-check" /> {s.packagePointTwo}</li>
                          <li><i className="fas fa-check" /> {s.packagePointThree}</li>
                          <li><i className="fas fa-check" /> {s.packagePointFour}</li>
                        </ul>
                      </div>
                      <div className="col-lg-2 price">
                        <h2><sup>$</sup>{s.packagePrice}</h2>
                      </div>
                      <div className="col-lg-3 button text-end">
                        
                        <Link to={`/order-now/${s._id}`} className="btn circle btn-md btn-gradient animation"> {s.packageButtonText} </Link>
                      </div>
                    </div>
                  </div>)}



                  {
                    pricing.map(p => p.packageName === 'Standard' && <div className="pricing-style-three">
                    <div className="row align-center">
                      <div className="col-lg-2 thumb">
                        <img src="assets/img/icon/p3.png" alt="Image not found" />
                      </div>
                      <div className="col-lg-2 title">
                        <h2>{p.packageName}Plan</h2>
                      </div>
                      <div className="col-lg-3 details">
                        <ul>
                          <li><i className="fas fa-check" /> {p.packagePointOne}</li>
                          <li><i className="fas fa-check" /> {p.packagePointTwo}</li>
                          <li><i className="fas fa-check" /> {p.packagePointThree}</li>
                          <li><i className="fas fa-check" /> {p.packagePointFour}</li>
                        </ul>
                      </div>
                      <div className="col-lg-2 price">
                        <h2><sup>$</sup>{p.packagePrice}</h2>
                      </div>
                      <div className="col-lg-3 button text-end">
                    
                        <Link to={`/order-now/${p._id}`} className="btn circle btn-md btn-gradient animation"> {p.packageButtonText} </Link>
                      </div>
                    </div>
                  </div> )}
              
              
                
                
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default PricingSection;