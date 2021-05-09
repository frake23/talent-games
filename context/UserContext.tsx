import {createContext, useCallback, useContext, useState} from 'react';
import * as React from "react";

interface UserContextValue {
    name: string,
    setName: (arg0: string) => void
}

const UserContext = createContext<UserContextValue>(null);

const useUserContext = () => useContext<UserContextValue>(UserContext);

// @ts-ignore
const UserContextProvider = ({ children }) => {
    const [name, setName] = useState<string>('null');
    const onNameChange = useCallback((name: string) => {
        setName(name);
    }, []);
    return (
        <UserContext.Provider value={{name, setName: onNameChange}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContextProvider, useUserContext}
