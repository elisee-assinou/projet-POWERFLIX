import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const SignupForm = ({ handleSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // On anime le formulaire lorsqu'il est affiché
    document.querySelector('.signup-form').classList.add('animate__animated', 'animate__fadeIn');
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    // On envoie les données du formulaire au serveur
    handleSubmit({ username, password });
  };

  return (
    <form
      className="signup-form bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
      onSubmit={submitHandler}
    >
      <div className="p-4">
        <h3 className="text-xl font-semibold">Inscription</h3>
      </div>
      <div className="p-4">
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500"
        />
      </div>
      <div className="p-4">
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500"
        />
      </div>
      <div className="p-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-full"
        >
          S'inscrire
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
