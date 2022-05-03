import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../Firebase/firebase.init";

const RequireAuth = ({ children }) => {
    
    
    const [user, loading, error] = useAuthState(auth);
    // let auth = useAuth();
    let location = useLocation();
    if (loading) {
        return <p>Loading....</p>
    }
    if (!user) {
        
        return <Navigate to='/signIn' state={{ from: location }} replace />;
    }
    
   
    
    

    return children;
}

export default RequireAuth;