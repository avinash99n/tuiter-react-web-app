import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCamera, faXmark} from "@fortawesome/free-solid-svg-icons";
import {faCircleXmark} from "@fortawesome/free-regular-svg-icons"
import './profile.css';

const EditProfile =()=>{
    const profile = useSelector((state) => state.profileReducer);
    const [data, updateData] = useState(profile[0]);
console.log(data)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "set-parameter", changeState: "profile" });
    });
    return(
        <>
            <div className ="col-12 mt-2">
                <div style={{height: "10%"}}>
                    <Link to="/tuiter/profile-screen">
                        <FontAwesomeIcon  icon={faCircleXmark} className="wd-icon-padding "/>
                    </Link>
                    <h5 className="d-inline mt-2 ms-5" style={{color:"black"}}>Edit Profile</h5>
                    <Link to="/tuiter/profile-screen">
                        <button className="btn btn-light wd-save float-end rounded-pill" style={{backgroundColor:"black",color:"white"}} onClick={() => {
                            dispatch({ type: "EditProfile", profile: data });
                            <Navigate to="/tuiter/profile-screen"></Navigate>;}}>Save</button>
                    </Link>
                </div>
                <div className="position-relative">
                <div className="wd-banner">
                    <img src={profile[0].bannerPicture} className="wd-img-one w-100"/>
                    <div className="card-img-overlay">
                        <div className= "wd-over">
                            <FontAwesomeIcon icon={faCamera} ></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faXmark}  className="ms-4"></FontAwesomeIcon>
                        </div>
                    </div>
                    <img src={profile[0].profilePicture} className=" rounded-circle wd-img wd-profile-pic"/>
                    <div className="card-img-overlay">
                        <div className= "wd-over-profile-pic">
                            <FontAwesomeIcon icon={faCamera} ></FontAwesomeIcon>
                        </div>
                    </div>
                </div>

                </div>
                <div className="pt-5 mt-3">
                    <div className="form-floating pt-3">
                        <label >First Name</label>
                        <input
                            className="form-control"
                            id="firstName"
                            type="text" onChange={(event) => updateData({...data, firstName: event.target.value})}
                            value={data.firstName}/>
                    </div>
                    <div className="form-floating pt-3">
                        <label>Last Name</label>
                        <input
                            className="form-control "
                            id="lastName"
                            type="text" onChange={(event) => updateData({...data, lastName: event.target.value})}
                            value={data.lastName}/>
                    </div>

                    <div className="form-floating pt-3">
                        <label>Bio</label>
                        <textarea
                            className="form-control"
                            id="bio"
                            style={{height: "50%",}}
                            onChange={(event) => updateData({...data, bio: event.target.value})}
                            defaultValue={data.bio}/>
                    </div>
                    <div className="form-floating pt-3">
                        <label>Location</label>
                        <input
                            className="form-control "
                            id="location"
                            type="text" onChange={(event) => updateData({...data, location: event.target.value})}
                            value={data.location}/>
                    </div>

                    <div className="form-floating pt-3">
                        <label >Website</label>
                        <input
                            className="form-control"
                            id="website"
                            type="url" onChange={(event) => updateData({...data, website: event.target.value})}
                            value={data.website}/>
                    </div>

                    <div className="form-floating pt-3">
                        <label >Date of Birth</label>
                        <input
                            className="form-control"
                            id="dob"
                            type="date"
                            onChange={(event) =>
                                updateData({...data, dateOfBirth: event.target.value})
                            }
                            value={new Date(data.dateOfBirth).toISOString().split("T")[0]}
                        />

                    </div>


                </div>

            </div>
            </>
    )
}

export default EditProfile;