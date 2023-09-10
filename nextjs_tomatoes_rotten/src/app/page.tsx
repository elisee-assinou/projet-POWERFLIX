"use client";
import Image from 'next/image';
import { Button } from 'flowbite-react';
import Banner from './components/Banner';

import MovieList from './MovieList';

import { useEffect, useState } from 'react';
import jwt_decode, { JwtPayload } from 'jwt-decode'; // Import jwt_decode with JwtPayload



export default function Home() {

  const [userId, setUserId] = useState<string | null>(null); // Initialize as null or an appropriate type

  useEffect(() => {
    const getUserNameFromToken = () => {
      const token = localStorage.getItem("accessToken");

      if (token) {
        try {
          const decodedToken = jwt_decode<JwtPayload>(token); // Specify JwtPayload as the type
          setUserId(decodedToken.idUser);
        } catch (error) {
          console.error("Error decoding token: ", error);
        }
      }
    };

    getUserNameFromToken();
  }, []);
  return (
    <div className="bg-black">
      {/* Barre de navigation */}
      

      {/* Bannière */}
      <Banner />
      
      <MovieList IdUser={userId}/>

      {/* ... */}
     
    </div>
  );
}
