import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "./Slice/videoSlice";
import imageSlice from "./Slice/imageSlice";
import formSlice from "./Slice/formSlice";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig ={
    key: "root",
    version: 1,
    storage
}

const reducer = combineReducers({
    video: videoSlice,
    image: imageSlice, // reducer contains address of slide reducer
    form: formSlice
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer
})

export default store