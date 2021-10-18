import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import initializeAuthentication from '../firebase/firebase.initialize';

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googelProvider = new GoogleAuthProvider();


    // Sign in Using Google
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googelProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
            }).catch(error => {
                console.log(error);
            })
    }

    // new user Sign up using Email & pass

    const signUpUsingEmailAndPassword = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log('paichi re')
            }).catch(error => {
                alert(error.message)
            })
        updateProfile(auth.currentUser, {
            displayName: {name}
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }

    // Sign in existing users 

    const logInUsingEmailAndPassword = () => {
        console.log('click')
    }


    // State Change automatic
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        })
    }, [])

    // user logout 

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch(error => {
                alert('Something Went Wrong! plz try again')
            })
    }
    return {
        user,
        signInUsingGoogle,
        logOut,
        signUpUsingEmailAndPassword,
        logInUsingEmailAndPassword
    }
}

export default useFirebase;