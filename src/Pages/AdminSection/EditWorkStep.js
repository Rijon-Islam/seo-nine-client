import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditWorkStep = () => {

    const [stepwork, setWork] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/worksec/${id}`)
            .then((res) => res.json())
            .then((info) => setWork(info));
    }, [stepwork]);


    const handleworkSection = (event) => {
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

        const url = `http://localhost:5000/update-worksec/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(workSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Work Section is Updated');
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
                        <div class="row">

                            <div class="col-lg-8 col-md-12">
                                <h2> Update Work Section</h2>



                                <form class="contact-form " onSubmit={handleworkSection}>
                                    <div class="row">
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="processImage" defaultValue={stepwork.processImage} placeholder="Work Image URL" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="processText" defaultValue={stepwork.processText} placeholder="Work Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="processHeading" defaultValue={stepwork.processHeading} placeholder="Work Heading" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="processDetails" defaultValue={stepwork.processDetails} placeholder="Work Details" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="pointOne" defaultValue={stepwork.pointOne} placeholder="Work Point One" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="pointOneDetails" defaultValue={stepwork.pointOneDetails} placeholder="Work Point One Details" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="pointTwo" defaultValue={stepwork.pointTwo} placeholder="Work Point Two" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="pointTwoDetails" defaultValue={stepwork.pointTwoDetails} placeholder="Work Point Two Details" required />
                                            </div>
                                        </div>
                                      
                                        <div class="slider-btn">
                                            <button class="btn btn-md  btn-gradient animation" data-animation="fadeInRight" data-delay=".8s">Update Work section</button>
                                        </div>
                                    </div>

                                </form>

                            </div>


                        </div>
                    </div>
                </section>
            </div>
        </>

    );
};

export default EditWorkStep;