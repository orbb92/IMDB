import {TextField} from "@mui/material";
import {Autocomplete} from "@mui/material";
import {useDispatch, useSelector} from 'react-redux'
import {setSearchedMovie, setMovieList, getMovieListAsync} from "../store/slices/movies";
import axios from 'axios'
import React, {useState, useEffect,useMemo} from 'react'
import '../CSS/SearchBar.css'

const SearchAutoComplete = () => {
    const dispatch = useDispatch()
    const movieList = useSelector(state => state.movies.list)

    const [searchedData, setSearchedData] = useState([])
    const [text, setText] = useState({title: ''})
    const getSearchData = async (e, input, reason) => {

        setText(text=>{
            text.title=input
            return text
        })
        if (text.title === '') {
            setSearchedData([])
            dispatch(getMovieListAsync())

        } else {

                const res = await axios.get(`${window.location.origin}/movies/${input}`)
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
                    value={text}
                    onInputChange={debounceSearch}
                    onChange={async (e, element, reason) => {

                        dispatch(setSearchedMovie(element))
                        dispatch(setMovieList([element || {}]))
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