// build base api url for this service
const API_BASE_URL = process.env.REACT_APP_API + '/movies';

export const getAllMovies = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const searchMovies = async (query: string, genres: string[] = [], includeDeleted: boolean = false) => {
  try {
    const url = new URL(`${API_BASE_URL}/search/${query}`);
    if (genres.length > 0) {
      url.searchParams.append('genres', genres.join(','));
    }
    if (includeDeleted) {
      url.searchParams.append('includeDeleted', 'true');
    }

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error('Failed to search movies');
    }
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

export const getMovieById = async (id: number, hasActors?: boolean, hasGenres?: boolean) => {
    try {
        const queryParams = new URLSearchParams({
            ...(hasActors !== undefined && { hasActors: hasActors.toString() }),
            ...(hasGenres !== undefined && { hasGenres: hasGenres.toString() })
        });

        const response = await fetch(`${API_BASE_URL}/${id}?${queryParams}`);
        if (!response.ok) {
            throw new Error('Failed to fetch movie');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};
