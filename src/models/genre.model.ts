import { Movie } from "./movie.model"

export interface Genre {
    id: string
    name?: string | null
    movies?: Movie[] | null
}