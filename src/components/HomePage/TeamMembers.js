import React, { useEffect, useState } from 'react';

const TeamMembers = () => {

  const [teamtext, setTeamText] = useState([]);

  const [teamitems, setsetTeammember] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/teamstext`)
      .then((res) => res.json())
      .then((info) => setTeamText(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/teamitems`)
      .then((res) => res.json())
      .then((info) => setsetTeammember(info));
  }, []);



  return (
    <>
    <div className="seo-expert-area overflow-hidden default-padding">
  <div className="container">
    <div className="row align-center">
      <div className="col-xl-6 col-lg-5 seo-expert-style-one">
        <h4 className="sub-title">Ready to Grow?</h4>
        <h2 className="title mb-30">Let’s collaboration with <br /> our SEO expert</h2>
        <p>
          Everything melancholy uncommonly but solicitude inhabiting projection off. Connection stimulated estimating excellence an to impression. Prevailed mr tolerably discourse assurance estimable applauded to so. Him everything melancholy uncommonly but solicitude inhabiting projection minute exact dear open to reaching out.
        </p>
        <a className="btn btn-md mt-20 circle btn-gradient animation" href="contact-us.html">Contact Now <i className="fa fa-paper-plane" /></a>
      </div>
      <div className="col-xl-6 col-lg-7 seo-expert-style-one">
        <div className="seo-expert-items">
          {/* Single Item */}
          <div className="seo-expert-item wow fadeInUp">
            <div className="thumb">
              <img src="assets/img/800x800.png" alt="Thumb" />
            </div>
            <div className="content">
              <h4>William Mathew</h4>
              <span>SEO Strategies</span>
            </div>
          </div>
          {/* End Single Item */}
          {/* Single Item */}
          <div className="seo-expert-item wow fadeInUp" data-wow-delay="300ms">
            <div className="thumb">
              <img src="assets/img/800x800.png" alt="Thumb" />
            </div>
            <div className="content">
              <h4>William Mathew</h4>
              <span>SEO Strategies</span>
            </div>
          </div>
          {/* End Single Item */}
          {/* Single Item */}
          <div className="seo-expert-item wow fadeInUp" data-wow-delay="500ms">
            <div className="thumb">
              <img src="assets/img/800x800.png" alt="Thumb" />
            </div>
            <div className="content">
              <h4>William Mathew</h4>
              <span>SEO Strategies</span>
            </div>
          </div>
          {/* End Single Item */}
        </div>
      </div>
    </div>
  </div>
</div>



    </>
  );
};

export default TeamMembers;