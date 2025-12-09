import React from 'react';
import { useCart } from '../context/CartContext';
import { Send } from 'lucide-react';

export const QuotePage: React.FC = () => {
    const { items, totalAmount } = useCart();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Solicitud de cotización enviada con éxito. Un ejecutivo lo contactará a la brevedad.');
    };

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Solicitud de Cotización Formal</h1>
            <p className="text-slate-500 mb-8">Complete sus datos para que un ejecutivo comercial procese su solicitud.</p>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <div className="mb-8 p-4 bg-blue-50 rounded border border-blue-100">
                    <h3 className="font-bold text-corporate-blue mb-2 text-sm uppercase">Resumen de Solicitud</h3>
                    <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-600">Items:</span>
                        <span className="font-medium">{items.length} productos</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Total Neto Estimado:</span>
                        <span className="font-bold text-slate-900">${totalAmount.toLocaleString('es-CL')}</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
                            <input type="text" required className="input-field" placeholder="Juan Pérez" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Email Corporativo</label>
                            <input type="email" required className="input-field" placeholder="juan@empresa.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                            <input type="tel" required className="input-field" placeholder="+56 9 1234 5678" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">RUT Empresa</label>
                            <input type="text" required className="input-field" placeholder="76.123.456-7" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje Adicional (Opcional)</label>
                        <textarea className="input-field h-24 resize-none" placeholder="Necesito despacho a obra..."></textarea>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex justify-end">
                        <button type="submit" className="bg-corporate-blue text-white px-8 py-2.5 rounded font-semibold hover:bg-corporate-accent transition-colors flex items-center gap-2">
                            <Send size={18} /> Enviar Solicitud
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
