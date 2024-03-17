import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Footer = () => {



  const [footerSocial, setFooterSocial] = useState([]);
  const [footerCopyright, setFooterCopyright] = useState([]);

  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);




  const [footerAddress, setFooterAddress] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/copyrights`)
      .then((res) => res.json())
      .then((info) => setFooterCopyright(info));
  }, [footerCopyright]);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const email = event.target.email.value;




    const addItem = {
      email,



    };

    const url = `http://localhost:5000/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Subscribers is Updated');
      });


  }










  return (



    <>

      <footer className="bg-dark text-light" style={{ backgroundImage: 'url(assets/img/shape/35.png)' }}>
        <div className="container">
          <div className="f-items default-padding">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-item pr-50 pr-xs-15 pr-md-15">
                {
                  footerSocial.map(s=>    <div className="about">
                  {
                    logo.map(l => <img className="logo" src={l.logo} alt="Logo" />)
                  }

                  

                  <p>
                    {s.about}
                  </p>
                  <ul className="footer-social">
                    <li>
                      <a href= {s.fblink}><i className="fab fa-facebook-f" /></a>
                    </li>
                    <li>
                      <a href={s.inslink}><i className="fab fa-instagram" /></a>
                    </li>
                  
                  </ul>
                </div>)
                }
             
              </div>
              <div className="col-lg-2 col-md-6 footer-item">
                <div className="link">
                  <h4 className="widget-title">Our Services</h4>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="#about">About Us</a>
                    </li>
                    <li>
                      <a href="#services">Services</a>
                    </li>
                    <li>
                      <a href="#pricing">Pricing</a>
                    </li>
                    <li>
                      <a href="#contact">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 footer-item adress-item">
                <h4 className="widget-title">Official Info</h4>
                {
                  footerAddress.map(a=><div className="address">
                  <ul>
                    <li>
                      <div className="content">
                        <strong>Address:</strong>
                        {a.Location}
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <strong>Email:</strong>
                        <a href="/">{a.footerEmail}</a>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <strong>Phone:</strong>
                        <a href="/">{a.Phone}</a>
                      </div>
                    </li>
                  </ul>
                </div>)
                }
                
              </div>
              <div className="col-lg-3 col-md-6 footer-item">
                <h4 className="widget-title">Newsletter</h4>
                <div className="newsletter">
                  <p>
                    Join our subscribers list to get the latest news and special offers.
                  </p>
                  
                  <form onSubmit={handleSubscriber} >
                    <input name="email" className="form-control" placeholder="Email Address" />
                    <button type="submit"> Subscribe Now <i className="fa fa-paper-plane" /></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Footer Bottom */}
        <div className="footer-bottom bg-dark-secondary">
          <div className="container">
            <div className="row">
              {
                footerCopyright.map(c=> <div className="col-lg-12 text-center">
                <p>{c.copyrightText}</p>
              </div>)
              }
              
              
            </div>
          </div>
        </div>
        {/* End Footer Bottom */}
      </footer>



    </>
  );
};

export default Footer;
