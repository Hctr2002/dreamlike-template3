import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CartPage: React.FC = () => {
    const { items, removeFromCart, totalAmount, clearCart } = useCart();

    if (items.length === 0) {
        return (
            <div className="p-12 text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Su carro de compras está vacío</h2>
                <p className="text-gray-500 mb-8">Agregue productos desde el catálogo para solicitar una cotización.</p>
                <Link to="/catalog" className="inline-block bg-corporate-blue text-white px-6 py-2 rounded font-medium hover:bg-corporate-accent transition-colors">
                    Ir al Catálogo
                </Link>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FileText className="text-corporate-blue" />
                Resumen de Solicitud
            </h1>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold">
                            <th className="p-4">Producto</th>
                            <th className="p-4 w-32 text-right">Precio Unit.</th>
                            <th className="p-4 w-24 text-center">Cant.</th>
                            <th className="p-4 w-32 text-right">Total</th>
                            <th className="p-4 w-16"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td className="p-4">
                                    <div className="flex items-center gap-4">
                                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded border border-gray-200 mix-blend-multiply" />
                                        <div>
                                            <div className="font-medium text-slate-900 text-sm">{item.name}</div>
                                            <div className="text-xs text-gray-500">SKU: {item.sku}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 text-right text-sm">${item.price.toLocaleString('es-CL')}</td>
                                <td className="p-4 text-center text-sm">{item.quantity}</td>
                                <td className="p-4 text-right font-bold text-sm">${(item.price * item.quantity).toLocaleString('es-CL')}</td>
                                <td className="p-4 text-center">
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot className="bg-gray-50 border-t border-gray-200">
                        <tr>
                            <td colSpan={3} className="p-4 text-right font-bold text-slate-700">Total Neto Estimado:</td>
                            <td className="p-4 text-right font-bold text-xl text-corporate-blue">${totalAmount.toLocaleString('es-CL')}</td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div className="flex justify-between items-center">
                <button
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-700 text-sm font-medium hover:underline"
                >
                    Vaciar Carro
                </button>
                <div className="flex gap-4">
                    <Link to="/catalog" className="px-6 py-2 border border-gray-300 rounded text-slate-700 font-medium hover:bg-gray-50 transition-colors">
                        Seguir Comprando
                    </Link>
                    <Link to="/quote" className="px-6 py-2 bg-corporate-blue text-white rounded font-medium hover:bg-corporate-accent transition-colors flex items-center gap-2">
                        Solicitar Cotización Formal <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </div>
    );
};
