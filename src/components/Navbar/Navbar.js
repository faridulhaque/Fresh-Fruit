
import React from "react";
import {useState, useEffect} from "react"

import { Link, useNavigate } from "react-router-dom";
import {signOut, onAuthStateChanged } from "firebase/auth";


import "./Navbar.css";
import { auth } from "../../Firebase/firebase.init";


const Navbar = () => {
  
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        setCurrentUser(user);
        
      } else {
        setCurrentUser({});
      }
    });
   }, []);
  
  

  // function for signing out
  const logout = () => {
    signOut(auth)
    .then(() => {
        navigate('/')
    })
    .catch((error) => {
      
    });
  };
  // function for signing out ended
  return (
    <div>
      {/* that is navbar developed with the bootstrap framework. color and style updated with css */}
      <nav className="navbar navbar-expand-lg bg-secondary p-3">
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
                <Link className="nav-item-hover nav-link active" aria-current="page" to="/">
                  Home
                </Link>
                
              </li>
              
              <li className="nav-item ms-2">
                <Link className="nav-item-hover nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              
              <li className="nav-item ms-2">
                <Link className="nav-item-hover nav-link" to="/supplier">
                  Suppliers
                </Link>
              </li>

              {/* dropdown menu if user is logged In */}
              
              { 
                !currentUser?.uid ?  <li className="nav-item ms-2">
                <Link className="nav-item-hover nav-link" to="/signIn">
                  SignIn
                </Link>
              </li> :
                
                <li className="nav-item dropdown">
                <Link
                  className="nav-item-hover nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  to="/"
                  role="button"
                  aria-expanded="false"
                >
                  More
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/manageItems">
                      Manage Items
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/myItems">
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
                  <li className="">
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
