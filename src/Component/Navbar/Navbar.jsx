import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className="btn btn-outline btn-primary">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-outline btn-primary ">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-outline btn-primary ">
          Skill
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-outline btn-primary ">
          Education
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-outline btn-primary ">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-outline btn-primary ">
          Contacts
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gray-300   lg:px-4 lg:rounded-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-30 p-2 shadow gap-y-2 "
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center">
          <div className="avatar">
            <div className="mask mask-hexagon hidden lg:w-14">
              <img className="" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <a className="btn btn-ghost text-sm  lg:text-md">Mahmudur Rahman</a>
        </div>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-x-2 ">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn  btn-success">Russume</a>
      </div>
    </div>
  );
};

export default Navbar;
