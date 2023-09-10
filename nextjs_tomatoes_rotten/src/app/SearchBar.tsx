import { useEffect, useState } from 'react';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearchBar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Vous pouvez placer des effets secondaires côté client ici
  }, []);

  return (
    <div className="relative">
      <button
        onClick={toggleSearchBar}
        className="absolute top-0 right-0 p-2 m-2 text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          {isOpen ? (
            <path
              fill="currentColor"
              d="M19.708 17.297l-3.004-3.004a7.49 7.49 0 001.82-4.867c0-4.136-3.364-7.5-7.5-7.5S3.524 5.293 3.524 9.43s3.364 7.5 7.5 7.5a7.493 7.493 0 004.867-1.82l3.004 3.004a.998.998 0 101.414-1.414zM4.024 9.43c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6z"
            />
          ) : (
            <path
              fill="currentColor"
              d="M21.293 20.708l-5.298-5.298a8.472 8.472 0 001.67-5.055c0-4.686-3.814-8.5-8.5-8.5s-8.5 3.814-8.5 8.5 3.814 8.5 8.5 8.5a8.472 8.472 0 005.055-1.67l5.298 5.298a1 1 0 001.414-1.414zM3.293 11.293a8.472 8.472 0 001.67 5.055l5.298-5.298a1 1 0 10-1.414-1.414l-5.298 5.298a8.472 8.472 0 00-5.055-1.67c-4.686 0-8.5 3.814-8.5 8.5s3.814 8.5 8.5 8.5 8.5-3.814-8.5-8.5-8.5 3.814-8.5 8.5z"
            />
          )}
        </svg>
      </button>
      {isOpen && (
        <input
          type="text"
          placeholder="Rechercher..."
          className="w-48 p-2 pl-8 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
      )}
    </div>
  );
};

export default SearchBar;
