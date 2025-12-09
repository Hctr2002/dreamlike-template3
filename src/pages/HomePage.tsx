import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Truck } from 'lucide-react';

export const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-[calc(100vh-64px)]">
            {/* Hero Section */}
            <section className="bg-corporate-blue text-white py-20 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Soluciones Eléctricas para la Industria
                    </h1>
                    <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                        Distribuidor líder en materiales eléctricos, automatización y control.
                        Más de 50,000 productos con stock garantizado para sus proyectos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/catalog"
                            className="bg-white text-corporate-blue px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
                        >
                            Ver Catálogo Completo <ArrowRight size={20} />
                        </Link>
                        <button className="border border-slate-500 text-slate-300 px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors">
                            Contactar Ventas
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-6 bg-white flex-1">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-50 text-corporate-blue rounded-lg flex items-center justify-center mb-4">
                            <Shield size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Calidad Certificada</h3>
                        <p className="text-slate-600">
                            Todos nuestros productos cuentan con certificaciones SEC y estándares internacionales (IEC, UL).
                        </p>
                    </div>
                    <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-50 text-corporate-blue rounded-lg flex items-center justify-center mb-4">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Stock Permanente</h3>
                        <p className="text-slate-600">
                            Mantenemos inventario crítico de las principales marcas: Schneider, Siemens, Legrand.
                        </p>
                    </div>
                    <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-50 text-corporate-blue rounded-lg flex items-center justify-center mb-4">
                            <Truck size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Despacho Express</h3>
                        <p className="text-slate-600">
                            Envíos a todo Chile en 24/48 horas. Despacho gratuito en RM por compras sobre $100.000.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
