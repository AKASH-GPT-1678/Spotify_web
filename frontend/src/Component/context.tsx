"use client";
import React, { createContext, useState, useContext } from 'react';

type ContextType = {
    fulll: boolean;
    checkfull: (value: boolean) => void;
};

const Checkfool = createContext<ContextType | undefined>(undefined);

// Custom hook for using the context
export function useFullContext() {
    const context = useContext(Checkfool);
    if (context === undefined) {
        throw new Error('useFullContext must be used within a FullContextProvider');
    }
    return context;
}

interface ContextProps {
    children: React.ReactNode;
}

export function FullContextProvider({ children }: ContextProps) {
    const [fulll, setFulll] = useState(false);
    
    const checkfull = (value: boolean) => {
        setFulll(value);
    };

    return (
        <Checkfool.Provider value={{ fulll, checkfull }}>
            {children}
        </Checkfool.Provider>
    );
}