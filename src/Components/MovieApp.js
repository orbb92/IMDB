import MovieList from "./MovieList";
import SearchAutoComplete from "./SearchAutoComplete";
import '../CSS/MovieApp.css'
const MovieApp = () => {

console.log(window.location.origin)
    return (


        <>
            <div className='movieApp'>
            <SearchAutoComplete/>
            <MovieList/>
            </div>
        </>

    )
}


export default MovieApp