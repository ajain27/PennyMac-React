import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import '../styles/movieList.css'
import Search from './Search';
import { Link } from 'react-router-dom'

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const myInput = useRef();

    function search(query) {
        const url = `https://api.tvmaze.com/search/shows?q=${query}`;
        axios.get(url).then(results => {
            setLoading(true);
            setMovies(results.data);
            setLoading(false);
        })
            .catch(error => {
                setLoading(false);
                setMovies([]);
                setError('Something went wrong, cannot fetch the date');
            })
    };

    useEffect(() => myInput.current && myInput.current.focus());

    return (
        <div className="container-fluid">
            <div className="wrapper">
                <div className="container custom-container">
                    <Search searchTerm={search} />
                    <div className="card individual-card">
                        <ul className="movie-detail-ul">
                            {
                                isLoading ? 'Loading ... ' :
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
                                                    <Link className="btn btn-primary custom-background" to={`/show/${movie.show.id}/episodes`}>Show Episodes</Link>
                                                </div>
                                            </div>
                                        </li>
                                    )
                            }
                            {error ? error : null}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieList
