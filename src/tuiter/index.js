
import NavigationSidebar from "./navigation-sidebar";

import ExploreComponent from "./explore";
import WhoToFollowList from "./who-to-follow-list";
import HomeComponent from "./home";
import '../vendors/bootstrap/bootstrap.min.css';
import {Routes, Route} from "react-router";

import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import tuitReducer from "./reducers/tuit-reducer";
import ProfileComponent from "./profile";
import profileReducer from "./reducers/profile-reducer";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer,tuitList:tuitReducer, profileReducer}});


function Tuiter() {

    return (
    <Provider store={store}>
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore-screen"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <Routes>
                    <Route path="" element={<ExploreComponent/>}></Route>
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="explore-screen" element={<ExploreComponent/>}/>
                    <Route path ="profile-screen" element={<ProfileComponent/>}/>
                </Routes>
                {/*<ExploreComponent/>*/}
                {/*<HomeComponent/>*/}
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
    </Provider>


        // <div>
        //     <Nav/>
        //     <NavigationSidebar active="home"/>
        //
        //
        //     <WhoToFollowListItem who={{
        //         userName: 'NASA', handle: 'NASA',
        //         avatarIcon: 'nasa.png',
        //     }}/>
        //     <WhoToFollowListItem who={{
        //         userName: 'Tesla', handle: 'tesla',
        //         avatarIcon: 'tesla.png',
        //     }}/>
        //     <WhoToFollowListItem who={{
        //         userName: 'SpaceX', handle: 'SpaceX',
        //         avatarIcon: 'spacex.png',
        //     }}/>
        //     <PostSummaryList post={{ topic: "Space", userName: "SpaceX",
        //         title: "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        //         time: "2h",   image: "tesla.png" }}/>
        //
        //     <PostSummaryList post={{topic: "Space",   userName: "SpaceX",
        //         title: "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        //         "time": "2h",   image: "spacex.png"}}/>
        //
        //     <PostSummaryList post={{ topic: "Energy",  userName: "Tesla",
        //         title: "Tesla FSD finally makes driving obsolete. After years of delay, Tesla Full Self Driving can drive you to work while you work, play, or sleep",
        //         time: "4d",   image: "tesla.png" }}/>
        //     <h1>Tuiter</h1>
        // </div>
    )
}

export default Tuiter