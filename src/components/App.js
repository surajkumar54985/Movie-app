import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import ClickableDiv from 'react-clickable-div'
import 'react-clickable-div/dist/index.css'
import MovieCard from './MovieCard';
import { addMovies, setShowFavourites } from '../actions';


class App extends React.Component {
   componentDidMount () {
     const { store }=this.props;
    store.subscribe(() => {
      console.log('UPDATED');
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
    console.log('STATE',this.props.store.getState());
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();

    const index = movies.favourites.indexOf(movie);
    if(index !== -1)
    {
      //Found the movie
      return true;
    }
    return false;
  }

onChangeTab = (val) => {
  this.props.store.dispatch(setShowFavourites(val))
} 
 render () {
    const { movies } = this.props.store.getState();
    const { list,favourites,showFavourites } = movies;
    console.log('RENDER',this.props.store.getState());
    
    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs' }`} onClick={() => this.onChangeTab(false)}>
              Movie
            </div>
            <div className={`tab ${showFavourites ? 'active-tabs' : '' }`} onClick={() => this.onChangeTab(true)}>
              Favourites
            </div>
          </div>
          <div className="List">
            {displayMovies.map((movie,index)=> (
              <MovieCard movie={movie} key={`movies-${index}`} dispatch={this.props.store.dispatch} isFavourite={this.isMovieFavourite(movie)} />
            ))}
          </div>
          {displayMovies.length === 0 ? <div className="no-movies">No Movies to display!</div> : null}
        </div>
      </div>
    );
  }
}

export default App;
