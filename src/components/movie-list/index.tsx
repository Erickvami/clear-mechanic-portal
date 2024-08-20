import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { getMovies } from '../../redux/slices/movies.slice';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import MovieCard from '../movie-card';
import { Skeleton } from '@mui/material';

const MovieList: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const { data, loading } = useSelector((state: RootState) => state.movies);

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    return (<div className='movie-list'>
        <Grid2 container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}} gap={2} justifyContent={'center'}>
            {loading ? 
                <>
                    <Skeleton variant="rectangular" width={300} height={60} />
                    <Skeleton variant="rectangular" width={300} height={60} />
                    <Skeleton variant="rectangular" width={300} height={60} />
                </>:
                data?.map((movie) => <MovieCard key={movie.id} movie={movie} />)
            }
        </Grid2>
    </div>)
}

export default MovieList;