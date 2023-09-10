import React, { useState, useEffect } from 'react';
import "./customButton.css"
import axios from 'axios'
import { Icon } from '@iconify/react';

function Movies() {

    const [movies, setMovies] = useState<any[]>([]);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=243de7fc1f0e452389dd2bbb36380aa9')
            .then(response => setMovies(response.data.results))
            .catch(error => console.log(error));
    }, []);

    const AddMovies = async (movieData: any) => {
 
        console.log(movieData)
        const response = await axios.post('http://localhost:5000/movie', movieData);
        console.log(response.status);
        if (response.status === 201){
            alert("Movie added successfully")
        }
        else{
            alert("An error occured. Please try again")
        }
        
    }

    return (
        <>
            <div className='row d-flex justify-content-center movie-container'>
                {movies.map((movie, index) => (

                    <div className=" col-2 m-2" key={index}>
                        <div className="movie-self-container">
                            <div className="main-img">
                                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} className="card-img-top" alt="..." />
                                <div className="title-img row">
                                </div>
                            </div>

                            <div className="movie-info p-3 pr-4">
                                <p className="card-text">{movie.overview}</p>
                            </div>
                        </div>
                        <div className="row">
                            <h5 className="card-title custom-title col-9">{movie.title}</h5>
                            <a onClick={() => AddMovies({
                                id: movie.id, title: movie.title, overview: movie.overview, popularity: movie.popularity, vote_count: movie.vote_count,
                                poster_path: movie.poster_path, release_date: movie.release_date, vote_average: movie.vote_average
                            })} className="col-3 btn add-button ml-2"><Icon icon="typcn:plus-outline" width={20} /></a>
                        </div>
                    </div>
                ))}
                <script></script>

            </div>


        </>
    );
}

export default Movies;
