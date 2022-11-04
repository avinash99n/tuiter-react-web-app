import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {faBell, faMessage, faBookmark, faUser, faListAlt,faStar} from "@fortawesome/free-regular-svg-icons";
import {faHome,faHashtag,faEllipsis} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const NavigationSidebar = (

) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">

            <li className="list-group-item">Tuiter</li>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <FontAwesomeIcon  icon={faHome} className="wd-icon-padding "/>   Home
            </Link>
            <Link to="/tuiter/explore-screen" className={`list-group-item ${active === 'explore-screen'  ?   'active':''}`}>
                <FontAwesomeIcon  icon={faHashtag} className="wd-icon-padding "/> Explore
            </Link>
            <Link to="/" className="list-group-item">
                <FontAwesomeIcon  icon={faStar} className="wd-icon-padding "/> Labs
            </Link>
            {/*<a className={`list-group-item*/}
            {/*        ${active === 'home'?'active':''}`}>*/}
            {/*    Home*/}
            {/*</a>*/}
            {/*<a className={`list-group-item*/}
            {/*        ${active === 'explore'?'active':''}`}>*/}
            {/*    Explore*/}
            {/*</a>*/}
            <li className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <FontAwesomeIcon  icon={faBell} className="wd-icon-padding "/>  Notifications
            </li>
            <li className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <FontAwesomeIcon  icon={faMessage} className="wd-icon-padding "/>   Messages
            </li>
            <li className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <FontAwesomeIcon  icon={faBookmark} className="wd-icon-padding "/>  Bookmarks
            </li>
            <li className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <FontAwesomeIcon  icon={faListAlt} className="wd-icon-padding "/>  Lists
            </li>
            {/*<li className={`list-group-item*/}
            {/*        ${active === 'profile'?'active':''}`}>*/}
            {/*    <FontAwesomeIcon  icon={faUser} className="wd-icon-padding "/>   Profile*/}
            {/*</li>*/}
            <Link to="/tuiter/profile-screen" className={`list-group-item ${active === 'profile-screen'  ?   'active':''}`}>
                <FontAwesomeIcon  icon={faUser} className="wd-icon-padding "/> Profile
            </Link>
            <li className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <FontAwesomeIcon  icon={faEllipsis} className="wd-icon-padding "/>   More
            </li>
        </div>
    );
};
export default NavigationSidebar;