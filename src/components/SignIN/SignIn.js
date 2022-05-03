import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase/firebase.init';
import './SignIn.css';

const SignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    

    const getEmail = (e) =>{
        setEmail(e.target.value);
        
        
    }
    const getPassword = (e) =>{
        setPassword(e.target.value);
        
        
    }

    const helpMeSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password, auth);
        console.log("signed in")
        
    }
    const signUpWithGoogle = () =>{
        signInWithGoogle();
    }
    
    
    return (
        <div className="signIn">
            <h2 className="signIn-h2">Sign In to Continue...</h2>
            <div className="signIn-form-container m-auto">
                <form onSubmit={helpMeSignIn}>
                    
                    <div className="input-group-signIn">
                        <label className="input-group-signIn-label">Email: </label>
                        <br/>
                        <input onBlur={getEmail} className="input-group-signIn-box" type="email" name="email"></input>
                    </div>
                    <div className="input-group-signIn">
                        <label className="input-group-signIn-label">Password: </label>
                        <br/>
                        <input onBlur={getPassword}className="input-group-signIn-box" type="password" name="password"></input>
                    </div>
                    <div className="signIn-btn-wrapper">
                    <button type="submit" className="signIn-btn">Sign In</button>
                    </div>
                    <div className="breakingLine">
                        <div className="breaking-line">

                        </div>
                        <small className="breakingLine-small">or</small>
                        <div className='breaking-line'>

                        </div>
                    </div>
                    
                </form>
                <button onClick={signUpWithGoogle}> sign up with google</button>
            </div>
        </div>
    );
};

export default SignIn;