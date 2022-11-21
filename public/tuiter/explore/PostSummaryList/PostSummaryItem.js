

const PostSummaryItem =(post) =>{
    return(`
  <div class="row p-3">
      <div class="col-10">
 <div class="row text-secondary wd-lightgrey">
              ${post.topic}
            </div>
            <div class="row d-inline-block">
                <p class="wd-topic-header"><span class="fw-bolder wd-move-right wd-white">${post.userName}</span> <i class="fa fa-check-circle wd-white"></i> <span
                        class="text-secondary wd-lightgrey">${post.time}</span></p>
            </div>
        <div class="row fw-bold wd-margin-top wd-white">
                  ${post.title}
           </div>
           <!-- <div class="row wd-margin-top text-secondary wd-lightgrey">
                 number of tweets here (post.tweets)
             </div> -->
</div>
        <div class="col-2">
            <img src= ${post.image}
                 class="img-fluid wd-img-explore"/>
</div>
</div>
<hr>
`)
}

export default PostSummaryItem