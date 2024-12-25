import React, {useEffect, useState} from "react";
import '../styles.css';
import MovieCard from "./MovieCard.jsx";

const MoviesGrid = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        //loading from the file.
        fetch("movies.json")
            .then(res => res.json())
            .then(data => setMovies(data));
    }, []); //2nd arg is an empty array, because we don't have any dependency,
    // only when this component is loaded this should execute.

    const handleSearchChange = (evt) => {
        setSearchTerm(evt.target.value);
    }

    const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));

    //In the input field value is set as {searchTerm}, this is for binding the value, initial display or re-rendering.
    // If we don't do this, with each re-render this will become empty.
    return (
        <div>
            <input type="text" placeholder="Search Movies..." className="search-input" value={searchTerm} onChange={handleSearchChange} />
            <div className="movies-grid">
                {
                    filteredMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                }
            </div>
        </div>
    );
}

export default MoviesGrid;