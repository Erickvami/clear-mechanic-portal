import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../models/movie.model';
import { getAllMovies, searchMovies } from '../../services/movies.service';

interface MoviesState {
  data: Movie[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  data: null,
  loading: false,
  error: null,
};

export const getMovies = createAsyncThunk(
  'movies/getMovies',
  async (params?: ({query: string, genres: string[] })) => {
    if (!params || (!params.query && !params.genres.length)) 
        return await getAllMovies();
    
    return await searchMovies(params.query, params.genres);
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Movie[] | null>) {
        state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch weather data';
      });
  },
});

export default moviesSlice;