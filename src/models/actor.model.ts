import { Movie } from "./movie.model"

export interface Actor {
    id: string
    name?: string | null
    imageURI?: string | null
    registered?: Date | null
    isDeleted: boolean 
    movies?: Movie[] | null
}