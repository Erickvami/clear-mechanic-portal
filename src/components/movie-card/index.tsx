import React from 'react';
import { Movie } from '../../models/movie.model';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {

    return (<Card className='movie-card'>
        <CardActionArea href={`/movies/${movie.id}`}>
            <CardMedia
            component="img"
            height="350"
            image={movie.imageURI ?? ''}
            alt={movie.title}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {movie.title}
            </Typography>
            </CardContent>
        </CardActionArea>
    </Card>)
}

export default MovieCard;