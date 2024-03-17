import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const UpdateBannerSection = () => {

    const [banner, setBanner] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/banner/${id}`)
            .then((res) => res.json())
            .then((info) => setBanner(info));
    }, [banner]);


    const handleBannerSection = (event) => {
        event.preventDefault();
        const bannerHeading = event.target.bannerHeading.value;
        const bannerText = event.target.bannerText.value;
        const bannerDetails = event.target.bannerDetails.value;
        const bannerImage = event.target.bannerImage.value;
       

        const bannerSection = {
            bannerHeading,
            bannerText,
            bannerDetails,
            bannerImage,
            
          
        };

        const url = `http://localhost:5000/update-banner/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bannerSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Banner is Updated');
            });
    };

    return (

        <>
            <HeaderBottom></HeaderBottom>
            <div>
                <section id="services" class="services-area pt-120 pb-90 fix" >
                    <div class="container mb-5">
                        <div class="row">

                        </div>
                        <div class="row">

                            <div class="col-lg-8 col-md-12 mb-3">
                                <h2> Update Banner</h2>



                                <form class="contact-form " onSubmit={handleBannerSection}>
                                    <div class="row">
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="bannerHeading" defaultValue={banner.bannerHeading} placeholder="Banner Heading One" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="bannerText" defaultValue={banner.bannerText} placeholder="Banner Text " required />
                                            </div>
                                        </div>
                                        
                                      
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="bannerDetails" defaultValue={banner.bannerDetails} placeholder="Banner Details" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="bannerImage" defaultValue={banner.bannerImage} placeholder="Banner Image" required />
                                            </div>
                                        </div>
                                        
                                        
                                        <div class="slider-btn">
                                            <button class="btn btn-md  btn-gradient animation" data-animation="fadeInRight" data-delay=".8s">Update Banner</button>
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

export default UpdateBannerSection;