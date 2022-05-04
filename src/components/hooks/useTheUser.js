import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../Firebase/firebase.init";

export const useTheUser = () =>{
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
   return currentUser;
} 