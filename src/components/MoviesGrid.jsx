import React, {useEffect, useState} from "react";
import '../styles.css';

const MoviesGrid = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const m = ['a', 'b', 'c'];
        setMovies(m);  //State updated causing component to re-render.
    }, []); //2nd arg is an empty array, because we don't have any dependency,
    // only when this component is loaded this should execute.
    return (
        <div>{movies.length}</div>
    );
}

export default MoviesGrid;