import {TextField} from "@mui/material";
import {Autocomplete} from "@mui/material";
import {useDispatch, useSelector} from 'react-redux'
import {setSearchedMovie, setMovieList} from "../store/slices/movies";
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import '../CSS/SearchBar.css'

const SearchAutoComplete = () => {
    const dispatch = useDispatch()
    const movieList = useSelector(state => state.movies.list)
    const [searchedData, setSearchedData] = useState([])
    const getSearchData = async (e) => {


        const res = await axios.get(`http://localhost:5000/movies/${e.target.value}`)

        if (e.target.value === '')

            setSearchedData([])
        else {
            setSearchedData(res.data)
            dispatch(setMovieList(res.data))

        }
    }
    const debounce = (func) => {
        let timer;
        return function (...args) {

            const context = this
            if (timer)
                clearTimeout(timer)
            timer = (setTimeout(() => {
                timer = null

                func.apply(context, args)
            }, 500))
        }
    }

    const debounceSearch = React.useCallback(debounce(getSearchData), [])
    return (


        <>
            <div className='searchBar'>

                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={searchedData}
                    sx={{width: '100%'}}
                    getOptionLabel={(movie) => {
                        return movie.title
                    }}

                    onInputChange={debounceSearch}
                    onChange={async (e, element) => {
                        console.log(element)
                        dispatch(setSearchedMovie(element))
                    }}
                    renderInput={(params) => {
                        return <TextField {...params} label="Movies"/>
                    }}
                />

            </div>
        </>
    )

}


export default SearchAutoComplete