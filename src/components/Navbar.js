import React from "react";
import { Link } from "react-router-dom";


const Navbar = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <nav
        className={`navbar fixed-top navbar-expand-lg ${
          darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
        }`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h3 style={{ color: darkMode ? "white" : "black" }}>NewsX</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {['Home', 'Business', 'Sports', 'Entertainment', 'Health', 'Science', 'Technology'].map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link className="nav-link" to={`/${item.toLowerCase()}`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="darkModeToggle"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <label
                className={`form-check-label ${darkMode ? "text-light" : "text-dark"}`}
                htmlFor="darkModeToggle"
              >
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
