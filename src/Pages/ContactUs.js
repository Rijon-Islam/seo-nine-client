import React, { useEffect, useState } from 'react';

const ContactUs = () => {


  const [footerAddress, setFooterAddress] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);


  const handleMessage = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const number = event.target.number.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;
    const messageStatus = event.target.messageStatus.value;

    const addItem = {
      name,
      email,
      number,
      subject,
      message,
      messageStatus,
    };

    const url = `http://localhost:5000/add-message`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result); // Log the result from the server
        alert('Message is Updated');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('There was an error. Please try again later.');
      });
  };

  return (
    <>
      <div className="contact-area default-padding" id='contact'>
        <div className="container">
          <div className="row">
            <div className="col-tact-stye-one col-lg-5 pr-60 pr-md-15 pr-xs-15">

              {
                footerAddress.map(f=>  <div className="contact-style-one-info">
                <h2>Contact Information</h2>
                <p>
         
                </p>
                <ul>
                  <li className="wow fadeInUp">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="content">
                      <h4 className="title">Hotline</h4>
                      <a href="/">{f.Phone}</a>
                    </div>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="300ms">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="info">
                      <h4 className="title">Our Location</h4>
                      <p>
                       {f.Location}
                      </p>
                    </div>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="500ms">
                    <div className="icon">
                      <i className="fas fa-envelope-open-text" />
                    </div>
                    <div className="info">
                      <h4 className="title">Official Email</h4>
                      <a href="/">{f.footerEmail}</a>
                    </div>
                  </li>
                </ul>
              </div>)
              }
             
            </div>
            <div className="col-tact-stye-one col-lg-7">
              <div className="contact-form-style-one">
                <div className="illustration wow fadeInRight" data-wow-delay="300ms">
                  <img src="assets/img/illustration/20.png" alt="Image Not Found" />
                </div>
                <h4 className="sub-heading">Have Questions?</h4>
                <h2 className="heading">Send us a Message</h2>
                <form onSubmit={handleMessage} action="inc/contact.php" id="contact-form" data-toggle="validator">
                  <div className="messages" />
                  <div className="row controls">
                    <div className="col-lg-6">

                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input className="form-control" id="name" name="name" placeholder="Name" type="text" />
                        <span className="alert-error" />
                      </div>
                    </div>

                  

                    <div className="col-lg-6">
                      <div className="form-group">
                        <input className="form-control" id="email" name="email" placeholder="Email*" type="email" />
                        <span className="alert-error" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <input className="form-control" id="number" name="number" placeholder="Your Phone" type="text" />
                        <span className="alert-error" />
                      </div>
                    </div>


                    <div className="col-lg-12">
                      <div className="form-group">
                        <input className="form-control" id="subject" name="subject" placeholder="Your Subject" type="text" />
                        <span className="alert-error" />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">

                        <input type="text" placeholder="Your Subject" name="messageStatus" value="UnRead" hidden required="required" data-error="Name is required." />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                   
                    <div class="col-lg-12">
                      <div class="form-group comments">
                        <textarea class="form-control" id="message" name="message" placeholder="Please Leave us a Message."></textarea>
                      </div>
                    </div>

                    <div className="col-12"><button className="theme-btn-one ripple-btn">Send Message</button></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
