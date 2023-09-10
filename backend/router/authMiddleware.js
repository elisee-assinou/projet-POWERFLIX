// authMiddleware.js

export const authMiddleware = (req, res, next) => {
    // Vérifiez si le jeton d'authentification est présent (ou utilisez une autre méthode, comme la vérification de cookie)
    const token = localStorage.getItem('token'); // Assurez-vous que votre jeton est stocké correctement
  
    if (!token) {
      // Si le jeton n'est pas présent, redirigez l'utilisateur vers la page de connexion
      return history.push('/login'); // Vous devez utiliser la méthode de navigation de votre choix (par exemple, React Router)
    }
  
    // Si le jeton est présent, l'utilisateur est authentifié, passez à la route suivante
    next();
  };
  