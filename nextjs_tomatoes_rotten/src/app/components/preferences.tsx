// utils/preferences.js

export async function fetchUserPreferences(userId) {
  try {
    const response = await fetch(`/api/preferences/${userId}`);
    if (!response.ok) {
      throw new Error('Réponse non valide de l\'API');
    }
    const userPreferences = await response.json();
    return userPreferences; // Les préférences de l'utilisateur depuis l'API
  } catch (error) {
    console.error('Erreur lors de la récupération des préférences:', error);
    throw error;
  }
}
