import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const ServicesSection = () => {

    const [service, setService] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/service`)
            .then((res) => res.json())
            .then((info) => setService(info));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/service-items`)
            .then((res) => res.json())
            .then((info) => setItems(info));
    }, []);


    const handleServiceSection = (event) => {
        event.preventDefault();
        const servicesubHeading = event.target.servicesubHeading.value;
        const serviceHeading = event.target.serviceHeading.value;


        const serviceSection = {
            servicesubHeading,
            serviceHeading,


        };

        const url = `http://localhost:5000/add-Service`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(serviceSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Service is Updated');
            });
    };

    const handleAddItem = (event) => {
        event.preventDefault();

        const serviceIcon = event.target.serviceIcon.value;
        const serviceTitle = event.target.serviceTitle.value;
        const serviceDetails = event.target.serviceDetails.value;

        const itemSection = {

            serviceIcon,
            serviceTitle,
            serviceDetails,
        };

        const url = `http://localhost:5000/add-service-item`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(itemSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Item is Added');
            });
    };



    return (
        <>
            <HeaderBottom></HeaderBottom>

            <section id="services" class="services-area pt-120 pb-90 fix mb-5" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h2 className='mt-5'> Update Service </h2>
                            {
                                service.length === 1 &&
                                <> {
                                    service.map(s => <Link className='btn btn-md  btn-gradient animation' to={`/servicetext-edit/${s._id}`}>Update Service</Link>)
                                }</>

                            }
                            {
                                service.length === 0 &&
                                <form class="contact-form " onSubmit={handleServiceSection}>
                                    <div class="row">



                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="serviceHeading" placeholder="Service Heading" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="servicesubHeading" placeholder="Service Sub Heading" required />
                                            </div>
                                        </div>
                                        <div class="slider-btn">
                                            <button class="btn btn-md  btn-gradient animation" data-animation="fadeInRight" data-delay=".8s"> Update Services </button>
                                        </div>
                                    </div>

                                </form>
                            }

                            <h2 className='mt-5'>Add Service</h2>
                            <form class="contact-form" onSubmit={handleAddItem}>
                                <div class="row">



                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="serviceIcon" placeholder="Service Icon" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="serviceTitle" placeholder="Service Title" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="serviceDetails" placeholder="Service Details" required />
                                        </div>
                                    </div>


                                    <div class="slider-btn">
                                        <button class="btn btn-md  btn-gradient animation" data-animation="fadeInRight" data-delay=".8s"> Add Service </button>
                                    </div>
                                </div>

                            </form>



                        </div>




                        <section className="service-section section-gap" id="service-sec mt-50" >
                            <div className="container">
                                {
                                    service.map(e => <div className="section-heading text-center mt-100">
                                        <h2 className="title">{e.serviceHeading}</h2>
                                        <span className="tagline">{e.servicesubHeading}</span>
                                    </div>)
                                }

                                <div className="row justify-content-center">

                                    {
                                        items.map(s => <div className="col-lg-4 col-sm-6 wow fadeInUp">
                                            <div className="iconic-box icon-left mt-30">
                                                <div className="icon">
                                                    <img src={s.serviceIcon} alt="Icon" />
                                                </div>
                                                <div className="content">
                                                    <p className="title">
                                                        <h3 >{s.serviceTitle}</h3>
                                                        <Link to={`/service-edit/${s._id}`} className='btn btn-md  btn-gradient animation'>Edit Services</Link>
                                                    </p>
                                                    <p>{s.serviceDetails}</p>
                                                </div>
                                            </div>
                                        </div>)
                                    }





                                </div>
                            </div>
                        </section>





                    </div>
                </div>

            </section>

        </>
    );
};

export default ServicesSection;