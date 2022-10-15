import PostItem from "./PostItem.js";
import post from "./post.js"
const PostList = () => {
    return (`
            ${
        post.map(post => {
            return(PostItem(post));
        }).join('')
    }
`); }
export default PostList;