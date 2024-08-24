import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.console";
// import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/web-extension";
import PropTypes from 'prop-types'
import axios from "axios";

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loggedInUser, setLoggedInUser] = useState(null); 

    const [loading , setLoading] = useState(true);

    const createUser = (email, password, name )=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password ,  name)
    }

   
    const signInUser =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    
    // const googleLogin = () => {
    //     const provider = new GoogleAuthProvider();
    //     return signInWithPopup(auth, provider); 
    // };

    
    // const githubLogin =()=>{
    //     const githubProvider = new GithubAuthProvider();
    //     return signInWithPopup(auth, githubProvider);
    // }

    const logOut = ()=>{
        setLoading(true)
        setUser(null)
        setLoggedInUser(null);
        return signOut(auth)
    }

   
    useEffect(() => {
        if (user) {
            setLoggedInUser(user);
        } else {
            setLoggedInUser(null);
        }
    }, [user]);

    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail}
            setUser(currentUser);
            setLoading(false);
           
            if(currentUser){
                
                axios.post(`${import.meta.env.VITE_BASE_URL}/jwt`, loggedUser, {withCredentials: true})
                .then(res =>{
                    console.log('token response',res.data);
                })
            }
            else{
                axios.post(`${import.meta.env.VITE_BASE_URL}/logOut`,loggedUser, {
                    withCredentials: true
                })
                .then(res => {
                    console.log(res.data)
                })
            }
        });
        return () => {
            unSubscribe();
        }
    }, [user?.email]);

    const allValues = {
        createUser,
        signInUser,
        // googleLogin,
        // githubLogin,
        logOut,
        user,
        loggedInUser, 
        loading,
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children: PropTypes.node.isRequired
}


export default AuthProvider;