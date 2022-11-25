import React, { createContext } from 'react'
import BASE_URL from '../config';

export const AuthContext = createContext();

const register = async (name, email, password) => {
    try {
        const user = await axios.post(`${BASE_URL}/user`, { name, email, password })
        if (user) {
            let userInfo = res.data;
            console.log(userInfo);
        }
    } catch (error) {
        console.log(error)
    }
};

export const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={register} >
            {children}
        </AuthContext.Provider>
    )
};