"use client";
import { Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./profile.css";

function profile() {
  const [currentUserId, setCurrentUserId] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [updatedUser, setUpdatedUser] = useState({
    name: "",
    email: "",
    password: "",
    conf_password: "",
  });
  const [updatedResponse, setUpdatedResponse] = useState(null);
  const [errors, setErrors] = useState([]);
  const [showPasswordFields, setShowPasswordFields] = useState(false);

  // useEffect(() => {
  //   getCurrentUserId();
  // }, []);

  // async function getCurrentUserId() {
  //   const currentPath = window.location.href;
  //   const splitedPath = currentPath.split("/");
  //   const the_path_id = splitedPath[splitedPath.length - 1];

  //   setCurrentUserId(the_path_id);

  //   try {
  //     const url = `http:localhost:5000/user/${the_path_id}`;
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error("La récupération des données a échoué");
  //     }
  //     const data = await response.json();
  //     setCurrentUser(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function handleSubmit(e: { preventDefault: () => void }) {
  //   e.preventDefault();
  //   setErrors([]);

  //   try {
  //     console.log(currentUserId);
  //     const url = `http://192.168.5.176:3000/user/${currentUserId}`;
  //     const response = await fetch(url, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(updatedUser),
  //     });
  //     if (!response.ok) {
  //       throw new Error("La mise à jour de l'utilisateur a échoué");
  //     }
  //     const data = await response.json();
  //     setUpdatedResponse(data);
  //     return <Navigate replace to="/profile" />;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // //////////////////////////////////////////////////////////////////////////////////////

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [conf_password, setConf_password] = useState("");

  fetch("http://localhost:5000/user/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      username,
      conf_password,
    }),
  });

  useEffect(() => {}, []);

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(email);

    fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: username,
        password: password,
      }),
    })
      .then(async (response) => {
        if (response.ok) {
          window.location.href = "/";
        } else {
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
    <div className="profile-container row">
      <div className="col h-100">
        <div className="card hovercard">
          <div className="cardheader"></div>
          <div className="avatar">
            <img
              alt=""
              src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
            />
          </div>
          <div className="info">
            <div className="title">
              <a target="_blank">Mindset</a>
            </div>
            <div className="desc">mail@email.com</div>
            <div className="desc">Nombre de favorie :</div>
          </div>
        </div>
      </div>
      <div className="col-9 col-sm-8  h-100 edit-profile">
        {/* <div className="p-10 profile_container">
          <div className="container bootstrap snippets bootdeys">
            <div className="row">
              <div className="col-xs-12 col-sm-9">
                <form onSubmit={submitHandler} className="form-horizontal">
                  {errors.length > 0 && (
                    <div id="error_screen" className="alert alert-danger">
                      {errors.map((error, index) => (
                        <p key={index}>{error}</p>
                      ))}
                    </div>
                  )}
                  {showPasswordFields ? (
                    <div className="panel panel-default mt-5">
                      <div className="panel-body mt-2">
                        <div className="form-group">
                          <label className="control-label">Your password</label>
                          <div className="col-sm-10">
                            <input
                              type="password"
                              className="form-control form-control my-1"
                              name="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <input
                              className="form-control form-control-sm"
                              type="text"
                              placeholder=".form-control-sm"
                              aria-label=".form-control-sm example"
                            ></input>
                          </div>
                        </div>
                        <div className="form-group mt-2">
                          <label className="control-label">Confirm Password</label>
                          <div className="col-sm-10">
                            <input
                              type="password"
                              className="form-control form-control my-1"
                              name="conf_password"
                              value={conf_password}
                              onChange={(e) => setConf_password(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="panel panel-default mt-5">
                      <div className="panel-body mt-2">
                        <div className="form-group">
                          <label className="control-label">
                            Password confirmation required
                          </label>
                          <div className="col-sm-10">
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={() => setShowPasswordFields(true)}
                            >
                              Show Password Fields
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="form-group mt-2">
                    <div className="col-sm-10 col-sm-offset-2">
                      <button type="submit" className="btn btn-primary w-100">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> */}
        <div className=" h-100">
          <div className="row d-flex h-100">
            <div className="col-xl-9">
              <h1 className="text-white mb-4">Apply for a job</h1>

              <div className="card border-radius-2 col-12">
                <div className="card-body">
                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-9 pe-5">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  <div className="row align-items-center py-3">
                    <div className="col-md-9 pe-5">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="toto@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="row align-items-center py-3">
                    <div className="col-md-9 pe-5">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <div className="row align-items-center py-3">
                    <div className="col-md-9 pe-5">
                      <input
                        type="Confirm password"
                        className="form-control form-control-lg"
                        placeholder="Conf Password"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default profile;
