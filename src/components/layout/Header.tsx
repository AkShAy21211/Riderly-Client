import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AuthContext } from "../../context/AuthContext";
const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State to manage the profile dropdown visibility

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <header className="">
      <div className="container mx-auto px-4 md:px-32 md py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-font">RIDERLY</h1>
        </div>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex items-center space-x-6 font-semibold text-sm">
          <Link to="#">Home</Link>
          <Link to="#">About</Link>
          <Link to="#">Contact</Link>

          {/* Profile Icon (Desktop) */}
          <div className="relative">
            <button
              onClick={toggleProfileMenu}
              className="flex items-center space-x-2"
            >
              <AccountCircleIcon />
            </button>

            {/* Profile Dropdown Menu */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-md w-48">
                <ul className="space-y-2 p-3">
                  {!isAuthenticated ? (
                    <>
                      <li>
                        <Link
                          to="/register"
                          className="block p-2 hover:bg-primary hover:text-white rounded-md"
                        >
                          Sign up
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/login"
                          className="block p-2 hover:bg-primary hover:text-white rounded-md"
                        >
                          Sign in
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link
                          to="/account-settings"
                          className="block p-2 hover:bg-primary  hover:text-white rounded-md"
                        >
                          Account
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/logout"
                          className="block p-2 hover:bg-primary hover:text-white rounded-md"
                        >
                          Logout
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>
        </nav>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-primary text-white">
          <ul className="space-y-4 px-4 py-4 text-center text-sm font-semibold">
            <li className="hover:bg-white hover:text-black p-1 rounded-md">
              <Link to="#">Home</Link>
            </li>
            <li className="hover:bg-white hover:text-black p-1 rounded-md">
              <Link to="#">About</Link>
            </li>
            <li className="hover:bg-white hover:text-black p-1 rounded-md">
              <Link to="#">Contact</Link>
            </li>
            {!isAuthenticated ? (
              <>
                <li className="hover:bg-white hover:text-black p-1 rounded-md">
                  <Link to="#">Sign Up</Link>
                </li>
                <li className="hover:bg-white hover:text-black p-1 rounded-md">
                  <Link to="#">Sign In</Link>
                </li>
              </>
            ) : (
              <>
                <li className="hover:bg-white hover:text-black p-1 rounded-md">
                  <Link to="#">Account</Link>
                </li>
                <li className="hover:bg-white hover:text-black p-1 rounded-md">
                  <Link to="#">Logout</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
