import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

import app from '../../firebase/firebase'

export const AuthContext = createContext()
const auth = getAuth(app)


const Context = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loding, setLoding] = useState(true)

    // 1. create a User
    const createUser = (email, password) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // 2. ubdate user details name 
    const updateName = (profile) => {
        setLoding(true);
        return updateProfile(auth.currentUser, profile)
    }



    // 3. singin with googleSignin
    const googleSignin = (gProvider) => {
        setLoding(true);
        return signInWithPopup(auth, gProvider)
    }

    // 4. user logOut
    const logOut = () => {

        setLoding(true);
        return signOut(auth)
    }
    // 5. user login 
    const login = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // 6. forget password 
    const forgetPassword = (email) => {
        setLoding(true);
        return sendPasswordResetEmail(auth, email)
    }

    // 7. singIn with github 
    const githubSingIn = (gitProvider) => {
        setLoding(true);
        return signInWithPopup(auth, gitProvider)
    }



    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)
            setLoding(false);

        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = { user, loding, githubSingIn, createUser, updateName, login, googleSignin, logOut, forgetPassword }
    return (
        <div>
            <AuthContext.Provider value={authInfo} >
                {children}
            </AuthContext.Provider >
        </div>
    )
}

export default Context

