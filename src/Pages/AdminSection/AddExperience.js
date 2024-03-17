import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const AddExperience = () => {

    const [exprience, setExperience] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/experiences`)
            .then((res) => res.json())
            .then((info) => setExperience(info));
    }, []);



    const handleExperienceSection = (event) => {
        event.preventDefault();

        const experienceText = event.target.experienceText.value;
        const experienceHeading = event.target.experienceHeading.value;
        const experienceImage = event.target.experienceImage.value;






        const experienceSection = {

            experienceText,
            experienceHeading,
            experienceImage,




        };

        const url = `http://localhost:5000/add-experience`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(experienceSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Experience Section is Updated');
            });
    };



    return (
        <>
            <HeaderBottom></HeaderBottom>
          


            <section id="services" class="services-area pt-120 pb-90 fix mb-100" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">



                            <h2 className='mt-5 '>Add Recent Project</h2>
                            <form class="contact-form mb-100" onSubmit={handleExperienceSection}>
                                <div class="row">

                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="experienceText" placeholder="Project Text" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="experienceHeading" placeholder="Project Heading" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="experienceImage" placeholder="Project Image URL" required />
                                        </div>
                                    </div>



                                    <div class="slider-btn">
                                        <button class="btn btn-md  btn-gradient animation" data-animation="fadeInRight" data-delay=".8s">Add Recent Project </button>
                                    </div>
                                </div>

                            </form>




                        </div>

                        <section className="service-section section-gap" id="service-sec mb-100" >
                            <div className="container">
                               

                                <div className="row justify-content-center">

                                    {
                                        exprience.map(s => <div className="col-lg-4 col-sm-6 wow fadeInUp">
                                            <div className="iconic-box icon-left mt-30">
                                                <div className="icon">
                                                    <img src={s.experienceImage} alt="Icon" />
                                                </div>
                                                <div className="content">
                                                    <p className="title">
                                                        <h3 >{s.experienceHeading}</h3>
                                                        <Link to={`/edit-experience/${s._id}`} className='btn btn-md  btn-gradient animation'>Edit Services</Link>
                                                    </p>
                                                    <p>{s.experienceText}</p>
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

export default AddExperience;