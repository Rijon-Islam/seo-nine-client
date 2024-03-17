import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';


const AddUser = () => {

    const [users, setUser] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then((res) => res.json())
            .then((info) => setUser(info));
    }, []);


    const handleUser = (event) => {
        event.preventDefault();
        const userEmail = event.target.userEmail.value;
        const userRole = event.target.userRole.value;



        const userAdded = {
            userEmail,
            userRole


        };

        const url = `http://localhost:5000/add-user`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userAdded),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('User Is Added');
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
                            <h3> Add Admin User Email </h3>

                            {
                                users.length === 1 &&
                                <>
                                    
                                            {users.map(a =>
                                                <Link className='btn btn-md  btn-gradient animation' to={`/admin-user/${a._id}`}> Update User</Link>)}
                                        
                                    
                                </>
                            }

                            {
                                users.length === 0 &&

                                <form className="contact-form " onSubmit={handleUser}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-name mb-20">
                                                <input className="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" name="userEmail" placeholder="User Email" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-name mb-20">
                                                <input className="form-control form-control-lg shadow-lg p-3 mb-5 bg-white rounded" hidden name="userRole" defaultValue='Admin' placeholder="User Role" required />
                                            </div>
                                        </div>
                                        <div className="slider-btn ">
                                            <button className="btn btn-md" data-animation="fadeInRight" data-delay=".8s"> Add User </button>

                                        </div>



                                    </div>



                                </form>
                            }


                        </div>


                    </div>
                </div>
            </section>
        </>
    );
};

export default AddUser;