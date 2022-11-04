import React from "react";
import {useSelector} from "react-redux";

import TuitListItem
    from "./tuit-list-item";

const TuitList = () => {
    const tuitArray = useSelector(
        (state) => state.tuitList);
    console.log(tuitArray);
    return (

            <ul className="list-group">
                {

                tuitArray.map( tuit =>
                <TuitListItem tuit ={tuit}/>)

                }
            </ul>

    );
};

export default TuitList;