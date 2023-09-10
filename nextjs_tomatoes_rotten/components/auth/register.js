"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const LoginForm = ({ handleSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // On anime le formulaire lorsqu'il est affiché
    document
      .querySelector(".login-form")
      .classList.add("animate__animated", "animate__fadeIn");
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);

    // On envoie les données du formulaire au serveur
    fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(async (response) => {
        if (response.ok) {
          // On redirige l'utilisateur vers la route /accueil
          window.location.href = "/";
        } else {
          // On affiche un message d'erreur
          const errorData = await response.json();
          console.log(errorData);
          alert(errorData.error);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form
      className="login-form bg-white rounded-lg shadow-md overflow-hidden"
      onSubmit={submitHandler}
    >
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">Connexion</h3>
      </div>
      <div className="p-4">
        <input
          type="text"
          placeholder="Nom d'utilisateur"
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
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-full"
        >
          Se connecter
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
