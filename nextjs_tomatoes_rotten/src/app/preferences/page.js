'use client';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Movie from '../components/Movie';
import Pagination from '../components/Pagination';

const FavoriteMovies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // On récupère la liste des films préférés de l'utilisateur
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=243de7fc1f0e452389dd2bbb36380aa9`)
      .then((response) => response.json())
      .then((movies) => {
        // On transmet la liste des films au composant Movie
        setMovies(movies);
      });
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} title={movie.title} image={movie.image} releaseDate={movie.releaseDate} score={movie.score} />
      ))}

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default FavoriteMovies;
