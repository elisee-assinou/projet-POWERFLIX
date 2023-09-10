"use client";
import Image from 'next/image';
import { Button } from 'flowbite-react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

import MovieList from './MovieList';


export default function Home() {
  return (
    <div className="bg-black">
      {/* Barre de navigation */}
      

      {/* Bannière */}
      <Banner />
      
      <MovieList />

      {/* ... */}
     
    </div>
  );
}
