import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";


import { auth } from "../../Firebase/firebase.init";
import useFirebaseHooks from "../hooks/useFirebaseHooks";
import "./SignIn.css";

const SignIn = () => {
  const {signInWithGoogle, navigate, from, setUser } = useFirebaseHooks();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const helpMeSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        setUser(user);
        navigate(from, { replace: true });
        
      })
      .catch((error) => {
        
      });
  };
  const signUpWithGoogle = () => {
    signInWithGoogle();
  };

  return (
    <div className="signIn">
      <div className="signIn-form-container">
        <h2 className="signIn-h2">Sign In to Continue...</h2>
        <form onSubmit={helpMeSignIn}>
          <div className="input-group-signIn">
            <label className="input-group-signIn-label">Email: </label>
            <br />
            <input
              onBlur={getEmail}
              className="input-group-signIn-box"
              type="email"
              name="email"
            ></input>
          </div>
          <div className="input-group-signIn">
            <label className="input-group-signIn-label">Password: </label>
            <br />
            <input
              onBlur={getPassword}
              className="input-group-signIn-box"
              type="password"
              name="password"
            ></input>
          </div>
          <div className="signIn-btn-wrapper">
            <button type="submit" className="signIn-btn">
              Sign In
            </button>
          </div>
          <div className="breakingLine">
            <div className="breaking-line"></div>
            <small className="breakingLine-small">or</small>
            <div className="breaking-line"></div>
          </div>
        </form>
        <button className="signIn-btn-google" onClick={signUpWithGoogle}>
          {" "}
          Sign Up With Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
