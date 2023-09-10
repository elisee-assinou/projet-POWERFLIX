import React, { useState, useEffect } from "react";

function Logout() {
  useEffect(() => {
    // Effectuez la demande de déconnexion lorsque le composant est monté
    const logoutUser = async () => {
      try {
        const response = await fetch("http://localhost:5000/user/logout", {
          method: "POST", // Vous pouvez également utiliser DELETE si cela convient mieux à votre API
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          // Supprimez le token JWT stocké localement
          localStorage.removeItem("accessToken");

          // Redirigez l'utilisateur vers la page de connexion
          window.location.href = "/login";
        } else {
          console.error("Erreur lors de la déconnexion");
        }
      } catch (error) {
        console.error(error);
      }
    };

    logoutUser();
  }, []);

  return (
    <div>
      <p>Déconnexion en cours...</p>
      {/* Vous pouvez ajouter un message de confirmation ici si nécessaire */}
    </div>
  );
}

export default Logout;
