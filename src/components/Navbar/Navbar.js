import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-around">
      <div>
        <h2 className="text-2xl font-bold text-orange-600">Quiz Time</h2>
      </div>
      <div className="text-orange-600 font-semibold flex gap-3">
        <Link to="/"></Link>
        <Link to="/home">Home</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;
