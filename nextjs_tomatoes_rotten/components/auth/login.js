"use client";

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SignupForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // On anime le formulaire lorsqu'il est affiché
    document.querySelector('.signup-form').classList.add('animate__animated', 'animate__fadeIn');
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    // Vérifier que les champs ne sont pas vides
    if (!name || !email || !password || !passwordConfirm) {
      setError('Tous les champs sont obligatoires');
      return;
    }

    // Vérifier que le nom ne contient que des caractères valides
    const namePattern = /^[a-zA-Z\s]*$/;
    if (!namePattern.test(name)) {
      setError('Le nom ne doit contenir que des lettres et des espaces');
      return;
    }

    // On vérifie que les mots de passe correspondent
    if (password !== passwordConfirm) {
      setError('Les mots de passe ne correspondent pas !');
      return;
    }

    // On envoie les données du formulaire au serveur via fetch
    const response = await fetch('http://localhost:5000/user/register', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // On traite la réponse du serveur
    if (response.ok) {
      // On affiche un message de succès
      alert('Vous êtes inscrit !');
      setError('');
    } else {
      // On affiche un message d'erreur
      const errorData = await response.json();
      setError(errorData.error || response.statusText);
    }
  };

  return (
    <form
      className="signup-form bg-white rounded-lg shadow-md overflow-hidden max-w-60"
      onSubmit={submitHandler}
    >
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">Inscription</h3>
      </div>
      <div className="p-4">
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-blue-500"
        />
      </div>
      <div className="p-4">
        <input
          type="text"
          placeholder="Adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-blue-500"
        />
      </div>
      <div className="p-4">
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-blue-500"
        />
      </div>
      <div className="p-4">
        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-blue-500"
        />
      </div>
      {error && (
        <div className="p-4 text-red-500">{error}</div>
      )}
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
