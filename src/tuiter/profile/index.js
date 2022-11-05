import React from "react";
import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import "./profile.css";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark,faMap,faCalendarDays} from "@fortawesome/free-regular-svg-icons";
import{faLocationDot,faCake} from "@fortawesome/free-solid-svg-icons"

const ProfileComponent = () =>{
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const profile = useSelector((state)=> state.profileReducer);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch({ type: "set-parameter", changeState: "profile" });
    // });

return (

      <div className="col-12 mt-2">

          <h4 className="fw-bold d-inline" style={{color:'black'}}>{profile[0].firstName} {profile[0].lastName}</h4>
          <p className="wd-handle-one wd-grey"> 6,114 Tweets</p>
          <div className="wd-banner">
          <img src={profile[0].bannerPicture} className="wd-img-one w-100"/>
          <img src={profile[0].profilePicture} className=" rounded-circle wd-img wd-profile-pic"/>
          </div>
          <div className ="pt-3">
              <Link to="/tuiter/profile-screen/edit-profile">
                  <button
                      className="btn btn-secondary float-end rounded-pill pt-2"
                      style={{ backgroundColor: "transparent",color:"black" }}>
                      Edit Profile
                  </button>
              </Link>
          </div>

          <div className="pt-5">
              <h4 className="fw-bold pt-2" style={{color:'black'}}>{profile[0].firstName} {profile[0].lastName}</h4>
              <p className="wd-handle-profile wd-grey">@{profile[0].handle}</p>
              <p className="wd-bio-one wd-white" style={{marginBottom:4}}>{profile[0].bio}</p>
          </div>

          <div className="pt-1">
              <div className="d-inline float-left p-1">
                  <FontAwesomeIcon  icon={faLocationDot} className="wd-icon-padding "></FontAwesomeIcon>
                  { profile[0].location + "   "}

              </div>
              <div className= "d-inline float-left p-1">
                  <FontAwesomeIcon  icon={faCake} className="wd-icon-padding "></FontAwesomeIcon>
                      {"  Born " +new Date(profile[0].dateOfBirth + " 4:00:00").toLocaleDateString(undefined,
                      {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                      })}
              </div>
              <div className="d-inline float-left p-1">
                  <FontAwesomeIcon  icon={faCalendarDays} className="wd-icon-padding "></FontAwesomeIcon>

                  {" Joined " +months[parseInt(profile[0].dateJoined.split("/")[0]) - 1] +", " +
                      profile[0].dateJoined.split("/")[1]}
              </div>
          </div>

          <div className="pt-2">
              <div className="d-inline float-left p-1">
              <span className="fw-bold wd-white"> {profile[0].followingCount}</span>
              <span className="wd-grey wd-b"> Following</span>
              </div>
              <div className="d-inline float-left p-1 ">
              <span className="fw-bold wd-white wd-a"> {profile[0].followersCount  }</span>
              <span className="wd-grey wd-b"> Followers</span>
              </div>
          </div>

      </div>

)
}

export default ProfileComponent;