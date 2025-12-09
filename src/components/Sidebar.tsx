import React from 'react';
import { ChevronDown, Filter } from 'lucide-react';

interface FilterSectionProps {
    title: string;
    options: string[];
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, options }) => (
    <div className="mb-6">
        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center justify-between cursor-pointer hover:text-corporate-blue">
            {title}
            <ChevronDown size={14} />
        </h3>
        <div className="space-y-2">
            {options.map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-corporate-blue focus:ring-corporate-blue" />
                    <span className="text-sm text-slate-600 group-hover:text-slate-900">{option}</span>
                </label>
            ))}
        </div>
    </div>
);

export const Sidebar: React.FC = () => {
    return (
        <aside className="w-64 bg-white border-r border-gray-200 h-[calc(100vh-64px)] overflow-y-auto sticky top-16 hidden md:block">
            <div className="p-5">
                <div className="flex items-center gap-2 mb-6 text-corporate-blue font-semibold pb-4 border-b border-gray-100">
                    <Filter size={18} />
                    <span>Filtros Activos</span>
                </div>

                <FilterSection
                    title="Categoría"
                    options={['Cables Eléctricos', 'Iluminación Industrial', 'Tableros y Control', 'Herramientas', 'Seguridad']}
                />

                <FilterSection
                    title="Marca"
                    options={['Siemens', 'Schneider Electric', 'Legrand', '3M', 'Philips', 'Bosch']}
                />

                <FilterSection
                    title="Voltaje"
                    options={['12V', '24V', '110V', '220V', '380V', '440V']}
                />

                <FilterSection
                    title="Tipo de Cable"
                    options={['THHN', 'Libre de Halógenos', 'Subterráneo', 'Control', 'Instrumentación']}
                />
            </div>
        </aside>
    );
};
