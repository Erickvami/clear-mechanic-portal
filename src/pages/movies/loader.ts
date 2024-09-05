import { getAllGenres } from "../../services/genres.service";

export const moviesLoader = async () => {
  const genres = await getAllGenres();
  return { genres };
};