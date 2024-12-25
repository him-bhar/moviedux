import React from "react";
import '../styles.css'
import PropTypes from 'prop-types';

function MovieCard(props) {
    MovieCard.propTypes = {
        movie: PropTypes.object.isRequired
    }
    const movie = props.movie;

    //this is just another style of writing js functions
    const handleError = (evt) => { //event that caused the error
        evt.target.src = "images/default.jpg"; //Since this function is tied on img tag, so target is img,
        // this line is essentially replacing the src tag with the default.jpg
    }

    return (
        <div className="movie-card" key={movie.id}>
            <img src={`images/${movie.image}`} alt={movie.title} onError={handleError}/>
            <div className="movie-card-info">
                <h3 className="movie-card-title">{movie.title}</h3>
                <p className="movie-card-genre">{movie.genre}</p>
                <p className="movie-card-rating">{movie.rating}</p>
            </div>
        </div>
    );
}

export default MovieCard;