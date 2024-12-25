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
        <div>{movies.length}</div>
    );
}

export default MoviesGrid;