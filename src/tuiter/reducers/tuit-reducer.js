import { createSlice } from "@reduxjs/toolkit";
import tuitArray from "../data/tuit.json";

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "/images/spacex.png",
};
const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitSlice = createSlice({
    name: "tuitList",
    initialState: tuitArray,
    reducers: {deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },

        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        }
    }

});
export const {createTuit,deleteTuit} = tuitSlice.actions;
export default tuitSlice.reducer;