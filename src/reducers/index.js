import { combineReducers } from 'redux';
import { ADD_MOVIES , ADD_FAVOURITE , REMOVE_FORM_FAVOURITE , SET_SHOW_FAVOURITES } from '../actions';

const initialMovieState = {
    list: [],
    favourites: []
}

export function movies (state = initialMovieState, action) {
    console.log('MOVIES REDUCER');
    // if(action.type === ADD_MOVIES) {
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }
    // return state;
    switch(action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }   
        case REMOVE_FORM_FAVOURITE:
            const filteredArray = state.favourites.filter(
                movie => movie.title !==action.movie.title
            );
            return {
                ...state,
                favourites: filteredArray
            };   
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val
            }   
        default:
            return state; 
    }
}

const initialSearchState = {
    result: {}
};
export function search (state = initialSearchState, action) {
    console.log('SEARCH REDUCER');
    return state;
}

const initialRootState = {
    movies: initialMovieState,
    search: initialSearchState
};

// export default function rootReducer (state = initialRootState, action) {
//     console.log('ROOT REDUCER');
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }

export default combineReducers({
    movies,
    search
});

//const ADD_MOVIES = 'ADD_MOVIES';