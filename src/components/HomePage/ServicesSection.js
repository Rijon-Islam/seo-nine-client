import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {


  const [items, setItems] = useState([]);
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/service-items`)
      .then((res) => res.json())
      .then((info) => setItems(info));
  }, []);


  useEffect(() => {
    fetch(`http://localhost:5000/service`)
      .then((res) => res.json())
      .then((info) => setService(info));
  }, []);


  return (



    <>

<div className="default-padding-top bottom-less overflow-hidden bottom-dark-120 shape-left-center" id="services">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        {
          service.map(e=><div className="site-heading text-center">
          <h4 className="sub-title">{e.servicesubHeading}</h4>
          <h2 className="title">{e.serviceHeading}</h2>
          <div className="devider" />
        </div>)
        }
        
      </div>
    </div>
  </div>
  <div className="container">
    <div className="relative">
      {/* Shape */}
      <div className="shape-arrow">
        <img src="assets/img/shape/arrow.png" alt="Shape" />
      </div>
      {/* End Shape */}
      <div className="row">
        {
          items.map(s=><div className="col-lg-4 col-md-6 feature-style-three">
          <div className="item">
            <div className="icon">
            <img src={s.serviceIcon} alt="Shape" />
            </div>
            <p>
              {s.serviceDetails}
            </p>
            <div className="bottom">
              
              <h4><a href="/">{s.serviceTitle}</a></h4>
            </div>
          </div>
        </div>)
        }
       
    
        
       
        
       
      </div>
    </div>
  </div>
</div>


    </>


  );
};

export default ServicesSection;
