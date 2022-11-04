import React from "react";
// import whoArray from '../data/who.json';
import WhoToFollowListItem
    from "./who-to-follow-list-item";
import {useSelector} from "react-redux";
const WhoToFollowList = () => {
    const whoArray = useSelector(
        (state) => state.who);

    return(

        <ul className="list-group">
            <h3>Who to Follow</h3>
            {
                whoArray.map(who =>
                    <WhoToFollowListItem who={who}/>)
            }
        </ul>
    );
};

export default WhoToFollowList;