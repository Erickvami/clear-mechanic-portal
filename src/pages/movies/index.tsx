import React, { useEffect, useState } from 'react';
import MovieList from '../../components/movie-list';
import './index.scss'
import { Stack } from '@mui/material';
import SearchMovieBar from '../../components/search-movie-bar';
import { getAllGenres } from '../../services/genres.service';
import { Genre } from '../../models/genre.model';

const MoviesPage: React.FC = () => {
    const [genres, setGenres] = useState<Genre[] | null>([]);
    useEffect(() => {
        getAllGenres().then(g => setGenres(g));
    }, [])
    return (<Stack className='movies page' alignItems={'center'}>
        <SearchMovieBar genres={genres} />
        <MovieList />
    </Stack>)
}

export default MoviesPage;