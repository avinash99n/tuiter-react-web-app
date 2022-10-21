import React from "react";
import PostItem from "./postItem.js"
import posts from "./post.json"


const PostList = () => {
    return (


<div>
        { posts.map(post =>

                    <PostItem post ={post}/>

            )

        }

</div>


    ); }
export default PostList;