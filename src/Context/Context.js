import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.init';



const auth = getAuth(app);

export const AuthContext = createContext()


const Context = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({})
    const [lodar, setLodar] = useState(true)

    // 1. Create user 
    const createUser = (email, password) => {
        setLodar(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // 2. ubdate name 
    const updateName = (name) => {
        setLodar(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }
    // 3. verify email
    const verifyEmail = () => {
        setLodar(true)
        return sendEmailVerification(auth.currentUser)
    }

    // 4. google singin 
    const googleSignin = () => {
        setLodar(true)
        return signInWithPopup(auth, googleProvider)
    }

    // 5. logout 
    const logOut = () => {
        setLodar(true)
        return signOut(auth)
    }
    // 6. login 
    const login = (email, password) => {
        setLodar(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // 7. forget password 
    const forgetPassword = (email) => {
        setLodar(true)
        return sendPasswordResetEmail(auth, email)
    }







    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLodar(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = { user, createUser, updateName, verifyEmail, googleSignin, logOut, login, forgetPassword, lodar }

    return (
        <AuthContext.Provider value={authInfo}>
            <div>
                {children}
            </div>
        </AuthContext.Provider>
    )
}

export default Context
