# Movies Frontend

## Description

This is the frontend of a movie application that allows users to search for movies, filter by genres, and view movie details. The application is built with React and TypeScript, and uses Redux for state management.

## Technologies

- **React**: Library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **Redux**: Library for global state management.
- **Material-UI**: UI component library.

## Installation

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

1. Install dependencies
```
npm install
```

2. Configure environment variables
```
REACT_APP_API=https://localhost:7216/
```

3. Start development server

```
npm start
```

This will start the development server and open the application at http://localhost:3000.


## Features
- Movie Search: Allows searching for movies by title or actor.
- Genre Filtering: Filters displayed movies based on selected genres.
- Movie List: Shows a list of movies with images and titles.
- Movie Details: Displays detailed information about a selected movie.

## Navigation

The application uses React Router for navigating between pages:

- Home Page (/): This is the default page that loads when the application starts. It includes the SearchMovieBar component for searching movies and filtering by genres, and the MovieList component to display a list of movies.

- Movie Details Page (/movies/:movie_id): When a user selects a movie from the list, they are redirected to the Movie Details Page. The URL includes the movie's ID as a parameter (e.g., /movies/123). This page displays detailed information about the selected movie.

By structuring the navigation this way, users can easily search for movies, filter results by genre, and view details of individual movies by clicking on them from the list.