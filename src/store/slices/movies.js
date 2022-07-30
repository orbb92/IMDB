import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        searchedMovie:{},
        movieList: [],
        detailedMovie:{},
        error: null

    },
    reducers: {
        setSearchedMovie:(state,action)=>{
            state.searchedMovie = action.payload
        },
        setMovieList:(state,action)=>{
            state.movieList=action.payload
        }

    },
    extraReducers: (builder) => {
        builder

            .addCase(getMovieListAsync.fulfilled, (state, action) => {

                state.movieList = action.payload;
            })

            .addCase(getMovieListAsync.rejected, (state, action) => {

                state.error = 'Couldnt retrive movie list data'
            })

            .addCase(getDetailedMovieAsync.fulfilled, (state, action) => {

                state.detailedMovie = action.payload;
            })

            .addCase(getDetailedMovieAsync.rejected, (state, action) => {

                state.error = 'Couldnt retrive movie details data'
            })

    },
})

export const getMovieListAsync = createAsyncThunk('getMovieList', async () => {

    const res = await axios.get(`http://localhost:5000/movies`)

    return res.data
})
export const getDetailedMovieAsync = createAsyncThunk('getMovieDetail', async (id) => {

    const res = await axios.get(`http://localhost:5000/movies/details/${id}`)

    return res.data
})
export const {  setSearchedMovie,setMovieList } = movieSlice.actions
export default movieSlice.reducer