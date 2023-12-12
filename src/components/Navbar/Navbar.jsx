import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

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

              <nav>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    //  a href="/"
                    to="/"
                    className="nav-link text-uppercase fw-7 text-white ls-2 fs-22"
                  >
                    Accueil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/services"
                    className="nav-link text-uppercase fw-7 text-white ls-2 fs-22"
                  >
                    Parcours
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/portfolio"
                    className="nav-link text-uppercase fw-7 text-white ls-2 fs-22"
                  >Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact"
                    className="nav-link text-uppercase fw-7 text-white ls-2 fs-22"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
