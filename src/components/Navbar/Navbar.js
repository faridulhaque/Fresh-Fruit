import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/firebase.init";
import "./Navbar.css";


const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);

  // function for signing out
  const logout = () => {
    signOut(auth);
  };
  // function for signing out ended
  return (
    <div>
      {/* that is navbar developed with the bootstrap framework. color and style updated with css */}
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
            
            <i className="fa-solid fa-bars"></i>
          </button>
          <Link className="navbar-brand me-auto ms-5" to="/">
            Fresh Fruit
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
              <li className="nav-item ms-2">
                <Link className="nav-link" to="/blog">
                  Supplier
                </Link>
              </li>

              {/* dropdown menu if user is logged In */}
              
              {
                user?.uid && <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  to="/"
                  role="button"
                  aria-expanded="false"
                >
                  {user?.displayName}
                </Link>
                <ul className="dropdown-menu">
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
                    <Link className="dropdown-item" to="/addNewItem">
                      Add New Item
                    </Link>
                  </li>
                  

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button onClick={logout} className="dropdown-item">
                      Sign Out 
                    </button>
                    
                  </li>
                </ul>

              </li>
              }
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
