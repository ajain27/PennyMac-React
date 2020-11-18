import React, { useState } from 'react'
import axios from 'axios'
import { FaSearch } from 'react-icons/fa';
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import './styles/movieList.css'

function MovieList() {
    const [movies, setMovies] = useState([]);

    function onSearch(e) {
        const searchTerm = document.getElementById('search').value;
        search(searchTerm);
        document.getElementById('search').value = "";
    };

    function search(query) {
        const proxURL = `https://cors-anywhere.herokuapp.com/`
        const url = `https://api.tvmaze.com/search/shows?q=${query}`;
        axios.get(proxURL + url).then(results => {
            setMovies(results.data);
        });

    };
    return (
        <div className="wrapper">
            <div className="container custom-container">
                <form className="searchForm">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Search a movie"
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                            id="search"
                        />
                        <FaSearch className="search-icon" />
                        <InputGroup.Append>
                            <Button variant="outline-primary" className="searchButton" onClick={onSearch}>Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </form>
                <div className="card individual-card">
                    <ul>
                        {
                            movies.map(movie =>
                                <li className="movie" key={movie.show.id}>
                                    <div className="row">
                                        <div className="col-4 mt-3 mb-3">
                                            <img src={movie.show && movie.show.image && movie.show.image.original ? movie.show.image.original : ""} alt="" className="movie-img" />
                                        </div>
                                        <div className="col-8 mt-3 mb-3 text-left movie-detail">
                                            <h2>{movie.show.name}</h2>
                                            <div className="summary">
                                                <p>{movie && movie.show && movie.show.summary ? movie.show.summary.replace(/<[^>]+>/g, '') : "No summary yet"}</p>
                                            </div>
                                            <Button className="button">Show Episodes</Button>
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default MovieList
