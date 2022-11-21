const PostItem = (post)=>{
    return(`
    
    
    <div>
    <img src=${post.avatarIcon} class="wd-profile-img">
    <i class="fa fa-ellipsis-h fa-lg wd-more-icon"></i>
    <div class="wd-author-name">${post.userName} <i class="fa fa-check-circle wd-white"></i></div>
    <div class="wd-author-handle"> ${post.handle} . ${post.time} </div>
    <div class="wd-tweet-content">
 ${post.caption}
    <div>
        <img src="${post.image}" class="wd-tweet-image">
        <div class="wd-tweet-image-content">
        <p class="wd-tweet-image-title">${post.title}</p>
        <p class="wd-tweet-image-desc">${post.content}</p>
        </div>
    </div>
        <div class="wd-tweet-actions">

                <form action="#">
                    <button class="wd-action">
                        <i class="fa fa-thin fa-comment" > <p class="wd-action-count">${post.comments}</p></i>
                    </button>
                </form>


                <form action="#">
                    <button class="wd-action">
                        <i class="fa fa-thin fa-retweet" aria-hidden="true"> <p class="wd-action-count">${post.retweets}</p></i>
                    </button>
                </form>


            <form action="#">
                <button class="wd-action">
                    <i class="fa fa-thin fa-heart wd-active-action" aria-hidden="true"> <p class="wd-action-count">${post.likes}</p></i>
                </button>
            </form>


            <form action="#">
                <button class="wd-action">
                    <span class="fa fa-thin fa-upload" aria-hidden="true"> </span>
                </button>
            </form>



        </div>
    </div>

</div>
    
    `);
}

export default PostItem;