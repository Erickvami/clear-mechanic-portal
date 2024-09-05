import { Avatar, Card, CardActionArea, CardContent, CardHeader, CardMedia, Chip, Stack, Typography } from '@mui/material';
import React from 'react';
import { Movie } from '../../models/movie.model';
import './index.scss';

const MovieDetails: React.FC<{movie: Movie}> = ({ movie }) => {

    return (<Card>
        <CardHeader 
            title={movie?.title}
        />
        <CardMedia
        component="img"
        height="350"
        image={movie?.imageURI ?? ''}
        alt={movie?.title}
        />
        <CardContent>
        <Typography variant='body2' color={'GrayText'}>
            {movie?.description}
        </Typography>
        </CardContent>
        <CardActionArea>
            <Stack padding={1} gap={2}>
                <div>
                    Genre: {movie?.genres?.map(g => 
                        <Chip 
                            label={g.name} 
                            variant='outlined'
                            size='small' 
                            clickable
                        />
                    )}
                </div>
                <Stack gap={1} direction={'column'}>
                    <strong>Actors:</strong>
                    <Stack direction={'column'} alignItems={'center'} gap={1}>
                    {movie?.actors?.map(g => 
                        <Chip 
                            avatar={<Avatar src={g?.imageURI ?? ''} alt='actor' sx={{minHeight: 50, minWidth: 50}} />}
                            label={g.name} 
                            variant='outlined'
                            size='medium' 
                            clickable
                            sx={{height: 55, maxWidth: 250}}
                        />
                    )}
                    </Stack>
                </Stack>
            </Stack>
        </CardActionArea>
    </Card>)
}

export default MovieDetails;