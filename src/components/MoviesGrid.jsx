import React, {useEffect, useState} from "react";
import '../styles.css';
import MovieCard from "./MovieCard.jsx";

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
                    <MovieCard key={movie.id} movie={movie} />
                ))
            }
        </div>
    );
}

export default MoviesGrid;