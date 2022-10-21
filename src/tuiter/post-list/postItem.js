import React from "react";
import '../post-list/postitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle,faEllipsis,faComment,faRetweet,faHeart,faUpload} from '@fortawesome/free-solid-svg-icons'

const PostItem = (
    {
        post = {
            "avatarIcon": "https://pbs.twimg.com/profile_images/1489375145684873217/3VYnFrzx_400x400.jpg",
            "userName": "Elon Musk",
            "handle" :"@elonmusk",
            "time": "23h",
            "caption":"Celebrating our one millionth 4680 cell in January",
            "image": "https://pbs.twimg.com/media/FL5vqDMWUA8qyMp?format=jpg&name=900x900",
            "title": "It is a long established fact that a reader will",
            "content":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters . . .",
            "comments":"4.2k",
            "retweets":"3.5k",
            "likes":"37.5k"
        }
    }
) => {
const length_title = post.title.length
    const length_content = post.content.length
    return (
        
<>


    < img src={post.avatarIcon} className="wd-profile-img"/>
    <div className="wd-author-name">{post.userName}

        <FontAwesomeIcon  icon={faCheckCircle} className="wd-icon-padding"/>
    </div>
    <div className="wd-author-handle"> {post.handle} . {post.time} </div>
        <div className="wd-more-icon-bookmark">    <FontAwesomeIcon  icon={faEllipsis}></FontAwesomeIcon>
        </div>

    <div className="wd-tweet-content">
 {post.caption}
    <div>
        <img src={post.image} className="wd-tweet-image"/>
        <div className="wd-tweet-image-content">

            { length_title>0 &&
                <p className="wd-tweet-image-title">{post.title}</p>
            }
            { length_content >0 &&
                <p className="wd-tweet-image-desc">{post.content}</p>
            }

        </div>
    </div>
        <div className="wd-tweet-actions">

                <form action="#">
                    <button className="wd-action">
                        <FontAwesomeIcon icon={faComment} ></FontAwesomeIcon> <p className="wd-action-count">${post.comments}</p>
                    </button>
                </form>


                <form action="#">
                    <button className="wd-action">
                        <FontAwesomeIcon icon={faRetweet} aria-hidden="true"> </FontAwesomeIcon> <p className="wd-action-count">${post.retweets}</p>
                    </button>
                </form>


            <form action="#">
                <button className="wd-action">
                    < FontAwesomeIcon icon={faHeart} className="wd-active-action" aria-hidden="true"> </FontAwesomeIcon> <p className="wd-action-count">${post.likes}</p>
                </button>
            </form>


            <form action="#">
                <button className="wd-action">
                    <FontAwesomeIcon icon={faUpload} aria-hidden="true"> </FontAwesomeIcon>
                </button>
            </form>



        </div>
    </div>



          </>  );
              };


export default PostItem;