import profileArray from "../profile/profile.json"
import {createSlice} from "@reduxjs/toolkit";

const profileData = (state = profileArray, action) => {
    switch (action.type) {
        case "EditProfile":
            const newProfile = { ...state, ...action.profile };
            console.log(newProfile);
            return newProfile;
        default:
            return state;
    }
};

export default profileData;