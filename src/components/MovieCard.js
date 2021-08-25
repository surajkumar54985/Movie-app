import React from 'react';
import { data } from '../data';
class MovieCard extends React.Component {
    render () {
        const { movie } = this.props;
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
                        <button className="favourie-btn">Favourite</button>
                    </div>
                </div>
            </div>
        );
    }
  
}

export default MovieCard;