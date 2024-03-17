import React, { useEffect, useState } from 'react';

const WorkSection = () => {

  const [stepwork, setWork] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/worksec`)
      .then((res) => res.json())
      .then((info) => setWork(info));
  }, []);


  return (


    <>
    <div className="process-style-two-area default-padding" style={{backgroundImage: 'url(assets/img/shape/1.png)'}}>
  <div className="container">
    {
      stepwork.map(w=> <div className="row">
      <div className="col-xl-7 col-lg-7 process-style-two">
        <div className="process-style-two-thumb">
          <img src="assets/img/illustration/3.svg" alt="Image Not Found" />
        </div>
      </div>
      <div className="col-xl-5 col-lg-5 pl-50 pl-md-15 pl-xs-15 process-style-two">
        <h4 className="sub-heading">{w.processText}</h4>
        <h2 className="title">{w.processHeading}</h2>
        <p>
        {w.processDetails}
        </p>
        <div className="process-list-box mt-30">
          <div className="proces-style-two-list">
            <h4>{w.pointOne}</h4>
            <p>
            {w.pointOneDetails}
            </p>
          </div>
          <div className="proces-style-two-list">
            <h4>{w.pointTwo}</h4>
            <p>
            {w.pointTwoDetails}
            </p>
          </div>
        </div>
      </div>
    </div>)
    }
    
  </div>
</div>


    </>
  );
};

export default WorkSection;