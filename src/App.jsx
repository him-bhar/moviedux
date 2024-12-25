import './styles.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MoviesGrid from "./components/MoviesGrid.jsx";
import Watchlist from "./components/Watchlist.jsx";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import React, {useEffect, useState} from "react";

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        //loading from the file.
        fetch("movies.json")
            .then(res => res.json())
            .then(data => setMovies(data));
    }, []); //2nd arg is an empty array, because we don't have any dependency,
    // only when this component is loaded this should execute.

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
                      <Route path="/" element={<MoviesGrid movies={movies} />} ></Route>
                      <Route path="/watchlist" element={<Watchlist />} ></Route>
                  </Routes>
              </Router>
          </div>
          <Footer />
      </div>
    )
}

export default App
