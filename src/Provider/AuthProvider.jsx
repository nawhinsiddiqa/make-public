import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, getAuth, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/Firebase.config";



export const AuthContext=createContext(null);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();       
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser=(email,password)=>{
        setLoading(true)

        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleSignIn =()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)  
    }

    const updateUserProfile =(name,photo) =>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        
          });
    }

    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            console.log('currently logged user', currentUser);
            setUser(currentUser);
            setLoading(false);

            return () => {
                unSubscribe();
            }

        })

    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
         signInUser,
         logOut,
         updateUserProfile ,
         googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
