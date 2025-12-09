import React, { useState } from 'react';
import { FileText, ShoppingCart, Check, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface Product {
    id: string;
    name: string;
    brand: string;
    sku: string;
    stock: number;
    price: number;
    image: string;
}

const products: Product[] = [
    {
        id: '1',
        name: 'Interruptor Automático 3P 16A Curva C 6kA',
        brand: 'Schneider Electric',
        sku: 'A9F74316',
        stock: 150,
        price: 12500,
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=100&h=100'
    },
    {
        id: '2',
        name: 'Contactor Tesys D 3P 440V 18A Bobina 220V',
        brand: 'Schneider Electric',
        sku: 'LC1D18M7',
        stock: 42,
        price: 35900,
        image: 'https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?auto=format&fit=crop&q=80&w=100&h=100'
    },
    {
        id: '3',
        name: 'Cable THHN 12 AWG Rojo (Rollo 100m)',
        brand: 'Top Cable',
        sku: 'CBL-THHN-12-R',
        stock: 85,
        price: 45000,
        image: 'https://images.unsplash.com/photo-1544724569-5f546fd6dd2d?auto=format&fit=crop&q=80&w=100&h=100'
    },
    {
        id: '4',
        name: 'Variador de Frecuencia V20 2HP 380V',
        brand: 'Siemens',
        sku: '6SL3210-5BE21-5UV0',
        stock: 8,
        price: 285000,
        image: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&q=80&w=100&h=100'
    },
    {
        id: '5',
        name: 'Fuente de Poder 24VDC 5A Riel DIN',
        brand: 'Mean Well',
        sku: 'MDR-60-24',
        stock: 230,
        price: 28900,
        image: 'https://images.unsplash.com/photo-1555664424-778a6902201b?auto=format&fit=crop&q=80&w=100&h=100'
    },
    {
        id: '6',
        name: 'Relé de Estado Sólido 25A Entrada 3-32VDC',
        brand: 'Fotek',
        sku: 'SSR-25DA',
        stock: 0,
        price: 8500,
        image: 'https://images.unsplash.com/photo-1563770095-39d468f95742?auto=format&fit=crop&q=80&w=100&h=100'
    }
];

export const ProductTable: React.FC = () => {
    const [quantities, setQuantities] = useState<Record<string, number>>({});
    const { addToCart } = useCart();

    const handleQuantityChange = (id: string, value: string) => {
        const qty = parseInt(value) || 0;
        setQuantities(prev => ({ ...prev, [id]: qty }));
    };

    const handleAddToCart = (product: Product) => {
        const qty = quantities[product.id] || 1;
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: qty,
            image: product.image,
            sku: product.sku
        });
        // Optional: Show a toast or feedback
        alert(`Agregado: ${qty} x ${product.name}`);
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mx-6">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold">
                            <th className="p-4 w-16">Img</th>
                            <th className="p-4">Producto / Descripción</th>
                            <th className="p-4 w-32">Marca</th>
                            <th className="p-4 w-32">Stock</th>
                            <th className="p-4 w-32 text-right">Precio Unit.</th>
                            <th className="p-4 w-24 text-center">Cant.</th>
                            <th className="p-4 w-32">Acción</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {products.map((product) => (
                            <tr key={product.id} className="hover:bg-blue-50/30 transition-colors group">
                                <td className="p-3">
                                    <div className="w-10 h-10 rounded bg-gray-100 border border-gray-200 overflow-hidden">
                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply" />
                                    </div>
                                </td>
                                <td className="p-3">
                                    <Link to={`/product/${product.id}`} className="font-medium text-slate-900 text-sm hover:text-corporate-blue hover:underline">
                                        {product.name}
                                    </Link>
                                    <div className="text-xs text-gray-500 mt-0.5 flex items-center gap-2">
                                        <span>SKU: {product.sku}</span>
                                        <button className="text-corporate-blue hover:underline flex items-center gap-1 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                                            <FileText size={10} /> Specs
                                        </button>
                                    </div>
                                </td>
                                <td className="p-3">
                                    <span className="text-sm text-slate-700 font-medium bg-gray-100 px-2 py-1 rounded text-xs">{product.brand}</span>
                                </td>
                                <td className="p-3">
                                    <div className={`flex items-center gap-1.5 text-xs font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
                                        {product.stock > 0 ? <Check size={14} /> : <AlertCircle size={14} />}
                                        {product.stock > 0 ? `${product.stock} Unid.` : 'Agotado'}
                                    </div>
                                </td>
                                <td className="p-3 text-right">
                                    <div className="font-bold text-slate-900 text-sm">${product.price.toLocaleString('es-CL')}</div>
                                    <div className="text-[10px] text-gray-400">Neto</div>
                                </td>
                                <td className="p-3 text-center">
                                    <input
                                        type="number"
                                        min="1"
                                        placeholder="1"
                                        className="w-16 border border-gray-300 rounded px-2 py-1 text-center text-sm focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue outline-none"
                                        value={quantities[product.id] || ''}
                                        onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                                        disabled={product.stock === 0}
                                    />
                                </td>
                                <td className="p-3">
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        disabled={product.stock === 0}
                                        className={`w-full flex items-center justify-center gap-2 px-3 py-1.5 rounded text-xs font-semibold transition-colors ${product.stock > 0
                                                ? 'bg-corporate-blue text-white hover:bg-corporate-accent'
                                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                            }`}
                                    >
                                        <ShoppingCart size={14} />
                                        Agregar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-gray-50 p-3 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500">
                <span>Mostrando 6 de 1245 resultados</span>
                <div className="flex gap-1">
                    <button className="px-2 py-1 border border-gray-300 rounded bg-white hover:bg-gray-50">Anterior</button>
                    <button className="px-2 py-1 border border-gray-300 rounded bg-white hover:bg-gray-50">Siguiente</button>
                </div>
            </div>
        </div>
    );
};
