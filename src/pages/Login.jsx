import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example username (you can change logic later)
    const username = email.split("@")[0];

    localStorage.setItem("user", username);

    navigate("/"); // go to home page
  };

  return (
    <div>
      <Header />

      <main className="flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4 py-12">
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold text-center mb-2">
              Welcome Back
            </h2>

            <p className="text-center text-gray-500 mb-6">
              Login to continue
            </p>

            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 px-4 py-3 border rounded-lg"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-6 px-4 py-3 border rounded-lg"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;