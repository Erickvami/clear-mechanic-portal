import {Skeleton, Stack } from '@mui/material';
import React, { lazy, Suspense } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Movie } from '../../models/movie.model';
import './index.scss';

const MoviePage: React.FC = () => {
    const { movie } = useLoaderData() as { movie: Movie };
    const MovieDetails = lazy(() => import('../../components/movie-details'))

    return (<Stack className='movie page' justifyContent={'center'} alignItems={'center'}>
        <Suspense 
        fallback={<Stack direction={'column'} gap={1}>
                <Skeleton variant="rectangular" width={300} height={60} />
                <Skeleton variant="rectangular" width={300} height={60} />
                <Skeleton variant="rectangular" width={300} height={60} />
            </Stack>}
        >
            <MovieDetails movie={movie} />
        </Suspense>
    </Stack>)
}

export default MoviePage;