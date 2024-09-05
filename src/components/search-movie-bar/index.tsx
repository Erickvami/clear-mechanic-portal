import React, { useState } from 'react';
import { Card, Chip, IconButton, Stack } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { AppDispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../redux/slices/movies.slice';
import { Genre } from '../../models/genre.model';

const SearchMovieBar: React.FC<({genres: Genre[] | null})> = ({genres}) => {
    const dispatch: AppDispatch = useDispatch();
    const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            dispatch(getMovies({ query: event.currentTarget.value, genres: selectedGenres.map(g => g?.name ?? '')}));
        }
    };

    const onClear = () => {
        setSearchQuery('');
        setSelectedGenres([]);
        dispatch(getMovies({ query: '', genres: [] }));
    }

    const onGenreClick = (genre: Genre) => {
        setSelectedGenres((prevSelected) => {
            const updatedGenres = prevSelected.find(g => g.id === genre.id)
                ? prevSelected.filter(g => g.id !== genre.id)
                : [...prevSelected, genre];
            
            dispatch(getMovies({ query: searchQuery, genres: updatedGenres.map(g => g?.name ?? '') }));

            return updatedGenres;
        });
    };

    return (<Card className='search-movie-bar'>
        <div className='search-movie-bar-search'>
            <div className='search-movie-bar-search-icon-wrapper'>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                onKeyUp={onKeyUp}
                value={searchQuery}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => setSearchQuery(e.currentTarget.value)}
                className='search-movie-bar-search-input'
                
            />
            {searchQuery && (
                    <IconButton onClick={onClear} sx={{position: 'absolute', right: 0}}>
                        <ClearIcon />
                    </IconButton>
                )}
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