import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Card from "./components/Card";
import Categories from "./components/Categories";
import CategoryProducts from "./components/CategoriesProducts";
import Navbar from "./components/Navbar";

// Layout Component
const Layout = ({ children, navbarType }) => {
  React.useEffect(() => {
    document.title = navbarType || "React App";
  }, [navbarType]);

  return (
    <>
      <Navbar type={navbarType} />
      <main className="p-4">{children}</main>
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes without Navbar */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Routes with Navbar */}
        <Route
          path="/card"
          element={
            <Layout navbarType="Card Page">
              <Card />
            </Layout>
          }
        />
        <Route
          path="/categories"
          element={
            <Layout navbarType="Categories Page">
              <Categories />
            </Layout>
          }
        />
        <Route
          path="/categories/:categoryName"
          element={
            <Layout navbarType="Category Products">
              <CategoryProducts />
            </Layout>
          }
        />
        {/* Logout page */}
        <Route
          path="/logout"
          element={
            <Layout navbarType="Logout Page">
              <LogoutPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

// LogoutPage Component
const LogoutPage = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    // Simulate clearing authentication state
    console.log("User logged out.");
    setTimeout(() => {
      navigate("/");
    }, 2000); // Redirect after 2 seconds
  }, [navigate]);

  return (
    <div className="text-center mt-10">
      <h2 className="text-xl font-semibold text-gray-800">
        You have logged out successfully!
      </h2>
      <p className="text-gray-500">Redirecting to login...</p>
    </div>
  );
};

export default App;
