import { Actor } from "./actor.model"
import { Genre } from "./genre.model"

export interface Movie {
    id: string
    title: string
    description?: string
    registered: Date
    isDeleted: boolean
    imageURI?: string | null
    actors?: Actor[] | null
    genres?: Genre[] | null
}