import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
const NavigationSidebar = (

) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <li className="list-group-item">Tuiter</li>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                Home
            </Link>
            <Link to="/tuiter/explore-screen" className={`list-group-item ${active !== 'home'  ?   'active':''}`}>
                Explore
            </Link>
            <Link to="/" className="list-group-item">
                Labs
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
                Notifications
            </li>
            <li className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                Messages
            </li>
            <li className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                Bookmarks
            </li>
            <li className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                Lists
            </li>
            <li className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                Profile
            </li>
            <li className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                More
            </li>
        </div>
    );
};
export default NavigationSidebar;