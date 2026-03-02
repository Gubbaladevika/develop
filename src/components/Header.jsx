import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) {
      setUser(loggedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser("");
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-purple-900 shadow">
      <h1 className="text-xl font-bold text-white">
        <Link to="/">Skyline Labs</Link>
      </h1>

      <div className="flex items-center gap-6">

        {/* Show navigation only after login */}
        {user && (
          <>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link to="/product" className="hover:text-blue-600">
              Products
            </Link>
            <Link to="/services" className="hover:text-blue-600">
              Services
            </Link>
            <Link to="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </>
        )}

        {/* Right side */}
        {user ? (
          <>
            <span className="text-blue-600 font-medium">
              Hi, {user}
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="text-blue-600 font-medium">
            Login
          </Link>
        )}

      </div>
    </header>
  );
};

export default Header;