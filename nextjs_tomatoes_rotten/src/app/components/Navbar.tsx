import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-white text-2xl font-bold">Tomatoes R</div>
        </Link>

        <ul className="flex justify-center space-x-6"> {/* Utilisation de justify-center pour centrer les liens horizontalement */}
          <li>
            <Link href="/movies">
              <div className="text-white hover:text-gray-300">Movies</div>
            </Link>
          </li>
          <li>
            <Link href="/tv-shows">
              <div className="text-white hover:text-gray-300">TV Shows</div>
            </Link>
          </li>
          <li>
            <Link href="/preferences">
              <div className="text-white hover:text-gray-300">My Preferences</div>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <div className="text-white hover:text-gray-300">Profile</div>
            </Link>
          </li>
        </ul>

        <ul className="flex justify-center space-x-6"> {/* Utilisation de justify-center pour centrer les liens horizontalement */}
          <li>
            <Link href="/register">
              <div className="text-white hover:text-gray-300">register</div>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <div className="text-white hover:text-gray-300">login</div>
            </Link>
          </li>
          <li>
            <Link href="/my-list">
              <div className="text-white hover:text-gray-300">logout</div>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <div className="text-white hover:text-gray-300">Profile</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
