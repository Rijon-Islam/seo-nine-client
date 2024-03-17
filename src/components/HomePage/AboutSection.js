import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AboutSection = () => {

  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);





  return (

 

    <>

{
  about.map(a=><div className="about-style-three-area overflow-hidden bg-dark default-padding text-light" style={{backgroundImage: 'url(assets/img/shape/37.png)'}} id="about">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 about-style-three">
        <div className="thumb">
          <img src={a.aboutImg} alt="Image not found" />
          <div className="sub-thumb">
            <img src="https://i.ibb.co/GfZSSVC/Untitled-design-2024-03-13-T083043-620.png" alt="Thumb" />
          </div>
        </div>
      </div>
      <div className="col-lg-5 offset-lg-1 about-style-three pt-xs-0 pt-80 pt-md-0">
        <h3>{a.aboutText}</h3>
        <h2 style={{backgroundImage: 'url(assets/img/shape/1.jpg)'}}>
        {a.aboutHeading}
        </h2>
        <div className="list-item-three-box mt-50">
          {/* Single Item */}
          <div className="list-style-three">
            <span>01</span>
            <div className="content">
              <h4>{a.aboutPointOne}</h4>
              <p>
              {a.aboutPointOneDetails}
              </p>
            </div>
          </div>
          {/* End Single Item */}
          {/* Single Item */}
          <div className="list-style-three">
            <span>02</span>
            <div className="content">
              <h4>{a.aboutPointTwo}</h4>
              <p>
              {a.aboutPointTwoDetails}
              </p>
            </div>
          </div>
          {/* End Single Item */}
        </div>
      </div>
    </div>
  </div>
</div>)
}



     

    </>
  );
};

export default AboutSection;
