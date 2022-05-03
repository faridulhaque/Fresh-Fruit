import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

import { auth } from "../../Firebase/firebase.init";
import useFirebaseHooks from "../hooks/useFirebaseHooks";

const SignUp = () => {
  const {setUser,
    signInWithGoogle, 
    navigate, 
    from} =useFirebaseHooks();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const signUpWithGoogle = () => {
    signInWithGoogle();
  };
  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  const signUpWithEmailAndPassword = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {});
  };
  return (
    <div>
      <h2>Sign up</h2>
      <div>
        <form onSubmit={signUpWithEmailAndPassword}>
          <input
            onBlur={getEmail}
            type="email"
            name="email"
            placeholder="your email"
          />
          <br />
          <input
            onBlur={getPassword}
            type="password"
            name="password"
            placeholder="your password"
          />
          <br />
          <button type="submit">Sign Up</button>
        </form>
        <button onClick={signUpWithGoogle}> sign up with google</button>
      </div>
    </div>
  );
};

export default SignUp;
