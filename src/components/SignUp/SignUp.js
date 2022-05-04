import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import './SignUp.css';

import { auth } from "../../Firebase/firebase.init";
// import useFirebaseHooks from "../hooks/useFirebaseHooks";
import { Link, useLocation, useNavigate } from "react-router-dom";
const provider = new GoogleAuthProvider();

const SignUp = () => {
  const [email, setEmail] = useState({value: "", error: ""});
  const [password, setPassword] = useState({value: "", error: ""});

  const location= useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const getEmail = (e) => {
    if(e.target.value){
      if(/\S+@\S+\.\S+/.test(e.target.value)){
        setEmail({value: e.target.value, error: ""})
      }
      else{
        setEmail({value: "", error:"Invalid Email"})
      }
    }
    else{
      setEmail({value: "", error:"Email is required"})
    }
  };
  const getPassword = (e) => {
    if(e.target.value){
      if(e.target.value.length >= 8){
        setPassword({value: e.target.value, error:""})
      }
      else{
        setPassword({value: "", error:"Incorrect Password"})
      }

    }
    else{
      setPassword({value: "", error:"Password is required"});
    }
  };

  const signMeUpWithEmailAndPassword = (e) =>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate(from, { replace: true });
          console.log(user);
          
        
          
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });

  }

  const signMeUpWithGoogle =() =>{
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  
  return (
    <div className="sign-up">
      
      <div className="form-wrapper-signUp">
      <h2 className="signUp-h2-top">Sign Up Here!</h2>
        <form onSubmit={signMeUpWithEmailAndPassword}>
            <div className="input-group-signup">
                <label>Email</label>
                <br/>
                <input className="input-box-signup"
            onBlur={getEmail}
            type="email"
            name="email"
            
          />
          {email?.error && (
              <small style={{ color: "red" }}>{email.error}</small>
            )}
            </div>
            <div className="input-group-signup">
                <label>Password</label>
                <br/>
                <input
                className="input-box-signup"
            onBlur={getPassword}
            type="password"
            name="password"
            
          />
           {password?.error && (
              <small style={{ color: "red" }}>{password.error}</small>
            )}
            </div>
          
         
          <div className="signup-btn-wrapper">
          <button className="signup-btn"type="submit">Sign Up</button>
          <small className="breakingLine-small-signup">Already have an account? <Link to="/signIn">Click here</Link></small>
          </div>
          
          <div className="breakingLineSignUp">
            <div className="breaking-line-signup"></div>
            <small className="breakingLine-small-signup">or</small>
            <div className="breaking-line-signup"></div>
          </div>
        </form>
        <button className="signup-btn-google" onClick={signMeUpWithGoogle}> sign up with google</button>
      </div>
    </div>
  );
};

export default SignUp;
