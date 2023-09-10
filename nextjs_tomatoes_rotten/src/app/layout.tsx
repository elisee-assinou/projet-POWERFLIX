"use client";
// Importez d'abord les modules et les composants nécessaires
import './globals.css'
import 'semantic-ui-css/semantic.min.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/footer';
import { decodeToken } from './util'; // Assurez-vous d'importer correctement le chemin
import { use, useEffect, useState } from 'react'

// Marquez ce composant comme un composant côté client en utilisant "use client"


// Créez une instance de la police Inter
const inter = Inter({ subsets: ['latin'] });

// Définissez votre composant Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Utilisez useState pour gérer l'état du mail
  const [mail, setMail] = useState<string | null>(null);

  // Utilisez useEffect pour déclencher le décodage du token lorsque le composant est monté
  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      try {
        // Utilisez votre fonction decodeToken pour décoder le token ici
        const decodedToken = decodeToken(token);
        setMail(decodedToken.email);
      } catch (error) {
        console.error("Error decoding token: ", error);
      }
    }
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar */}
        <Navbar mail={mail} />
        

        {/* Contenu de la page */}
        {children}

    <Footer />
      </body>
    </html>
  )
}
