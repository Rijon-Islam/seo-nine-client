import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Banner.css';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/banner`)
      .then((res) => res.json())
      .then((info) => setBanners(info));
  }, []);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subscriberEmail = event.target.subscriberEmail.value;

    const sunscribe = {
      subscriberEmail

    };

    const url = `http://localhost:5000/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sunscribe),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Thanks For Subscribe..');
      });
  };



  return (



    // 
    <>


 <div className="banner-style-three-area text-center bg-cover text-light" style={{backgroundImage: 'url(assets/img/shape/36.png)'}}>
  <div className="animate-shape">
    <img src="assets/img/illustration/cloud.png" alt="Image not found" />
    <img src="assets/img/illustration/cloud2.png" alt="Image not found" />
  </div>
  {/* Single Item */}

  {
    banners.map(b=> <div className="banner-style-three">
    <div className="container">
      <div className="content">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="info">
              <h4>{b.bannerText}</h4>
              <h2>{b.bannerHeading}</h2>
              <div className="button mt-40">
                <p>{b.bannerDetails}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-2">
            <div className="thumb">
              <img src={b.bannerImage} alt="Thumb" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="shape-bottom-center" style={{backgroundImage: 'url(assets/img/shape/5.png)'}} />
    <div className="shape-top-right" style={{backgroundImage: 'url(assets/img/shape/6.png)'}} />
    <div className="shape-left-top" style={{backgroundImage: 'url(assets/img/shape/7.png)'}} />
  </div>)
  }
  
  {/* End Single Item */}
</div>


</>
  );
};

export default Banner;
