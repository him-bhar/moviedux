import './App.css'
import './styles.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MoviesGrid from "./components/MoviesGrid.jsx";
import Watchlist from "./components/Watchlist.jsx";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import React, {useEffect, useState} from "react";

function App() {
    const [movies, setMovies] = useState([]);
    //watchlist is defined here, so it can be shared between MoviesGrid, where watchlist is created/defined,
    // and Watchlist component where it is being displayed
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        //loading from the file.
        fetch("movies.json")
            .then(res => res.json())
            .then(data => setMovies(data));
    }, []); //2nd arg is an empty array, because we don't have any dependency,
    // only when this component is loaded this should execute.

    const toggleWatchlist = (movieId) => {
        //Arg in the update state function, gives us access to existing state, so we can decide what we need to do.
        setWatchlist((prevWatchlist) => {
            //Typical ternary operation if movie is already in watchlist remove it, else add it
            return prevWatchlist.includes(movieId)
                ? prevWatchlist.filter(id => id !== movieId)
                : [...prevWatchlist, movieId];
        });
    }

    return (
      <div>
          <div className="container">
              <Header />
              <Router>
                  <nav>
                      <ul>
                          <li>
                              <Link to="/">Home</Link>
                              <Link to="/watchlist">Watchlist</Link>
                          </li>
                      </ul>
                  </nav>

                  <Routes>
                      <Route path="/" element={<MoviesGrid movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />} ></Route>
                      <Route path="/watchlist" element={<Watchlist watchlist={watchlist} movies={movies} toggleWatchlist={toggleWatchlist} />} ></Route>
                  </Routes>
              </Router>
          </div>
          <Footer />
      </div>
    )
}

export default App
