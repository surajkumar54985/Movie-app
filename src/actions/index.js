export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";

export const REMOVE_FORM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES"
export function addMovies (movies) {
    return {
        type : ADD_MOVIES,
        movies
    }
}

export function addFavourite (movie) {
    return {
        type : ADD_FAVOURITE,
        movie
    }
}

export function removeFromFavourites(movie) {
    return {
        type: REMOVE_FORM_FAVOURITE,
        movie
    };
}

export function setShowFavourites(val) {
    return {
        type: SET_SHOW_FAVOURITES,
        val
    };
}