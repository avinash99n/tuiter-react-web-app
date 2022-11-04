import { createSlice } from "@reduxjs/toolkit";
import tuitArray from "../data/tuit.json";
const tuitSlice = createSlice({
    name: "tuitList",
    initialState: tuitArray
});

export default tuitSlice.reducer;