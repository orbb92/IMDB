import MovieList from "./MovieList";
import SearchAutoComplete from "./SearchAutoComplete";
import '../CSS/MovieApp.css'
const MovieApp = () => {


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