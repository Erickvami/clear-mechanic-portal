import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import MoviesPage from './pages/movies';
import MoviePage from './pages/movie';
import NotFoundPage from './pages/not-found';
import { moviesLoader } from './pages/movies/loader';
import { movieLoader } from './pages/movie/loader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/movies" />,
  },
  {
    path: 'movies',
    element: <MoviesPage />,
    loader: moviesLoader,
  },
  {
    path: 'movies/:movie_id',
    element: <MoviePage />,
    loader: movieLoader,
  },
  {
    path: '/notfound',
    element: <NotFoundPage />,
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
