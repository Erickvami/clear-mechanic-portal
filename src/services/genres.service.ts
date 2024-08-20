import { Genre } from "../models/genre.model";

// build base api url for this service
const API_BASE_URL = process.env.REACT_APP_API + '/genres';

export const getAllGenres = async (): Promise<Genre[] | null> => {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch genres');
    }
    const genres = await response.json();
    return genres;
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
};
