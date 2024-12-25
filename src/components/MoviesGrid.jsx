import React, {useState} from "react";
import '../styles.css';
import MovieCard from "./MovieCard.jsx";

//Destructured props movies inject into MoviesGrid
const MoviesGrid = ({movies}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [genre, setGenre] = useState("All Genres");
    const [rating, setRating] = useState("All");

    const handleSearchChange = (evt) => {
        setSearchTerm(evt.target.value);
    }

    const handleGenreChange = (evt) => {
        setGenre(evt.target.value);
    }

    const handleRatingChange = (evt) => {
        setRating(evt.target.value);
    }

    const matchesSearchTerm = (movie, searchTerm) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    }

    const matchesGenre = (movie, genre) => {
        return genre === 'All Genres' || movie.genre.toLowerCase() === genre.toLowerCase()
    }

    const matchesRating = (movie, rating) => {
        switch (rating) {
            case "All":
                return true;
            case "Good":
                return movie.rating >= 8;
            case "Ok":
                return movie.rating>=5 && movie.rating < 8;
            case "Bad":
                return movie.rating < 5;
            default:
                return false;
        }
    }

    const filteredMovies = movies.filter((movie) =>
        matchesGenre(movie, genre) &&
        matchesRating(movie, rating) &&
        matchesSearchTerm(movie, searchTerm));

    //In the input field value is set as {searchTerm}, this is for binding the value, initial display or re-rendering.
    // If we don't do this, with each re-render this will become empty.
    return (
        <div>
            <input type="text" placeholder="Search Movies..." className="search-input" value={searchTerm} onChange={handleSearchChange} />
            <div className="filter-bar">
                <div className="filter-slot">
                    <label>Genre</label>
                    <select className="filter-dropdown" value={genre} onChange={handleGenreChange}>
                        <option>All Genres</option>
                        <option>Action</option>
                        <option>Drama</option>
                        <option>Fantasy</option>
                        <option>Horror</option>
                    </select>
                </div>
                <div className="filter-slot">
                    <label>Rating</label>
                    <select className="filter-dropdown" value={rating} onChange={handleRatingChange}>
                        <option>All</option>
                        <option>Good</option>
                        <option>Ok</option>
                        <option>Bad</option>
                    </select>
                </div>
            </div>
            <div className="movies-grid">
                {
                    filteredMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))
                }
            </div>
        </div>
    );
}

export default MoviesGrid;