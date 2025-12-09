import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, Mail, AlertCircle } from 'lucide-react';

export const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (login(email, password)) {
            navigate('/dashboard');
        } else {
            setError('Credenciales inválidas. Intente nuevamente.');
        }
    };

    const fillDemo = (role: 'admin' | 'client') => {
        if (role === 'admin') {
            setEmail('admin@dreamlike.cl');
            setPassword('admin123');
        } else {
            setEmail('cliente@dreamlike.cl');
            setPassword('cliente123');
        }
    };

    return (
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-slate-900">Iniciar Sesión</h2>
                    <p className="mt-2 text-sm text-slate-600">
                        Acceda a su cuenta corporativa
                    </p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-700 p-3 rounded-lg flex items-center gap-2 text-sm">
                        <AlertCircle size={16} />
                        {error}
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-corporate-blue focus:border-corporate-blue focus:z-10 sm:text-sm"
                                placeholder="Correo Electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-corporate-blue focus:border-corporate-blue focus:z-10 sm:text-sm"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-corporate-blue hover:bg-corporate-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corporate-blue transition-colors"
                        >
                            Ingresar
                        </button>
                    </div>
                </form>

                <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-gray-100">
                    <p className="text-xs text-center text-gray-500 uppercase font-bold tracking-wider">Credenciales Demo</p>
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={() => fillDemo('admin')}
                            className="text-xs bg-gray-100 hover:bg-gray-200 text-slate-700 py-2 rounded transition-colors"
                        >
                            Admin Demo
                        </button>
                        <button
                            onClick={() => fillDemo('client')}
                            className="text-xs bg-gray-100 hover:bg-gray-200 text-slate-700 py-2 rounded transition-colors"
                        >
                            Cliente Demo
                        </button>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <Link to="/register" className="text-sm text-corporate-blue hover:text-corporate-accent font-medium">
                        ¿No tiene cuenta? Regístrese aquí
                    </Link>
                </div>
            </div>
        </div>
    );
};
