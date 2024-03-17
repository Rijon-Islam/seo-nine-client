import React, { useEffect, useState } from "react";

const TestimonialSection = () => {
  const [testimonial, setTestimonial] = useState([]);
  const [testimonialText, setTestimonialText] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonialtext`)
      .then((res) => res.json())
      .then((info) => setTestimonialText(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/testimonials`)
      .then((res) => res.json())
      .then((info) => setTestimonial(info));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Your resize logic here
      console.log('Resize event debounced');
    };

    // Set up the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run this effect only once on mount

  return (
    <>
      <div className="testimonial-style-two-area overflow-hidden relative pt-150 pt-xs-80 pb-120 pb-xs-60 bg-gradient">
        <div className="curve-top">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" fill="#f3f7fd">
            <path d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z" />
          </svg>
        </div>
        <div className="shape-animation">
          <img src="assets/img/shape/anim-1.png" alt="Image Not Found" />
        </div>
        <div className="container">
          <div className="row align-center">
            <div className="testimonial-style-two text-light col-xl-4 col-lg-5">
              <h4 className="sub-heading">Testimonials</h4>
              <h2 className="heading">What customers feedback about us</h2>
              <div className="rating-provider">
                <div className="ratings">
                  <div className="rating-icon">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <h4>(4.8/5)</h4>
                  </div>
                  <span>Based on 1,258 reviews</span>
                </div>
              </div>
            </div>
            <div className="testimonial-style-two pl-65 pl-md-15 pl-xs-15 col-xl-8 col-lg-7">
              <div className="shape-right-bottom">
                <img src="assets/img/shape/anim-2.png" alt="Image not found" />
              </div>
              <div className="">
                <div className="swiper-wrapper">
                  {testimonial.map((i, index) => (
                    <div key={index} className="swiper-slide">
                      <div className="testimonial-style-two-item">
                        <div className="item">
                          <div className="content">
                            <p>{i.desc}</p>
                          </div>
                          <div className="provider">
                            <div className="thumb">
                              <img src={i.image} alt="Image Not Found" />
                            </div>
                            <div className="info">
                              <h4>{i.personName}</h4>
                              <span><strong></strong>  {i.personTitle}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
