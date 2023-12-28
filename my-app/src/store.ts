import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "./Slice/videoSlice";
import imageSlice from "./Slice/imageSlice";
import formSlice from "./Slice/formSlice";

const store = configureStore({
    reducer:{
        video: videoSlice,
        image: imageSlice, // reducer contains address of slide reducer
        form: formSlice
    }
})

export default store