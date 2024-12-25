import React, {useEffect, useState} from "react";
import '../styles.css';

const MoviesGrid = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        //loading from the file.
        fetch("movies.json")
            .then(res => res.json())
            .then(data => setMovies(data));
    }, []); //2nd arg is an empty array, because we don't have any dependency,
    // only when this component is loaded this should execute.
    return (
        <div className="movies-grid">
            {
                movies.map((movie) => (
                    <div className="movie-card" key={movie.id}>
                        <img src={`images/${movie.image}`} alt={movie.title} />
                        <div className="movie-card-info">
                            <h3 className="movie-card-title">{movie.title}</h3>
                            <p className="movie-card-genre">{movie.genre}</p>
                            <p className="movie-card-rating">{movie.rating}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default MoviesGrid;