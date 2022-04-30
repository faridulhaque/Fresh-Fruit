import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      {/* that is navbar developed with the bootstrap framework */}
      <nav className="navbar navbar-expand-lg bg-light p-3">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <i className="fa-solid fa-bars"></i>
          </button>
          <Link className="navbar-brand me-auto ms-5" to="/">
            Fresh Fruit
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
              <li className="nav-item ms-2">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>

              {/* dropdown menu if user is logged In */}
              <li class="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  to="/"
                  role="button"
                  aria-expanded="false"
                >
                  More Options
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/manageItems">
                      Manage Items
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      My Items
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Add New Item
                    </Link>
                  </li>

                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
