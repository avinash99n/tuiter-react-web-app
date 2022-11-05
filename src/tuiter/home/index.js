import React from "react";
import TuitList from "../tuits-list/index";

import WhatsHappening from "./whats-happening";


const HomeComponent = () =>{

    return(

        <>
            <h4 style={{color:"black"}}>Home</h4>
    <div className="row mt-2 ">
            <WhatsHappening/>

            <div className="col-6 col-sm-10 col-md-10 col-lg-6 col-xxl-6 col-xl-6 col-xs-10 wd-mr-left mt-3 wd-move-l">
                <TuitList/>
            </div>

        </div>
            </>
    );

}

export default HomeComponent;