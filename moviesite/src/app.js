import { useState, useEffect } from 'react';

import MovieCard from '../../public/MovieCard';
import SearchIcon from './search.svg';
import './App.css';

// api key 1affb52c

const API_URL = ' http://www.omdbapi.com?apikey=1affb52c';

const movie = {
    "Title": " ",
    "Year": "",
    "imdbID": "",
    "Type": "",
    "Poster": ""
}

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    } 

    useEffect(() => {
        searchMovies('Interstellar');
    }, []);

    return (
        <div className="App">
            <h1> MovieLand</h1>
            <div className="search">
                <input
                    placeholder= "Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
               <img
                 src={SearchIcon}
                 alt="Search"
                 onClick={() => {searchMovies(searchTerm)}}
               />
            </div>
                
            {movies?.length> 0 
                ? (
                    <div className="container">
                            {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                </div>
                ) : (
                <div className="empty">
                    <h2>No movies Found</h2>
                </div>
                )
            }
        </div>
    );
}

export default App;