import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

import app from '../../fairbase/fairbase';


const auth = getAuth(app)

export const AuthContext = createContext()

const Context = ({ children }) => {

    const [user, setUser] = useState(null)
    const [lodar, setLodar] = useState(true)


    // 1. createUser
    const createUser = (email, password) => {
        setLodar(true)

        return createUserWithEmailAndPassword(auth, email, password)
    }
    // 2. ubdate name 
    const updateName = (profile) => {

        return updateProfile(auth.currentUser, profile)
    }
    // 3. verify email
    const verifyEmail = () => {
        setLodar(true)
        return sendEmailVerification(auth.currentUser)
    }


    // 4. googleSignin
    const googleSignin = (gProvider) => {
        setLodar(true)

        return signInWithPopup(auth, gProvider)
    }

    // 5. logOut
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


    const authInfo = { user, lodar, createUser, updateName, verifyEmail, login, googleSignin, logOut, forgetPassword }
    return (
        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>
    )
}

export default Context
