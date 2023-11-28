'use client'

import { User } from "@/types/user/userTypes";
import { ReactNode, createContext, useContext, useState } from "react";

export interface AuthContextProps {
    user: User | null,
    isAuthenticated: boolean,
    login: (user: User) => void,
    logout: () => void
}

/* export type UserProps = {
    name: string,
    email: string,
} */


const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children}: {children: ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);

    const login = async (user: User) => {
        console.log("usuário logado" + user)
    }

    const logout = () => {
        setUser(null)
        console.log("logout feito com sucesso" + user)
    }


    const isAuthenticated = !!user;

    const contextValue: AuthContextProps = {
        user,
        isAuthenticated,
        login,
        logout,
    }

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

const UseAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider")
    }

    return context;
};

export { AuthProvider, UseAuth, AuthContext}