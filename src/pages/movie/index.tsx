import { Avatar, Card, CardActionArea, CardContent, CardHeader, CardMedia, Chip, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from '../../models/movie.model';
import { getMovieById } from '../../services/movies.service';
import './index.scss';

const MoviePage: React.FC = () => {
    const { movie_id } = useParams<{ movie_id: string }>();
    const [movie, setMovie] = useState<Movie | null>(null)
    useEffect(() => {
        if (!isNaN(Number(movie_id)))
            getMovieById(Number(movie_id), true, true)
                .then(m => setMovie(m));
    }, [movie_id]);

    return (<Stack className='movie page' justifyContent={'center'} alignItems={'center'}>
        {   
            movie && 
            <Card>
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
            </Card>
        }
    </Stack>)
}

export default MoviePage;