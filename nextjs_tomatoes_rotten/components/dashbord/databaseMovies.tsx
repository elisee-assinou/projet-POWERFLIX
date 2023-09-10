import React, { useState, useEffect } from 'react';
import "./customButton.css"
import axios from 'axios'
import { Icon } from '@iconify/react';

function DataMovies() {

    const [datamovies, setdatabaseMovies] = useState<any[]>([]);

    useEffect(() => {
        
        axios.get('http://localhost:5000/movie')
            .then(response => setdatabaseMovies(response.data) )
            .catch(error => console.log(error));
            
    }, []);

    const deleteMovie = (id: any) => {
        axios.delete(`http://localhost:5000/movie/${id}`)        
        setTimeout(
            (
                alert("Movie deleted succesfully"),
                window.location.href = "/admin"
            ), 2000
        )               

    }

    return (
        <>
            <div className='row d-flex justify-content-center movie-container'>
                {datamovies.map((datamovie, index) => (

                    <div className=" col-2 m-2" key={index}>
                        <div className="movie-self-container">
                            <div className="main-img">
                                <img src={`https://image.tmdb.org/t/p/w300${datamovie.poster_path}`} className="card-img-top" alt="..." />
                                <div className="title-img row">
                                </div>
                            </div>

                            <div className="movie-info p-3 pr-4">
                                <p className="card-text">{datamovie.overview}</p>
                            </div>
                        </div>
                        <div className="row">
                            <h5 className="card-title custom-title col-9">{datamovie.title}</h5>
                            <a onClick={()=>deleteMovie(datamovie._id)} className="col-3 btn add-button ml-2"><Icon icon="octicon:trash-16" color="red" width={20} /></a>
                        </div>
                    </div>
                ))}
                <script></script>

            </div>


        </>
    );
}

export default DataMovies;
