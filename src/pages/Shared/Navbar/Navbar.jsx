import React from "react";
import Logo from "../../../components/Logo/Logo";
import { Link, NavLink } from "react-router";
import { GoArrowUpRight } from "react-icons/go";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  // logout function
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  const navlinks = (
    <>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>

      <li>
        <NavLink to="/coverage">Coverage</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-5 rounded-lg">
      <div className="navbar-start">
        {/* Mobile menu button */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navlinks}
          </ul>
        </div>

        {/* Logo */}
        <div className=" text-xl">
          <Logo />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>

      {/* navbar end */}
      <div className="navbar-end gap-2">
        {user ? (
          <Link onClick={handleLogOut} className="btn rounded-lg px-5">
            Sign Out
          </Link>
        ) : (
          <Link to={"/login"} className="btn rounded-lg px-5">
            Sign In
          </Link>
        )}
        <Link to={"/become-a-rider"} className="btn btn-accent rounded-lg px-5">
          Be a rider
        </Link>
        <Link className="p-2 rounded-full bg-black-13 text-primary text-2xl">
          <GoArrowUpRight />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
