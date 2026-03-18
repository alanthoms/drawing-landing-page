import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="bg-neutral-primary fixed w-full z-20 top-0 inset-s-0 border-b border-default">
        <Link to="/">Home</Link>
        <Link to="/profile"> Courses</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
    </div>
  );
};

export default Navbar;
