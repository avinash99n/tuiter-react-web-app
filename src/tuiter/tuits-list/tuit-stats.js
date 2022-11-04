import {useDispatch} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment,faHeart,faShareFromSquare} from '@fortawesome/free-regular-svg-icons'
import {faHeart as likeHeart,faRetweet} from '@fortawesome/free-solid-svg-icons'


const TuitStats = ({tuit}) =>{
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };

return (
    <>

        <div className="wd-tweet-actions">

            <form action="#">
                <button className="wd-action">
                    <FontAwesomeIcon icon={faComment} ></FontAwesomeIcon> <p className="wd-action-count">{tuit.replies}</p>
                </button>
            </form>


            <form action="#">
                <button className="wd-action">
                    <FontAwesomeIcon icon={faRetweet} aria-hidden="true"> </FontAwesomeIcon> <p className="wd-action-count">{tuit.retuits}</p>
                </button>
            </form>


            <form action="#">

                <span onCLick={likeTuit}>
                    <button className="wd-action">
                    {
                        tuit.liked &&
                        < FontAwesomeIcon icon={likeHeart} className="wd-active-action" aria-hidden="true"> </FontAwesomeIcon>
                    }
                    {
                        !tuit.liked &&
                        < FontAwesomeIcon icon={faHeart} aria-hidden="true"> </FontAwesomeIcon>
                    }
                    </button>


                    <p className="wd-action-count">{tuit.likes}</p>
                         </span>

            </form>


            <form action="#">
                <button className="wd-action">
                    <FontAwesomeIcon icon={faShareFromSquare} aria-hidden="true"> </FontAwesomeIcon>

                </button>
            </form>



        </div>
    </>
);
    }
    export default TuitStats;