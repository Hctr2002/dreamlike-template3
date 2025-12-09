import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Role = 'admin' | 'client';

export interface User {
    email: string;
    name: string;
    role: Role;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => boolean;
    logout: () => void;
    register: (name: string, email: string, password: string) => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('dreamlike_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (email: string, password: string): boolean => {
        // Demo credentials
        if (email === 'admin@dreamlike.cl' && password === 'admin123') {
            const adminUser: User = { email, name: 'Administrador', role: 'admin' };
            setUser(adminUser);
            localStorage.setItem('dreamlike_user', JSON.stringify(adminUser));
            return true;
        }

        if (email === 'cliente@dreamlike.cl' && password === 'cliente123') {
            const clientUser: User = { email, name: 'Cliente Demo', role: 'client' };
            setUser(clientUser);
            localStorage.setItem('dreamlike_user', JSON.stringify(clientUser));
            return true;
        }

        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('dreamlike_user');
    };

    const register = (name: string, email: string, _password: string) => {
        // Simulate registration - always creates a client
        const newUser: User = { email, name, role: 'client' };
        setUser(newUser);
        localStorage.setItem('dreamlike_user', JSON.stringify(newUser));
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
