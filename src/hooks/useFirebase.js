import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth'
import initializeAuthentication from '../firebase/firebase.initialize';
import { useHistory } from 'react-router';

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googelProvider = new GoogleAuthProvider();
    const history = useHistory();


    // Sign in Using Google
    const signInUsingGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googelProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setIsLoading(false)
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                setIsLoading(false)
            })
    }

    // new user Sign up using Email & pass

    const signUpUsingEmailAndPassword = (name, email, password) => {
        console.log(name)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log('paichi re')
            }).catch(error => {
                alert(error.message)
            }).finally(() => setIsLoading(false))
        updateProfile(auth.currentUser, {
            displayName: {name}
        })
            .then(() => {
                // Profile updated!
                // ...
            }).catch((error) => {
                // An error occurred
                // ...
            });
        console.log(user)
    }

    // Sign in existing users 

    const logInUsingEmailAndPassword = (email, password, redirect_url) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setUser(user);
                history.push(redirect_url)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            }).finally(()=> setIsLoading(false))
    }


    // State Change automatic
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false)
        })
    }, [])

    // user logout 

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch(error => {
                alert('Something Went Wrong! plz try again')
            }).finally(() => setIsLoading(false))
    }
    return {
        user,
        signInUsingGoogle,
        logOut,
        signUpUsingEmailAndPassword,
        logInUsingEmailAndPassword,
        isLoading
    }
}

export default useFirebase;