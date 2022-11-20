import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle,} from '@fortawesome/free-regular-svg-icons'
import React from "react";
import TuitStats from "./tuit-stats";
import "./tuit-list.css"
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuit-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import "../post-list/postitem.css";

const TuitListItem = (
    {
        tuit = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "https://pbs.twimg.com/profile_images/1489375145684873217/3VYnFrzx_400x400.jpg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }


    return (

        <>
<div className="tuit-list">
        <li className="list-group-item" style ={{width:600}} >

                <div className="col-12">
            < img src={tuit.image} className="wd-profile-img" alt="None"/>
            <div className="wd-author-name">{tuit.username}

                <FontAwesomeIcon  icon={faCheckCircle} className="wd-icon-padding wd-verified-icon"/>
            </div>

                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>

            <div className="wd-author-handle"> {tuit.handle} . {tuit.time} </div>


            <div className="wd-tweet-content">
                {tuit.tuit}

                <TuitStats tuit={tuit}/>


                </div>
            </div>
        </li>

</div>

        </>  );
};



export default TuitListItem;