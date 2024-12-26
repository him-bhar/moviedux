import React from "react";
import '../styles.css';
import MovieCard from "./MovieCard.jsx";

const Watchlist = ({movies, watchlist, toggleWatchlist}) => {
    return (
        <div>
            <h1 className="title">Your watchlist</h1>
            <div className="watchlist">
                {
                    watchlist.map((movieId, index) => {
                        const movie = movies.find((movie) => movie.id === movieId);
                        return (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                toggleWatchlist={toggleWatchlist}
                                isWatchlisted={watchlist.includes(movie.id)}>
                            </MovieCard>
                        )
                    }
                )}
            </div>
        </div>
    );
}

export default Watchlist;