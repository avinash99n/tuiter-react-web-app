import post from "./post.js"
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = ()=>{
    return(`
    <div class="wd-postlist-border">
            ${
        post.map(post => {
            return(PostSummaryItem(post));
        }).join('')
    }
</div>`)
}

export default PostSummaryList