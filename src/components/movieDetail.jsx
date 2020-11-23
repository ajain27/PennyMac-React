import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BsStar } from 'react-icons/bs'

import '../styles/movieList.css'
import '../styles/movieDetail.css'

function MovieDetail({ match }) {

    const [showEpisodes, setEpisodes] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log('Movies--', movies);
        const url = `http://api.tvmaze.com/shows/${match.params.id}/episodes`;
        const fetchEpisodes = async () => {
            axios.get(url).then(res => {
                setLoading(true);
                setError(false);
                try {
                    const episodes = res.data;
                    console.log('Episodes--', episodes);
                    setEpisodes(episodes);
                } catch {
                    setError(true)
                }
            });
        };
        fetchEpisodes();
    }, [])
    return (
        <div className="detail-wrapper">
            <div className="custom-container">
                <div className="list-container">
                    <ul className="movie-detail-ul">
                        {
                            showEpisodes.map(episodes =>
                                <li key={episodes.id} style={{ background: "white !important" }}>
                                    <div className="row">
                                        <div className="col-5">
                                            {/* <img src="" alt="" className="details-image" /> */}
                                            {/* <h2>{episodes.id}</h2> */}
                                            {/* <p></p> */}
                                        </div>
                                        <div className="col-7">
                                            <div className="row">
                                                <div className="col-2 p-0">
                                                    <div className="episode-number">
                                                        {episodes && episodes.number  && episodes.number < 10 ? '0' + episodes.number : episodes.number}
                                                    </div>
                                                </div>
                                                <div className="col-10 p-0">
                                                    <p className="episode-name"><strong>{episodes.name}</strong></p>
                                                    <BsStar className="rating" />
                                                    <p className="episode-airdate">{episodes.airdate}</p>
                                                </div>
                                            </div>

                                            {/* <h4>{episodes.name}</h4> */}
                                        </div>
                                    </div>
                                </li>)

                        }
                    </ul>
                </div>

            </div>
        </div>
    )

}

export default MovieDetail