import { ADD_MOVIES } from '../actions';
export default function movies (state = [5],action) {
    if(action.type === ADD_MOVIES) {
        return action.movies;
    }
    return state;
}

//const ADD_MOVIES = 'ADD_MOVIES';