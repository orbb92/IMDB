import {configureStore} from "@reduxjs/toolkit";
import movieReducer from './slices/movies'



export const store = configureStore({

    reducer:{
        movies:movieReducer
    }
})