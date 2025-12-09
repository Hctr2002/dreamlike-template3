import React from 'react';
import { Search, ShoppingCart, FileText, User, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
    const { totalItems } = useCart();
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 h-16">
            <div className="max-w-[1600px] mx-auto px-6 h-full flex items-center justify-between gap-8">
                {/* Logo */}
                <div className="flex items-center gap-2 w-64 flex-shrink-0">
                    <button className="md:hidden p-1 hover:bg-gray-100 rounded">
                        <div className="space-y-1">
                            <span className="block w-5 h-0.5 bg-slate-900"></span>
                            <span className="block w-5 h-0.5 bg-slate-900"></span>
                            <span className="block w-5 h-0.5 bg-slate-900"></span>
                        </div>
                    </button>
                    <Link to="/" className="text-2xl font-extrabold text-slate-900 tracking-tight">
                        DREAMLIKE
                    </Link>
                </div>

                {/* Search Bar */}
                <div className="flex-1 max-w-2xl relative hidden md:block">
                    <input
                        type="text"
                        placeholder="Buscar por SKU, marca o nombre..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue transition-all"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 w-auto flex-shrink-0">
                    <Link to="/catalog" className="hidden md:block text-slate-600 hover:text-corporate-blue text-sm font-medium">Catálogo</Link>
                    <Link to="/quote" className="hidden md:flex items-center gap-2 text-corporate-blue font-medium hover:bg-gray-50 px-3 py-2 rounded transition-colors text-sm">
                        <FileText size={18} />
                        <span>Cotización Rápida</span>
                    </Link>

                    <div className="h-6 w-px bg-gray-200 mx-2 hidden md:block"></div>

                    {user ? (
                        <div className="flex items-center gap-3">
                            <Link to="/dashboard" className="flex items-center gap-2 text-slate-700 hover:text-corporate-blue text-sm font-medium">
                                <User size={18} />
                                <span className="hidden sm:inline">{user.name.split(' ')[0]}</span>
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="text-slate-400 hover:text-red-600 transition-colors"
                                title="Cerrar Sesión"
                            >
                                <LogOut size={18} />
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-corporate-blue">
                            Iniciar Sesión
                        </Link>
                    )}

                    <Link to="/cart" className="relative p-2 hover:bg-gray-50 rounded-full transition-colors text-slate-700">
                        <ShoppingCart size={22} />
                        {totalItems > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
};
