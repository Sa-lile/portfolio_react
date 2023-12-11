import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Services from "../Services/Services";

export const Navbar = () => {
  const [navToggler, setNavToggler] = useState(false);
  const closeNavbar = () => setNavToggler(false)


  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="brand-and-toggler flex flex-sb">
            <button type="button" className="navbar-open-btn text-white"
            onClick={() => setNavToggler(!navToggler)}>
              <FaBars size={30}></FaBars>
            </button>
            <div className={navToggler ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
              <button type="button" className="navbar-close-btn text-white"
              onClick={closeNavbar}>
                <FaTimes size={30}></FaTimes>
              </button>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link text-uppercase fw-7 text-white ls-2 fs-22"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/parcours"
                    className="nav-link text-uppercase fw-7 text-white ls-2 fs-22"
                  >
                    Parcours
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/portfolio"
                    className="nav-link text-uppercase fw-7 text-white ls-2 fs-22"
                  >Portfolio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className="nav-link text-uppercase fw-7 text-white ls-2 fs-22"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
