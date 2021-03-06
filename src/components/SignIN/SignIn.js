import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";


import { auth } from "../../Firebase/firebase.init";
import { useItems } from "../hooks/useItems";

import "./SignIn.css";

const provider = new GoogleAuthProvider();

const SignIn = () => {
  const [items, setItems, loading] = useItems();
  const [authError, setAuthError] = useState('');
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

  const helpMeSignInWithEmailPass = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        
        const user = userCredential.user;
        
        console.log(user);
        navigate(from, { replace: true });
        
        
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError('Email or password is incorrect');
      });
  };
  const signMeInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user)
        
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const resetPassword = () =>{
    if(email.value){
      sendPasswordResetEmail(auth, email.value)
      .then(() => {
        toast.success('check your email to reset your password',{id: 'resetPassword'});
        
      })
      .catch((error) => {
        
        
      });
    }
  }

  return (
    <div className="signIn">
      <div className="manage-loading">
        {loading && <ClipLoader color={"red"} loading={loading} size={100} />}
      </div>
      <div className="signIn-form-container">
        <h2 className="signIn-h2">Sign In to Continue...</h2>
        <form onSubmit={helpMeSignInWithEmailPass}>
          <div className="input-group-signIn">
            <label className="input-group-signIn-label">Email: </label>
            <br />
            <input
              onBlur={getEmail}
              className="input-group-signIn-box"
              type="email"
              name="email"
            ></input>
            {email?.error && (
              <small style={{ color: "red" }}>{email.error}</small>
            )}
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
             {password?.error && (
              <small style={{ color: "red" }}>{password.error}</small>
            )}
            {
              authError && <small className="text-danger">{authError +"." + " "}<span className="remember-password" onClick={resetPassword}>Forgot Password?</span></small>
            }
          </div>
          <div className="signIn-btn-wrapper">
           
            <button type="submit" className="signIn-btn">
              Sign In
            </button>
            <small className="small-navigator-signIn-text">Not a user? <Link className="small-navigator-signIn-link" to="/register">Create an account</Link></small>
          </div>
          <div className="breakingLine">
            <div className="breaking-line"></div>
            <small className="breakingLine-small">or</small>
            <div className="breaking-line"></div>
          </div>
        </form>
        <button className="signIn-btn-google" onClick={signMeInWithGoogle}>
          
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
