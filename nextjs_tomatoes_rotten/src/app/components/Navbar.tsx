"use client";
import Link from 'next/link';

const Navbar = ({ mail }) => {
  const linkStyle = {
    textDecoration: 'none', // Supprime le soulignement des liens
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-white text-2xl font-bold" style={linkStyle}>
            POWER FLIX
          </div>
        </Link>

        <ul className="flex justify-center space-x-6">
          {mail ? ( // Si l'utilisateur est connecté
            <>
              <li>
                <Link href="/movies">
                  <div style={linkStyle} className="text-white hover:text-gray-300">
                    All Movies
                  </div>
                </Link>
              </li>
              
              <li>
                <Link href="/preferences">
                  <div style={linkStyle} className="text-white hover:text-gray-300">
                    My Preferences
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <div style={linkStyle} className="text-white hover:text-gray-300">
                  { mail || "Profile"}
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/logout">
                  <div style={linkStyle} className="text-white hover:text-gray-300">
                    logout
                  </div>
                </Link>
              </li>
            </>
          ) : null}

          {!mail ? ( // Si l'utilisateur n'est pas connecté
            <>
              <li>
                <Link href="/register">
                  <div style={linkStyle} className="text-white hover:text-gray-300">
                    Register
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <div style={linkStyle} className="text-white hover:text-gray-300">
                    Login
                  </div>
                </Link>
              </li>
            </>
          ) : null}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
