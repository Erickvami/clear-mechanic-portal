import React from 'react';
import MovieList from '../../components/movie-list';
import './index.scss'
import { Stack } from '@mui/material';
import SearchMovieBar from '../../components/search-movie-bar';
import { Genre } from '../../models/genre.model';
import { useLoaderData } from 'react-router-dom';

const MoviesPage: React.FC = () => {
    const { genres } = useLoaderData() as { genres: Genre[] };

    return (<Stack className='movies page' alignItems={'center'}>
        <SearchMovieBar genres={genres} />
        <MovieList />
    </Stack>)
}

export default MoviesPage;