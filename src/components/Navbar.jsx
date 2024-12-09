import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ type }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic to clear user session (e.g., clear localStorage or context state)
    console.log("Logging out...");
    navigate("/");  // Redirect to Login page
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center border-b-2 border-gray-600">
      <h3 className="text-xl">{type || "Default Navbar"}</h3>
      <div className="flex items-center space-x-4">
        <Link to="/categories" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md">
          Categories
        </Link>
        <Link to="/card" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md">
          Card
        </Link>
        <button 
          onClick={handleLogout} 
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
