import React from 'react';
import { Hero } from '../components/Hero';
import { ProductTable } from '../components/ProductTable';

export const CatalogPage: React.FC = () => {
    return (
        <div className="pb-12">
            <Hero />

            <div className="px-6 mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-800">Productos Destacados</h2>
                <div className="flex gap-2">
                    <select className="text-sm border border-gray-300 rounded px-2 py-1 bg-white text-slate-600 focus:border-corporate-blue outline-none">
                        <option>Ordenar por: Relevancia</option>
                        <option>Precio: Menor a Mayor</option>
                        <option>Precio: Mayor a Menor</option>
                        <option>Nombre: A-Z</option>
                    </select>
                </div>
            </div>

            <ProductTable />
        </div>
    );
};
