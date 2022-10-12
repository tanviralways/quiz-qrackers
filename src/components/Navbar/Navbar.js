import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/"></Link>
      <Link to="/home">Home</Link>
      <Link to="/statistics">Statistics</Link>
      <Link to="/blog">Blog</Link>
    </div>
  );
};

export default Navbar;
