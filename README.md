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

## Services

The `services` directory includes functions for interacting with the movie-related API endpoints. These functions are responsible for making HTTP requests to the backend and returning data to the application. Below is a summary of the available services:

### `getAllMovies`

- **Purpose**: Retrieves a list of all movies.
- **Endpoint**: `GET /movies`
- **Returns**: A list of movie objects.

### `searchMovies`

- **Purpose**: Searches for movies based on a search query and optional filters.
- **Endpoint**: `GET /movies/search/{query}`
- **Parameters**:
  - `query`: The search term used to find movies.
  - `genres` (optional): A list of genre names to filter the search results.
  - `includeDeleted` (optional): A flag indicating whether to include deleted movies in the search results.
- **Returns**: A list of movies that match the search criteria.

### `getMovieById`

- **Purpose**: Fetches detailed information about a specific movie using its ID.
- **Endpoint**: `GET /movies/{id}`
- **Parameters**:
  - `id`: The ID of the movie to retrieve.
  - `hasActors` (optional): A flag to include actor information in the response.
  - `hasGenres` (optional): A flag to include genre information in the response.
- **Returns**: Detailed information about the specified movie.

These services are used to handle data fetching and manipulation within the application, providing a seamless way to interact with the movie database.

## API
You can find the source api by entering at https://github.com/Erickvami/ClearMechanic
