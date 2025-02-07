import React from "react";
import { NavLink } from "react-router-dom";
import '../../App.css'

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className="btn btn-outline btn-primary">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="btn btn-outline btn-primary ">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/skills" className="btn btn-outline btn-primary ">
          Skill
        </NavLink>
      </li>
      <li>
        <NavLink to="/education" className="btn btn-outline btn-primary ">
          Education
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" className="btn btn-outline btn-primary ">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/contacts" className="btn btn-outline btn-primary ">
          Contacts
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar fixed top-0 z-20 backdrop-blur-lg border border-white/30 text-white">
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
            {/* <img src="https://i.ibb.co.com/Y7nfM5DG/mylasted.jpg" alt="photo" /> */}
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-30 p-2 shadow gap-y-2 text-white"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center">
          <div className="avatar">
            <div className="mask mask-hexagon hidden lg:w-14">
              <img className="" src="https://i.ibb.co.com/Y7nfM5DG/mylasted.jpg" />
            </div>
          </div>
          <a className="btn btn-ghost text-sm text-white  lg:text-md">Mahmudur Rahman</a>
        </div>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-x-2 text-white">{links}</ul>
      </div>
      <div className="navbar-end">
        <a href="https://drive.google.com/file/d/1pE9yOgcptlcrBghaOXlQxWyCXQmHVYZ9/view?usp=sharing" className="btn  btn-success">Russume</a>
      </div>
    </div>
  );
};

export default Navbar;
