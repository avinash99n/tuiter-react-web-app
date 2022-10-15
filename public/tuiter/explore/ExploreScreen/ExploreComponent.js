import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
                       
<!--<div class="col-6 wd-page pt-2 col-sm-10 col-md-10 col-lg-6 col-xxl-6 col-xl-6 col-xs-10 border-top-0">-->
<!--<div class="wd-padding-left-container">-->
<div class="input-icons">
    <i class="fa fa-search fa-lg icon" aria-hidden="true"></i>
    <input class="input-field" name="searchinput" placeholder="Search Twitter">

        <a href="explore-settings.html" class="wd-settings">
<!--            <i class="fa fa-thin fa-gear wd-gear"></i>-->
    <span style="color:rgb(29,161,242);padding-left: 12px">&#9881;</span>
        </a>
</div>

<!--<div class="col wd-width-percent wd-set-nav">-->

<!--    <ul class="nav nav-pills col-12 col-xl-12">-->
<!--        <li class="nav-item">-->
<!--            <a class="nav-link active wd-override-active wd-grey" href="../for-you.html">For-you</a>-->
<!--        </li>-->
<!--        <li class="nav-item">-->
<!--            <a class="nav-link wd-grey" href="../trending.html">Trending</a>-->
<!--        </li>-->
<!--        <li class="nav-item">-->
<!--            <a class="nav-link wd-grey d-xs-none d-sm-none d-md-block" href="../trending.html">COVID - 19</a>-->
<!--        </li>-->
<!--        <li class="nav-item">-->
<!--            <a class="nav-link wd-grey" href="../news.html">News</a>-->
<!--        </li>-->
<!--        <li class="nav-item">-->
<!--            <a class="nav-link wd-grey" href="../sports.html">Sports</a>-->
<!--        </li>-->
<!--        <li class="nav-item">-->
<!--            <a class="nav-link wd-grey d-xs-none d-sm-none d-md-block" href="../entertainment">Entertainment</a>-->
<!--        </li>-->
<!--    </ul>-->



<!--</div>-->


<!--</div>-->
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                              <li class="nav-item">
            <a class="nav-link active " href="../for-you.html">For-you</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="../trending.html">Trending</a>
        </li>
        <li class="nav-item">
            <a class="nav-link  d-xs-none d-sm-none d-md-block" href="../trending.html">COVID - 19</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="../news.html">News</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="../sports.html">Sports</a>
        </li>
        <li class="nav-item">
            <a class="nav-link  d-xs-none d-sm-none d-md-block" href="../entertainment">Entertainment</a>
        </li>
           </ul>
           <div>
        <img src="../../images/starship.jpeg" class="wd-width-more pt-2" alt = "Responsive image">
        <div class="wd-overlap">
<!--            <div class="wd-topic-overlap">Technology . Trending  </div>-->
            <h4 class="wd-bold wd-white">SpaceX's Starship</h4>
        </div>
        </div>
       
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
