import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/cats" },
    { name: "Login", path: "/login" },
    { name: "Signup", path: "/signup" },
  ];
  const linkStyle =
    "transition-all duration-300 text-xl  px-2 hover:px-5 hover:text-shadow-[0_0_40px_rgba(255,255,255,0.4)] font-sans";

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
