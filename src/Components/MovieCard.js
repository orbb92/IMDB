import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {getDetailedMovieAsync} from "../store/slices/movies";
import {useDispatch} from "react-redux";
import '../CSS/MovieCard.css'
import MovieModal from "./MovieModal";
const MovieCard = (props) =>{
    const dispatch = useDispatch()
    const handleOpen =  async () => {

     await  dispatch( getDetailedMovieAsync(props.movie.id))

        props.open()
    };

    var cardStyle = {
        display: 'block',
        width: '13vw',
        transitionDuration: '0.3s',
        cursor:'pointer'

    }

    return (<>

        <div className='movieCard'>
        <Card style={cardStyle} onClick={handleOpen}>
            <CardMedia
                component="img"
                image={props.movie.image}


            />
            <CardContent sx={{}}>
                <Typography gutterBottom variant="h7" component="div">
                    {props.movie.title}
                </Typography>
                <Typography style={{fontSize:'14px'}} color="text.secondary">
                    Release date: {props.movie.releaseDate}
                </Typography>
            </CardContent>

        </Card>
        </div>

    </>)

}

export default MovieCard