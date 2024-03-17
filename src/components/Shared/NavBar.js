import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";



const NavBar = () => {

  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  const [users, setUser] = useState([]);
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);


  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((info) => setUser(info));
  }, []);




  return (


    //     <>
    //      <header className="template-header absolute-header sticky-header">
    //   <div className="container-fluid container-1550">
    //     <div className="header-inner">
    //       <div className="header-left">
    //         {
    //           logo.map(l=> <div className="site-logo">
    //           <a href="/">
    //             <img src={l.logo} alt="Logo" />
    //           </a>
    //         </div>)
    //         }

    //       </div>
    //       <div className="header-center">
    //         <nav className="nav-menu d-none d-xl-block">
    //           <ul className="primary-menu">

    //             <li><a href="/">Home</a></li>
    //             <li><a href="#service-sec">Our Services</a></li>
    //             <li><a href="#who-sec">Who We Are</a></li>
    //             <li><a href="#testi-sec">Testimonials</a></li>
    //             <li><a href="#contact-sec">Contact Us</a></li>
    //           </ul>
    //         </nav>
    //       </div>
    //       <div className="header-right">
    //         <ul className="header-extra">

    // {
    //           user ?
    //             <li className="header-btns d-none d-md-block" > <Link to='/dashboard' className="btn btn-md  btn-gradient animation" >Dashboard</Link></li>
    //             :

    //             <li className="header-btns d-none d-md-block">
    //               <Link to='login' className="btn btn-md  btn-gradient animation">
    //                 Login
    //                 <i className="far fa-long-arrow-right" />
    //               </Link>
    //             </li>

    //         }

    //         {
    //           users.filter(u => u.userEmail === user?.email).length === 1 &&
    //           <li className="header-btns d-none d-md-block" > <Link to='/admin/' className="btn btn-md  btn-gradient animation" >Admin</Link></li>
    //         }



    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    //   {/* Start Off Canvas */}
    //   <div className="slide-panel off-canvas-panel">
    //     <div className="panel-overlay" />
    //     <div className="panel-inner">
    //       <div className="canvas-logo">
    //         <img src="assets/img/logo.png" alt />
    //       </div>
    //       <div className="about-us">
    //         <h5 className="canvas-widget-title">About Us</h5>
    //         <p>
    //           Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperams eaque ipsa quae abillo.
    //         </p>
    //       </div>
    //       <div className="contact-us">
    //         <h5 className="canvas-widget-title">Contact Us</h5>
    //         <ul>
    //           <li>
    //             <i className="far fa-map-marker-alt" />
    //             354 Oakridge, Camden NJ 08102 - USA
    //           </li>
    //           <li>
    //             <i className="far fa-envelope-open" />
    //             <a href="/cdn-cgi/l/email-protection#12616762627d606652467b7e79773c717d7f"><span className="__cf_email__" data-cfemail="8efdfbfefee1fcfacedae7e2e5eba0ede1e3">[email&nbsp;protected]</span></a>
    //             <a href="/cdn-cgi/l/email-protection#ec85828a83acb885808789c28f8381"><span className="__cf_email__" data-cfemail="d8b1b6beb7988cb1b4b3bdf6bbb7b5">[email&nbsp;protected]</span></a>
    //           </li>
    //           <li>
    //             <i className="far fa-phone" />
    //             <a href="tel:+01234567899">+012 (345) 678 99</a><br />
    //             <a href="tel:+8563214">+8563214</a>
    //           </li>
    //         </ul>
    //       </div>
    //       <a href="#" className="panel-close">
    //         <i className="fal fa-times" />
    //       </a>
    //     </div>
    //   </div>
    //   {/* End Off Canvas */}
    //   {/* Mobile Menu */}
    //   <div className="slide-panel mobile-slide-panel">
    //     <div className="panel-overlay" />
    //     <div className="panel-inner">
    //       <div className="panel-logo">
    //         <img src="assets/img/logo.png" alt />
    //       </div>
    //       <nav className="mobile-menu">
    //         <ul className="primary-menu">
    //           <li>
    //             <a href="index.html" className="active">Home</a>
    //             <ul className="submenu">
    //               <li><a href="index.html">SEO Agency</a></li>
    //               <li><a href="index-2.html">Digital Agency</a></li>
    //               <li><a href="index-3.html">Marketing Agency</a></li>
    //               <li><a href="index-4.html">Digital Agency Dark</a></li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a href="marketing-services.html">Services</a>
    //             <ul className="submenu">
    //               <li><a href="marketing-services.html">Marketing Services</a></li>
    //               <li><a href="agency-services.html">Agency Services</a></li>
    //               <li><a href="service-details.html">Services Details</a></li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a href="portfolio.html">Works</a>
    //             <ul className="submenu">
    //               <li><a href="portfolio.html">Works One</a></li>
    //               <li><a href="portfolio-2.html">Works Two</a></li>
    //               <li><a href="portfolio-details.html">Works Details</a></li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a href="blog-standard.html">Blog</a>
    //             <ul className="submenu">
    //               <li><a href="blog-standard.html">Blog Standard</a></li>
    //               <li><a href="blog-details.html">Blog Details</a></li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a href="#">Pages</a>
    //             <ul className="submenu">
    //               <li><a href="about.html">About Us</a></li>
    //               <li><a href="pricing.html">Pricing</a></li>
    //               <li><a href="faq.html">Faq</a></li>
    //               <li><a href="team.html">Our Team</a></li>
    //               <li><a href="team-details.html">Team Details</a></li>
    //               <li><a href="shop.html">Shop</a></li>
    //               <li><a href="shop-details.html">Shop Details</a></li>
    //             </ul>
    //           </li>
    //           <li><a href="contact.html">Contact</a></li>
    //         </ul>
    //       </nav>
    //       <a href="#" className="panel-close">
    //         <i className="fal fa-times" />
    //       </a>
    //     </div>
    //   </div>
    // </header>

    //     </>

    <>
      <header>
        {/* Start Navigation */}

        {
          logo.map(l=> <nav className="navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed white no-background">
          {/* Start Top Search */}
          <div className="top-search">
            <div className="container-xl">
              <div className="input-group">
                <span className="input-group-addon"><i className="fa fa-search" /></span>
                <input type="text" className="form-control" placeholder="Search" />
                <span className="input-group-addon close-search"><i className="fa fa-times" /></span>
              </div>
            </div>
          </div>
          {/* End Top Search */}
          <div className="container d-flex justify-content-between align-items-center">
            {/* Start Header Navigation */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                <i className="fa fa-bars" />
              </button>
              <a className="navbar-brand" href="/">
                <img src={l.logo} className="logo logo-display" alt="Logo" />
                
              </a>
            </div>
            {/* End Header Navigation */}
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="navbar-menu">
              <img src={l.logo} alt="Logo" />
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                <i className="fa fa-times" />
              </button>
              <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                <li className="dropdown">
                  <a href="/" className="active" >Home</a>


                </li>
                <li className="dropdown megamenu-fw">
                  <a href="#about" data-toggle="dropdown">About Us</a>

                </li>
                <li className="dropdown">
                  <a href="#services" data-toggle="dropdown">Services</a>

                </li>
                <li className="dropdown">
                  <a href="#pricing" data-toggle="dropdown">Pricing</a>

                </li>
                <li><a href="#contact">Contact</a></li>
                <li>
                  <a className="" href="/">
                    <span>
                      {
                        user?.email ?
                          <li>
                            <Link to="/dashboard" class="btn btn-md  btn-gradient animation" data-animation="fadeInRight" data-delay=".8s">Dashboard</Link>

                          </li>
                          :
                          <li><Link to="/login" className="btn btn-md  btn-gradient animation">

                            Log in
                          </Link></li>



                      }


                    </span>
                  </a>
                </li>
                <li>
                  <a className="" >
                    <span>
                      {
                        users.map(u => u.userEmail === user?.email && u.userRole === 'Admin' &&

                          <li>  <Link to="/admin" className="btn btn-md  btn-gradient animation">

                            Admin
                          </Link></li>

                        )

                      }
                    </span>
                  </a>
                </li>





              </ul>
            </div>{/* /.navbar-collapse */}
            <div className="attr-right">
              {/* Start Atribute Navigation */}
              <div className="attr-nav">

              </div>
              {/* End Atribute Navigation */}
              {/* Start Side Menu */}
              <div className="side">
                <a href="#" className="close-side"><i className="icon_close" /></a>
                <div className="widget">
                  <div className="logo">
                    <img src={l.logo} alt="Logo" />
                  </div>
                  <p>
                    Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may purse means few blind.
                  </p>
                </div>
                <div className="widget address">
                  <div>
                    <ul>
                      <li>
                        <div className="content">
                          <p>Address</p>
                          <strong>California, TX 70240</strong>
                        </div>
                      </li>
                      <li>
                        <div className="content">
                          <p>Email</p>
                          <strong>support@validtheme.com</strong>
                        </div>
                      </li>
                      <li>
                        <div className="content">
                          <p>Contact</p>
                          <strong>+44-20-7328-4499</strong>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget newsletter">
                  <h4 className="title">Get Subscribed!</h4>
                  <form action="#">
                    <div className="input-group stylish-input-group">
                      <input type="email" placeholder="Enter your e-mail" className="form-control" name="email" />
                      <span className="input-group-addon">
                        <button type="submit">
                          <i className="arrow_right" />
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
                <div className="widget social">
                  <ul className="link">
                    <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="#"><i className="fab fa-twitter" /></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                    <li><a href="#"><i className="fab fa-behance" /></a></li>
                  </ul>
                </div>
              </div>
              {/* End Side Menu */}
            </div>
            {/* Main Nav */}
          </div>
          {/* Overlay screen for menu */}
          <div className="overlay-screen" />
          {/* End Overlay screen for menu */}
        </nav>)
        }
       
        {/* End Navigation */}
      </header>

    </>
  );
};

export default NavBar;
