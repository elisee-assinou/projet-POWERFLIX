import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const Banner = () => {
  const [animate, setAnimate] = useState(false);
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const titleText = " PowerCode ";
  const [typedTitle, setTypedTitle] = useState('');
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    // Utilisez setTimeout pour déclencher l'animation après un certain délai (par exemple, 1 seconde).
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 1000);

    // Nettoyez le timeout lorsque le composant est démonté.
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Configurez des animations GSAP pour les éléments animés
    if (animate) {
      const tl = gsap.timeline();

      // Animation de l'image
      tl.fromTo(
        bannerRef.current.querySelector('.banner-image'),
        { opacity: 0, scale: 1.2 },
        { opacity: 1, scale: 1, duration: 1 }
      );

      // Animation du sous-titre
      tl.fromTo(
        bannerRef.current.querySelector('.banner-subtitle'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5 }
      );

      // Animation des témoignages
      tl.from(
        bannerRef.current.querySelectorAll('.testimonial-card'),
        { opacity: 0, y: 50, stagger: 0.2, duration: 0.5 },
        '-=0.3' // Décalage par rapport aux autres animations
      );

      // Animation du titre lettre par lettre
      const animateTitle = () => {
        if (currentLetterIndex < titleText.length) {
          setTypedTitle((prevTypedTitle) => prevTypedTitle + titleText.charAt(currentLetterIndex));
          setCurrentLetterIndex((prevIndex) => prevIndex + 1);
        }
      };

      const titleAnimation = gsap.to({}, {
        repeat: titleText.length - 1,
        delay: 0.1,
        onComplete: animateTitle,
      });

      tl.add(titleAnimation);
    }
  }, [animate, currentLetterIndex]);

  const testimonies = [
    {
      name: 'John Doe',
      testimony: 'Ceci est un témoignage intéressant.',
      image: '/john-doe.jpg', // Chemin de l'image de la personne
    },
    {
      name: 'Jane Smith',
      testimony: 'Un autre témoignage impressionnant.',
      image: '/jane-smith.jpg', // Chemin de l'image de la personne
    },
    {
      name: 'Alice Johnson',
      testimony: 'Un autre témoignage élogieux.',
      image: '/alice-johnson.jpg', // Chemin de l'image de la personne
    },
  ];

  return (
    <div ref={bannerRef} className="relative h-screen bg-gray-900">
      <img
        src="/image1.jpg" // Remplacez par le chemin de votre image
        alt="Banner Image"
        className={`w-full h-full object-cover transition-opacity duration-500 banner-image ${
          animate ? 'opacity-100 filter brightness-75' : 'opacity-0'
        }`}
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <h1 ref={titleRef} className={`font-heading font-roboto text-6xl text-white mb-4 banner-title ${animate ? 'animate-bounce' : ''}`}>
          {typedTitle}
        </h1>
        <p className={`font-heading text-3xl text-white mb-8 banner-subtitle ${animate ? 'animate-fade-in-delay' : ''}`}>
          Love Code As Yourself
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonies.map((testimony, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-4 max-w-md shadow-lg transform hover:scale-105 transition-transform duration-300 ${
                animate ? 'animate-bounce-delay testimonial-card' : ''
              }`}
            >
              <img
                src={testimony.image}
                alt={`Photo de ${testimony.name}`}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-800 mb-2 text-lg">{testimony.testimony}</p>
              <p className="text-gray-600 font-semibold">{testimony.name}</p>
            </div>
            
          ))}
          <br /><br /><br /><br />
        </div>
        <br />
        <br /><br />
        <Link href="/lien-vers-page">
          <div className={`bg-yellow-500 hover:bg-yellow-400 text-white px-8 py-4 rounded-full text-2xl mt-8 transition-colors duration-300 ${animate ? 'animate-bounce-delay' : ''}`}>
            En savoir plus
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
