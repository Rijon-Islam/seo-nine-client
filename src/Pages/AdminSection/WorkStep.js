import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const WorkStep = () => {

    const [stepwork, setWork] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/worksec`)
            .then((res) => res.json())
            .then((info) => setWork(info));
    }, []);


    const handleWorkSection = (event) => {
        event.preventDefault();
        const processImage = event.target.processImage.value;
        const processText = event.target.processText.value;
        const processHeading = event.target.processHeading.value;
        const processDetails = event.target.processDetails.value;
        const pointOne = event.target.pointOne.value;
        const pointOneDetails = event.target.pointOneDetails.value;
        const pointTwo = event.target.pointTwo.value;
        const pointTwoDetails = event.target.pointTwoDetails.value;




        const workSection = {
            processImage,
            processText,
            processHeading,
            processDetails,
            pointOne,
            pointOneDetails,
            pointTwo,
            pointTwoDetails,


        };

        const url = `http://localhost:5000/add-worksec`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(workSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Work Step is Updated');
            });
    };



    return (
        <>
            <HeaderBottom></HeaderBottom>
            <div>
                <section id="services" class="services-area pt-120 pb-90 fix mb-5" >
                    <div class="container">
                        <div class="row">

                        </div>
                        <div class="col-lg-8 col-md-12">
                            <h2> Update Working Process </h2>

                            {
                                stepwork.length === 1 &&
                                <>
                                    {
                                        stepwork.map(b =>
                                            <Link className='btn btn-md  btn-gradient animation' to={`/edit-work/${b._id}`}>
                                                Update Work Section
                                            </Link>
                                        )
                                    }
                                </>
                            }
                            {
                                stepwork.length === 0 &&


                                <form class="contact-form " onSubmit={handleWorkSection}>
                                    <div class="row">

                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="processImage" placeholder="Process Iamge" required />
                                            </div>
                                        </div>
                                        
                            

                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="processText" placeholder="Process Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="processHeading" placeholder="Process Heading" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="processDetails" placeholder="Process Details" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="pointOne" placeholder=" Point One Title" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="pointOneDetails" placeholder=" Point One Details " required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="pointTwo" placeholder="Point Two Title" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="pointTwoDetails" placeholder=" Point Two Details" required />
                                            </div>
                                        </div>
                                     
                                    
                                        <div class="slider-btn">
                                            <button class="btn btn-md  btn-gradient animation" data-animation="fadeInRight" data-delay=".8s"> Add Working </button>
                                        </div>
                                    </div>

                                </form>
                            }



                        </div>
                       

                        
                    </div>
                </section>
            </div>
        </>

    );
};

export default WorkStep;