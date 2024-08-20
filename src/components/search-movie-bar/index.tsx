import React, { useState } from 'react';
import { Card, Chip, Stack, styled } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { AppDispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../redux/slices/movies.slice';
import { Genre } from '../../models/genre.model';

const SearchMovieBar: React.FC<({genres: Genre[] | null})> = ({genres}) => {
    const dispatch: AppDispatch = useDispatch();
    const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
    }));

    const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            dispatch(getMovies({ query: event.currentTarget.value, genres: selectedGenres.map(g => g?.name ?? '')}));
        }
    };

    const onGenreClick = (genre: Genre) => {
        setSelectedGenres((prevSelected) => {
            const updatedGenres = prevSelected.find(g => g.id === genre.id)
                ? prevSelected.filter(g => g.id !== genre.id)
                : [...prevSelected, genre];
            
            dispatch(getMovies({ query: '', genres: updatedGenres.map(g => g?.name ?? '') }));

            return updatedGenres;
        });
    };

    return (<Card className='search-movie-bar'>
        <div className='search-movie-bar-search'>
            <div className='search-movie-bar-search-icon-wrapper'>
                <SearchIcon />
            </div>
            <StyledInputBase
                placeholder="Search…"
                onKeyUp={onKeyUp}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
        <br></br>
        <Stack direction={'row'} gap={1}>
            {genres?.map(g => 
                <span key={g.id} onClick={() => onGenreClick(g)}>
                <Chip 
                    label={g.name} 
                    variant={selectedGenres.find(sg => sg.id === g.id) ? 'filled' : 'outlined'} 
                    clickable
                />
                </span>
            )}
        </Stack>
    </Card>)
}

export default SearchMovieBar;