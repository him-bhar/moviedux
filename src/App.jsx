import './styles.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MoviesGrid from "./components/MoviesGrid.jsx";
import Watchlist from "./components/Watchlist.jsx";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import MovieCard from "./components/MovieCard.jsx";

function App() {

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
                      <Route path="/" element={<MoviesGrid />} ></Route>
                      <Route path="/watchlist" element={<Watchlist />} ></Route>
                  </Routes>
              </Router>
          </div>
          <Footer />
      </div>
  )
}

export default App
