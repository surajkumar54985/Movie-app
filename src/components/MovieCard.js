import React from 'react';
import { data } from '../data';
import { addFavourite, removeFromFavourites } from '../actions';
class MovieCard extends React.Component {
    handleFavouriteClick = () => {
        const { movie } = this.props;
        this.props.dispatch(addFavourite(movie))
    }

    handleUnFavouriteClick = () => {
        const { movie } = this.props;
        this.props.dispatch(removeFromFavourites(movie));
    }
    render () {
        const { movie,isFavourite } = this.props;
        return (
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.info.image_url} />
                </div>
                <div className="right">
                    <div className="title">{movie.title}</div>
                    <div className="plot">{movie.info.plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.info.rating}</div>
                        {
                            isFavourite
                            ? <button className="unfavourite-btn" onClick={this.handleUnFavouriteClick}>UnFavourite</button>
                            : <button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourite</button>
                        }
                    </div>
                </div>
            </div>
        );
    }
  
}

export default MovieCard;