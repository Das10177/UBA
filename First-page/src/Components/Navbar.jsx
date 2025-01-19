// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="bg-gray-500 p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* <Link to="/">
          <img src={logo} alt="Logo" className="w-full h-20 object-cover" />
        </Link> */}
        {/* <div className="text-white text-2xl font-bold">My Website</div> */}
        {/* <img
          src="https://plus.unsplash.com/premium_photo-1661876402729-09f3b7e87640?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="logo"
          className="w-20 h-20 object-cover"
        /> */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white text-xl hover:text-red-300">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="text-white text-xl hover:text-gray-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="text-white text-xl hover:border-red-700 hover:text-red-700"
            >
              Contact Us
            </Link>
            <span className="absolute bottom-0 left-0 right-0 block h-[2px] bg-red-500 transition-all duration-500 scale-x-0 group-hover:scale-x-100"></span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
