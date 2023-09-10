"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../components/auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => { // Ajout du typage
    e.preventDefault();

    if (!email || !password) {
      setError("Tous les champs sont obligatoires");
      return;
    }
    if (password.length < 8) {
      setError("Le mot de passe doit comporter au moins 8 caractères");
      return;
    }

    const response = await fetch("http://localhost:5000/user/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setError("");
      const data = await response.json();
      console.log(data);
      localStorage.setItem("accessToken", data.loginToken);
      setIsLoggedIn(true);
      // Redirigez l'utilisateur ici
      window.location.href = "/";
    } else {
      const errorData = await response.json();
      setError(errorData.error || response.statusText);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        // Si l'utilisateur est connecté, redirigez-le vers la page principale
        <div>Redirection en cours...</div>
      ) : (
        <section className="vh-100 bg-image register-form">
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  {error && (
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6 p-2  mb-2 w-100 d-flex justify-content-center align-items-center text-danger bg-light ">
                      {error}
                    </div>
                  )}
                  <div className="card main-content">
                    <div className="card-body p-5">
                      <form onSubmit={submitHandler}>
                        <div className="form-outline mb-2">
                          <input
                            type="email"
                            id="form3Example3cg"
                            className="form-control form-control-lg"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        <div className="form-outline mb-2">
                          <input
                            type="password"
                            id="form3Example4cg"
                            className="form-control form-control-lg"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>

                        <div className="d-flex justify-content-center">
                          <button
                            type="submit"
                            className="btn btn-warning btn-block btn-lg gradient-custom-4 text-body"
                          >
                            Login
                          </button>
                        </div>

                        <div className="text-center text-muted mt-3 mb-0 login-space">
                          <p>Not have an account?</p>
                          <a href="/register" className="fw-bold text-body">
                            <u>Register here</u>
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Login;
