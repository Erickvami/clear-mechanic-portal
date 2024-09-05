import { LoaderFunction } from 'react-router-dom';
import { getMovieById } from '../../services/movies.service';

export const movieLoader: LoaderFunction = async ({ params }) => {
  const movieId = Number(params.movie_id);
  if (isNaN(movieId)) {
    console.log('not a number')
    window.location.href = '/notfound';
  }

  try {
    const movie = await getMovieById(movieId, true, true);
    return { movie };
  } 
  catch (error) {
    console.log(error);
    window.location.href = '/notfound';
  }
};