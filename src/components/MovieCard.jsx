import React from "react";
import '../styles.css'
import PropTypes from 'prop-types';

//Injected isWatchlisted (am I watchlisted?) and toggleWatchlist here, because the actual adding and removing a movie in watchlist will happen here.
function MovieCard({movie, isWatchlisted, toggleWatchlist}) {
    MovieCard.propTypes = {
        movie: PropTypes.object.isRequired
    }

    //this is just another style of writing js functions (this is arrow function)
    const handleError = (evt) => { //event that caused the error
        evt.target.src = "images/default.jpg"; //Since this function is tied on img tag, so target is img,
        // this line is essentially replacing the src tag with the default.jpg
    }

    const getRatingClass = (rating) => {
        if (rating >= 8) return "rating-good";
        if (rating >= 5 && rating < 8) return "rating-ok";
        return "rating-bad";
    }

    return (
        <div className="movie-card" key={movie.id}>
            <img src={`images/${movie.image}`} alt={movie.title} onError={handleError}/>
            <div className="movie-card-info">
                <h3 className="movie-card-title">{movie.title}</h3>
                <p className="movie-card-genre">{movie.genre}</p>
                <p className={`movie-card-rating ${getRatingClass(movie.rating)}`}>{movie.rating}</p>
            </div>
        </div>
    );
}

export default MovieCard;