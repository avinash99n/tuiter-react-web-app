import {useSelector,useDispatch} from "react-redux";
import React ,{useEffect} from "react";
import TuitListItem
    from "./tuit-list-item";

import {findTuitsThunk}
    from "../../services/tuits-thunks";

const TuitList = () => {

    const {tuits,loading} = useSelector(
        (state) => state.tuitList);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(findTuitsThunk())
    },[])
    return (

            <ul className="list-group">

                    {
                        loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }
                {
                    tuits.map(tuit =>
                        <TuitListItem tuit={tuit}/>)
                }


                {/*{*/}
                {/*    loading &&*/}
                {/*    <li className="list-group-item">*/}
                {/*        Loading...*/}
                {/*    </li>*/}
                {/*}*/}

            </ul>

    );
};

export default TuitList;