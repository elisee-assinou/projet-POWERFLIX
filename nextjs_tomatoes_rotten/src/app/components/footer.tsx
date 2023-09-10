import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 py-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Section 1 */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-white text-2xl font-semibold mb-4">PowerCode</h2>
            <p className="text-gray-300">
              L'équipe PowerCode de l'EPITECH-BENIN Coding Academy est dédiée à l'excellence dans la programmation et l'innovation.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-white text-2xl font-semibold mb-4">Liens utiles</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Accueil</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Cours</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Équipe</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-white text-2xl font-semibold mb-4">Contactez-nous</h2>
            <p className="text-gray-300">Adresse: Votre adresse, Ville, Pays</p>
            <p className="text-gray-300">Email: contact@powercode-epitech-benin.com</p>
            <p className="text-gray-300">Téléphone: +123 456 7890</p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-white text-2xl font-semibold mb-4">Suivez-nous</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 2l2.928 2.928M5 18l-2.928-2.928M17 6H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"/></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.582 16.648h-1.32v-6.29h1.32v6.29zm0-7.977h-1.32v-2.45h1.32v2.45zm5.9 8.28c-.75 0-1.38-.27-1.91-.808-.533-.537-.806-1.17-.806-1.911v-8.278h1.32v8.278c0 .354.13.652.392.912.26.26.558.39.91.39s.653-.13.912-.39c.26-.26.39-.558.39-.912v-8.278h1.32v8.278c0 .74-.273 1.374-.808 1.911-.536.538-1.17.808-1.911.808zm3.24-11.988h-1.32v1.865h-1.863v-1.865h-1.32v-1.862h1.32V6.74h1.863v1.863h1.32v1.862z"/></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 5.21a10.001 10.001 0 0 1-2.82 7.26c-1.351 1.352-3.055 2.291-4.924 2.608a7.975 7.975 0 0 0 1.832-2.522 4.003 4.003 0 0 1-3.702-5.524 10.01 10.01 0 0 0 7.27 3.686 4 4 0 0 1-.18-1.144 4.006 4.006 0 0 1 6.9-2.75 8.018 8.018 0 0 0 2.313-0.67c0.101 0.509 0.154 1.027 0.154 1.544 0 7.168-5.481 15.49-15.49 15.49-3.061 0-5.906-0.899-8.306-2.45a4.019 4.019 0 0 1-2.969-4.456v0a4.003 4.003 0 0 0 1.814-0.111 4.003 4.003 0 0 1-1.611-3.17v-0.041a4.003 4.003 0 0 0 1.81-0.78"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
