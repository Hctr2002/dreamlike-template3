import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <div className="bg-corporate-blue text-white py-8 px-8 rounded-lg mb-6 flex items-center justify-between shadow-md mx-6 mt-6">
            <div>
                <h1 className="text-2xl font-bold mb-2 tracking-tight">Catálogo Técnico Industrial</h1>
                <p className="text-slate-300 text-sm max-w-xl">
                    Acceda a más de 50,000 productos de automatización, control y distribución eléctrica.
                    Precios especiales para integradores y empresas.
                </p>
            </div>
            <button className="bg-white text-corporate-blue px-5 py-2 rounded font-semibold text-sm hover:bg-slate-100 transition-colors flex items-center gap-2">
                Ver Novedades <ArrowRight size={16} />
            </button>
        </div>
    );
};
