import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/profile" },
    { name: "Login", path: "/login" },
    { name: "Signup", path: "/signup" },
  ];
  const linkStyle =
    "transition-all duration-300  hover:scale-120 px-2 hover:px-5";

  return (
    <div>
      <nav className=" fixed w-full z-20 top-0 inset-s-0 py-3  text-white gap-2 flex justify-center backdrop-blur-sm ">
        {navLinks.map((link) => (
          <Link key={link.name} hide to={link.path} className={linkStyle}>
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
