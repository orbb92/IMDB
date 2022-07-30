import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',

    backgroundColor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const MovieModal = (props) => {

    console.log(props.movie)

    return (
        <div>

            <Modal
                open={props.open}
                onClose={props.onClose}

            >
                <Box sx={style}>
                    <Typography variant="h5" component="h1">
                        Details for {props.movie.title}
                    </Typography>
                    <Typography style={{fontSize: '18px'}} color="text.secondary" sx={{mt: 2}} component="div">
                        <b>Overview:</b> {props.movie.overview}
                    </Typography>
                    <Typography style={{fontSize: '18px'}} color="text.secondary" sx={{mt: 2}} component="div">
                        <b>Genres:</b> {props.movie.genres?.map(gener=>{
                            return <span>{gener.name}, </span>
                    })}
                    </Typography>
                    <Typography style={{fontSize: '18px'}} color="text.secondary" sx={{mt: 2}} component="div">
                        <b>Budget:</b> {props.movie.budget}
                    </Typography>
                    <Typography style={{fontSize: '18px'}} color="text.secondary" sx={{mt: 2}} component="div">
                        <b>Revenue:</b> {props.movie.revenue}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default MovieModal