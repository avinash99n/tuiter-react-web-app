import React from "react";
import NavigationSidebar from "../navigation-sidebar";
import PostSummaryList from "../post-summary-list";
import PostList from "../post-list/postList";


const HomeComponent = () =>{

    return(
        <div className="row mt-2">



            <div className="col-6 col-sm-10 col-md-10 col-lg-6 col-xxl-6 col-xl-6 col-xs-10 wd-mr-left mt-3 wd-move-l">
                <PostList/>
            </div>

        </div>
    );

}

export default HomeComponent;