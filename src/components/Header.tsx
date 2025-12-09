import React from 'react';
import { Search, FileText, ShoppingCart, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Header: React.FC = () => {
    const { totalItems } = useCart();

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm h-16 flex items-center px-6">
            <Link to="/" className="flex items-center gap-4 w-64 flex-shrink-0 hover:opacity-90 transition-opacity">
                <div className="bg-corporate-blue text-white p-1.5 rounded">
                    <Menu size={20} />
                </div>
                <span className="font-bold text-xl text-corporate-blue tracking-tight">DREAMLIKE</span>
            </Link>

            <div className="flex-1 max-w-3xl mx-auto">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Buscar por SKU, marca o nombre..."
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-corporate-blue focus:border-transparent text-sm"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
            </div>

            <div className="flex items-center gap-4 w-64 justify-end flex-shrink-0">
                <Link to="/catalog" className="text-slate-600 hover:text-corporate-blue text-sm font-medium">Catálogo</Link>
                <Link to="/quote" className="flex items-center gap-2 text-corporate-blue font-medium hover:bg-gray-50 px-3 py-2 rounded transition-colors text-sm">
                    <FileText size={18} />
                    <span>Cotización Rápida</span>
                </Link>
                <Link to="/cart" className="relative p-2 text-gray-600 hover:text-corporate-blue transition-colors">
                    <ShoppingCart size={22} />
                    {totalItems > 0 && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                            {totalItems}
                        </span>
                    )}
                </Link>
            </div>
        </header>
    );
};
