import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../components/fairbase/fairbase';




export const AuthContext = createContext();
const auth = getAuth(app)




const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loding, setLoding] = useState(true);
    const createUser = (email, password) => {
        setLoding(true);

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        setLoding(true);

        return signOut(auth)
    }
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, createUser => {
            console.log('heda', createUser);
            setUser(createUser);
            setLoding(false);
        });
        return () => unSubcribe();
    }, [])


    const AuthInfo = { loding, user, createUser, signIn, logout }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider >
    )
}

export default UserContext
