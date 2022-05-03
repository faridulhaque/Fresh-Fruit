import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase.init";
const provider = new GoogleAuthProvider();

const useFirebaseHooks = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    let from = location.state?.from?.pathname || "/";
    
    const [user, setUser] = useState({});
    const [userTwo, setUserTwo] = useState({});
//   sign in with google
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {});
  };




//   user available code auth state
useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        setUser(user);
        
      } else {
        setUser({});
      }
    });
   }, [user]);
  


//   signing out code 
  const signMeOut =()=>{
    signOut(auth).then(() => {
        
      }).catch((error) => {
        
      });
  }

  return {
    user,
    setUser,
    userTwo,
    setUserTwo,
    signInWithGoogle,
    signMeOut,
    navigate,
    from
  };
};
export default useFirebaseHooks;
