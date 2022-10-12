import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    // <nav>
    //   <Link to="/">Topics</Link>
    //   <Link to="/statistics">Statistics</Link>
    //   <Link to="/blog">Blog</Link>
    // </nav>
    <div>
      <div className="navbar">
        <div className="navbar">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 text-black  rounded-box w-52"
            >
              <li>
                <Link to="/">Topics</Link>
                {/* <a href="/">Topics</a> */}
              </li>

              <li>
                <Link to="/statistics">Statistics</Link>
                {/* <a href="/statics">Statics</a> */}
              </li>

              <li>
                <Link to="/blog">Blog</Link>
                {/* <a href="/blog">Blog</a> */}
              </li>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost normal-case text-black text-xl">
            Quiz Mania
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-black">
            <li>
              <Link to="/">Topics</Link>
              {/* <a href="/">Topics</a> */}
            </li>

            <li>
              <Link to="/statistics">Statistics</Link>
              {/* <a href="/statics">Statics</a> */}
            </li>
            <li>
              <Link to="/blog">Blog</Link>
              {/* <a href="/blog">Blog</a> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
