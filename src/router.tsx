import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MoviesPage from './pages/movies';
import MoviePage from './pages/movie';
import NotFoundPage from './pages/not-found';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MoviesPage/>} />
      <Route path="/movies/:movie_id" element={<MoviePage/>} />
      <Route path="/notfound" element={<NotFoundPage/>} />
    </Routes>
  );
};

export default Router;