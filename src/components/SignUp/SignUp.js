import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase/firebase.init';

const SignUp = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword, createUser, CreateLoading, CreateError,
      ] = useCreateUserWithEmailAndPassword(auth);
    const signUpWithGoogle = () =>{
        signInWithGoogle();
        
    }
    const getEmail = (e) =>{
        setEmail(e.target.value);
        
        
    }
    const getPassword = (e) =>{
        setPassword(e.target.value);
        
    }
    const signUpWithEmailAndPassword = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password, auth);


    }
    return (
        <div>
            <h2>Sign up</h2>
            <div>
                <form onSubmit={signUpWithEmailAndPassword}>
                    <input onBlur={getEmail} type="email" name="email" placeholder="your email"/>
                    <br/>
                    <input onBlur={getPassword} type="password" name="password" placeholder="your password"/>
                    <br/>
                    <button type="submit">Sign Up</button>
                    
                </form>
                <button onClick={signUpWithGoogle}> sign up with google</button>
            </div>
        </div>
    );
};

export default SignUp;