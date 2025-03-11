import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Dynamic Form Builder</h1>
      <Link to="/form">Go to Form</Link>
    </div>
  );
};

export default Home;
