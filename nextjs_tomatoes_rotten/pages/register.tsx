import React, { useState, useEffect } from "react";
// import { redirect } from "next/navigation";
// import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./auth.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!name || !email || !password || !passwordConfirm) {
      setError("Tous les champs sont obligatoires");
      return;
    }

    const namePattern = /^[a-zA-Z\s]*$/;
    if (!namePattern.test(name)) {
      setError("Le nom ne doit contenir que des lettres et des espaces");
      return;
    }

    if (password !== passwordConfirm || password.length < 8) {
      setError("Les mots de passe ne correspondent pas ou trop court!");
      return;
    }

    const response = await fetch("http://localhost:5000/user/register", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
        isAdmin: false,
        isVerify: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);

    if (response.ok) {
      alert("Vous êtes inscrit !");
      setError("");
      setTimeout(
        window.location.href = "/login",
        // redirect("/"),
        2000
      );
    } else {
      const errorData = await response.json();
      setError(errorData.error || response.statusText);
    }
  };

  return (
    <>
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
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          placeholder="Your Name"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

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

                      <div className="form-outline mb-2">
                        <input
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                          placeholder="Repeat your password"
                          value={passwordConfirm}
                          onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-warning btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>

                      <div className="text-center text-muted mt-3 mb-0 login-space">
                        <p>Have already an account?</p>
                        <a href="/login" className="fw-bold text-body">
                          <u>Login here</u>
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
    </>
  );
}

export default Register;
