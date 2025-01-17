import React, { useState, useEffect, createContext, Children} from 'react';
import { storageController } from '../services/token';
import { userService } from '../services/users';
import { tokenExpired } from '../utils/tokenExpired';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const { children } = props

    //Crear el estado del usuario
    const [user, setUser] = useState(null)
    //crear el estado de carga
    const [loading, setLoading] = useState(true)

    

    useEffect(() => {
        getSession();
    }, [])
    const getSession = async () => {
        const token = storageController.getToken();
        if(!token){
            logout()
        //console.log('Token --> :',token);
        setLoading(false)
        return
        } if(tokenExpired(token)){
            logout()
        } else {
            login(token)
        }
    }
    
    const login = async (token) => {
        try{
            console.log('Obtenido',token);
            await storageController.setToken(token);
            const response = await userService.getMe(token);
            setUser(response)
            setLoading(false)
            console.log(response)
        } catch (error) {
            console.error(error)
            setLoading(false)
        }
    }
    const logout = async () => {
        try {
            await storageController.removeToken()
            setUser(null)
            setLoading(false)
        } catch (error) {
            console.error(error);
            setLoading(false)
        }
    }
    const data = {
        user,
        login,
        logout,
        upDateUser: () => console.log('update user')
    }
    if(loading) return null
    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

