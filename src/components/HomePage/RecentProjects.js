import React, { useEffect, useState } from 'react';

const RecentProjects = () => {
  const [exprience, setExperience] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/experiences`)
      .then((res) => res.json())
      .then((info) => {
        setExperience(info);
        setDataLoaded(true); // Set dataLoaded to true after fetching data
      });
  }, []);

  return (
    // <>
    //   {dataLoaded && (
    //     <div className="project-area bg-gray default-padding">
    //       {/* Shape */}
    //       <div className="shape-right-top" style={{ backgroundImage: 'url(assets/img/shape/22.png)' }} />
    //       {/* End Shape */}
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-lg-8 offset-lg-2">
    //             <div className="site-heading text-center">
    //               <h4 className="sub-title">Previous Projects</h4>
    //               <h2 className="title">Our Featured Projects</h2>
    //               <div className="devider" />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="container">
    //         <div className="projects-box">
    //           <div className="row">
    //             <div className="col-lg-12">
    //               <div className="project-carousel swiper">
    //                 {/* Additional required wrapper */}
    //                 <div className="swiper-wrapper">
    //                   {exprience.map((e, index) => (
    //                     <div className="swiper-slide" key={index}>
    //                       <div className="project-style-one">
    //                         <div className="thumb">
    //                           <img src={e.experienceImage} alt="Thumb" />
    //                         </div>
    //                         <div className="content">
    //                           <a className="button" href="/"><i className="fas fa-angle-right" /></a>
    //                           <h4><a href="/">{e.experienceHeading}</a></h4>
    //                           <ul>
    //                             <li>
    //                               {e.experienceText}
    //                             </li>
    //                           </ul>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   ))}
    //                 </div>
    //                 <div className="swiper-control">
    //                   {/* Pagination */}
    //                   <div className="swiper-pagination" />
    //                   {/* Navigation */}
    //                   <div className="swiper-button-prev" />
    //                   <div className="swiper-button-next" />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </>

    <>

<div className="process-style-two-area default-padding" style={{backgroundImage: 'url(assets/img/shape/1.png)'}}>
  <div className="container">
    <div className="row">
      <div className="col-xl-7 col-lg-7 process-style-two">
        <div className="process-style-two-thumb">
          <img src="assets/img/illustration/3.svg" alt="Image Not Found" />
        </div>
      </div>
      <div className="col-xl-5 col-lg-5 pl-50 pl-md-15 pl-xs-15 process-style-two">
        <h4 className="sub-heading">Our Process</h4>
        <h2 className="title">How we help of your business successful</h2>
        <p>
          Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts to reach.
        </p>
        <div className="process-list-box mt-30">
          <div className="proces-style-two-list">
            <h4>Customer Targeting</h4>
            <p>
              Technical leo vel fringilla est ullamcorper. Posuere urna nec tincidunt praesent semper feugiat nibh programming.
            </p>
          </div>
          <div className="proces-style-two-list">
            <h4>Data Research</h4>
            <p>
              Authorize leo vel fringilla est ullamcorper. Posuere urna nec tincidunt praesent semper feugiat nibh programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    
    </>
  );
};

export default RecentProjects;
