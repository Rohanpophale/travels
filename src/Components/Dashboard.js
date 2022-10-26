import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

    const navigate = useNavigate()
    const [userData, setUserData] = useState({})

    const callDashboard = async () => {
        try {
            const res = await fetch('http://localhost:4000/app/dashboard', {
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json()
            // console.log(data)
            setUserData(data)
            // navigate('/dashboard')


            if (res.status !== 200) {
                const error = new Error(res.error)
                throw error
            }
        }
        catch (error) {
            console.log(error);
            navigate('/login')
        }
    }
    useEffect(() => {
        callDashboard()
    })
    return (

        <>
            <section className="h-100 gradient-custom-2" style={{backgroundColor: "#ECF39E"}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100" style={{backgroundColor: "#ECF39E"}}>
                        <div className="col col-lg-9 col-xl-10">
                            <div className="card">
                                <div className="rounded-top  text-white d-flex flex-row" style={{backgroundColor: "#132A13", height:"200px"}}>
                                    <div className="ms-4 mt-5 d-flex flex-column" style={{width: "200px"}}>
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                            alt="Generic placeholder " className="img-fluid img-thumbnail mt-4 mb-2"
                                            style={{width: "200px", zIndex: "1"}} />
                                            {/* <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark"
                                                style={{zIndex: "1"}}>
                                                Edit profile
                                            </button> */}
                                    </div>
                                    <div className="ms-3" style={{marginTop: "130px"}}>
                                        <h5 style={{color: "#ECF39E"}}>Welcome, {userData.name}!</h5>
                                        <p style={{fontSize: "15px"}}>{userData.address}</p>
                                    </div>
                                </div>
                                <div className="p-4 text-black" style={{backgroundColor: "#132A13"}}>
                                </div>
                                <div className="card-body p-4 text-black" style={{backgroundColor: "#132A13"}}>
                                    {/* <div className="mb-5">
                                        <p className="lead fw-normal mb-1">About</p>
                                        <div className="p-4" style={{backgroundColor: "#f8f9fa"}}>
                                            <p className="font-italic mb-1">Web Developer</p>
                                            <p className="font-italic mb-1">Lives in New York</p>
                                            <p className="font-italic mb-0">Photographer</p>
                                        </div>
                                    </div> */}
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="lead fw-normal mb-0 py-3">Recent photos</p>
                                        {/* <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p> */}
                                    </div>
                                    <div className="row g-2">
                                        <div className="col mb-2">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                                                alt=" 1" className="w-100 rounded-3" />
                                        </div>
                                        <div className="col mb-2">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                                alt=" 1" className="w-100 rounded-3" />
                                        </div>
                                    </div>
                                    <div className="row g-2">
                                        <div className="col">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                                                alt=" 1" className="w-100 rounded-3" />
                                        </div>
                                        <div className="col">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                                                alt=" 1" className="w-100 rounded-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )

}