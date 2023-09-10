import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Movie = ({ title, image, releaseDate, score }) => {
  return (
    <div className="movie">
      <div className="movie-title">
        {title}
      </div>
      <img src={image} alt={title} />
      <div className="movie-release-date">
        {releaseDate}
      </div>
      <div className="movie-score">
        <FontAwesomeIcon icon={faStar} />
        {score}
      </div>
    </div>
  );
};

export default Movie;
