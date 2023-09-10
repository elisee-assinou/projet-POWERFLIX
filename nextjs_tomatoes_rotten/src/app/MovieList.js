import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faStar, faCommentSlash } from '@fortawesome/free-solid-svg-icons';

// Styles CSS pour le composant CommentContainer
const commentContainerStyles = {
  maxWidth: '400px',
  maxHeight: '90px', // Ajoutez une hauteur maximale
  overflowY: 'auto', // Activez la barre de défilement en cas de contenu trop long
  backgroundColor: '#f7f7f7',
  padding: '10px',
  borderRadius: '5px',
  margin: '10px 0',
};

const commentListStyles = {
  listStyle: 'none',
  padding: '0',
};

const commentItemStyles = {
  marginBottom: '10px',
};

// Component for rendering comments
function CommentContainer({ comments, users }) {
  return (
    <div className="comment-container" style={commentContainerStyles}>
      <h4 className="text-lg font-semibold mb-2">Commentaires :</h4>
      <div className="comment-list" style={commentListStyles}>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} style={commentItemStyles}>
              <div className="flex items-center">
                <img
                  src={users[comment.user_id]?.profile_picture || 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='}
                  alt="User Profile"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">{users[comment.user_id]?.name || 'Utilisateur'}</span>: {comment.content}
                  </p>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faThumbsUp} className="text-blue-500 mr-1" />
                    <span className="text-sm text-gray-600">0</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MovieList() {
  const [movieData, setMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentData, setCommentData] = useState({});
  const [showCommentForm, setShowCommentForm] = useState({});
  const moviesPerPage = 6;
  const [showComments, setShowComments] = useState({});
  const [users, setUsers] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:5000/movie`
        );
        const data = await response.json();

        setMovieData(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    }

    fetchData();
  }, []);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movieData.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const toggleCommentVisibility = async (movieId) => {
    if (showComments[movieId]) {
      // Si les commentaires sont déjà visibles, masquez-les en mettant à jour le state
      setShowComments({ ...showComments, [movieId]: null });
    } else {
      // Si les commentaires ne sont pas visibles, chargez-les en mettant à jour le state
      await fetchCommentsForMovie(movieId);
    }
  };

  const handleCommentSubmit = async (movieId) => {
    try {
      const url = 'http://localhost:5000/comment/';
      const content = commentData[movieId];
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          movie_id: movieId,
          user_id: '64fcc3243e340b8ab423cdb9',
          content: content,
        }),
      });

      const data = await response.json();
      console.log('Commentaire enregistré :', data);

      setCommentData({ ...commentData, [movieId]: '' });

      // Mettez à jour les commentaires après l'ajout d'un nouveau commentaire
      await fetchCommentsForMovie(movieId);
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement du commentaire :', error);
    }
  };

  const fetchCommentsForMovie = async (movieId) => {
    try {
      const url = `http://localhost:5000/${movieId}/comment`;
      const response = await fetch(url);
      const data = await response.json();

      // Mettez à jour les commentaires pour ce film
      setShowComments({ ...showComments, [movieId]: data });

      // Récupérez les informations de chaque utilisateur pour les commentaires
      for (const comment of data) {
        const id = comment.user_id;
        const userUrl = `http://localhost:5000/user/${id}`;
        const userResponse = await fetch(userUrl);
        const userData = await userResponse.json();

        // Mettez à jour les informations de l'utilisateur dans le state
        setUsers((prevUsers) => ({ ...prevUsers, [comment.user_id]: userData }));
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des commentaires :', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movieData.length > 0 ? (
          currentMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{movie.title}</h3>
                <p className="text-gray-600">{movie.release_date}</p>
                <p className="mt-2 text-sm text-gray-700">{movie.overview}</p>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <button
                    className="mr-2 bg-green-500 text-white px-4 py-2 rounded"
                    onClick={() => setShowCommentForm({ ...showCommentForm, [movie.id]: true })}
                  >
                    <FontAwesomeIcon icon={faComment} /> Comment
                  </button>
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                    onClick={() => toggleCommentVisibility(movie.id)}
                  >
                    {showComments[movie.id] ? (
                      <FontAwesomeIcon icon={faCommentSlash} /> // Utilisez l'icône Comment Slash
                    ) : (
                      <FontAwesomeIcon icon={faComment} /> // Utilisez l'icône Comment
                    )}
                  </button>
                </div>
                <div>
                 
                  <button className="bg-red-500 text-white px-4 py-2 rounded">Trailer</button>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center bg-gray-100">
                <div className="text-sm text-gray-600">
                  <FontAwesomeIcon icon={faThumbsUp} /> Likes: 0
                </div>
                <div className="text-sm text-gray-600">
                  <FontAwesomeIcon icon={faComment} /> Comments: {showComments[movie.id] ? showComments[movie.id].length : 0}
                </div>
                <div className="text-sm text-gray-600">
                  <FontAwesomeIcon icon={faStar} /> Votes: 0
                </div>
              </div>
              {showCommentForm[movie.id] && (
                <div className="p-4">
                  <textarea
                    className="w-full h-16 border border-gray-300 p-2 rounded"
                    placeholder="Écrivez votre commentaire..."
                    value={commentData[movie.id] || ''}
                    onChange={(e) => setCommentData({ ...commentData, [movie.id]: e.target.value })}
                  />
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                    onClick={() => handleCommentSubmit(movie.id)}
                  >
                    Soumettre le commentaire
                  </button>
                </div>
              )}
              {showComments[movie.id] && showComments[movie.id].length > 0 && (
                <CommentContainer
                  comments={showComments[movie.id]}
                  users={users}
                />
              )}
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className="mt-4">
        <ul className="flex justify-center">
          {Array.from({ length: Math.ceil(movieData.length / moviesPerPage) }).map((_, index) => (
            <li key={index} className="mx-2">
              <button
                onClick={() => paginate(index + 1)}
                className={`${index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'
                  } px-3 py-2 rounded`}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieList;
