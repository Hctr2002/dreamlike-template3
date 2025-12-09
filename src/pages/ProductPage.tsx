import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, AlertCircle, ShoppingCart, FileText } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = React.useState(1);

    // Mock data - in a real app this would come from an API based on ID
    const product = {
        id: id || '1',
        name: 'Interruptor Automático 3P 16A Curva C 6kA',
        brand: 'Schneider Electric',
        sku: 'A9F74316',
        stock: 150,
        price: 12500,
        description: 'Interruptor termomagnético iC60N, 3 polos, 16A, curva C, poder de corte 6kA IEC 60947-2. Protección contra sobrecargas y cortocircuitos en distribución final.',
        specs: [
            { label: 'Polos', value: '3P' },
            { label: 'Corriente Nominal', value: '16A' },
            { label: 'Curva de Disparo', value: 'C' },
            { label: 'Poder de Corte', value: '6kA' },
            { label: 'Tensión de Empleo', value: '400V AC' },
        ],
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400&h=400'
    };

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            image: product.image,
            sku: product.sku
        });
        alert('Producto agregado al carro');
    };

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <Link to="/catalog" className="inline-flex items-center gap-2 text-slate-500 hover:text-corporate-blue mb-6 text-sm">
                <ArrowLeft size={16} /> Volver al Catálogo
            </Link>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/3 p-8 bg-gray-50 flex items-center justify-center border-r border-gray-100">
                    <img src={product.image} alt={product.name} className="max-w-full h-auto mix-blend-multiply" />
                </div>

                <div className="md:w-2/3 p-8">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-bold text-corporate-blue bg-blue-50 px-2 py-1 rounded">{product.brand}</span>
                        <span className="text-xs text-gray-500">SKU: {product.sku}</span>
                    </div>

                    <h1 className="text-2xl font-bold text-slate-900 mb-4">{product.name}</h1>

                    <div className="flex items-center gap-2 mb-6">
                        <span className="text-3xl font-bold text-slate-900">${product.price.toLocaleString('es-CL')}</span>
                        <span className="text-sm text-gray-500">Neto</span>
                    </div>

                    <div className="flex items-center gap-4 mb-8">
                        <div className={`flex items-center gap-2 text-sm font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
                            {product.stock > 0 ? <Check size={18} /> : <AlertCircle size={18} />}
                            {product.stock > 0 ? `Stock Disponible: ${product.stock} Unid.` : 'Agotado'}
                        </div>
                    </div>

                    <div className="flex gap-4 mb-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-slate-700">Cantidad:</span>
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                className="w-20 border border-gray-300 rounded px-3 py-1.5 text-center focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue outline-none"
                            />
                        </div>
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-corporate-blue text-white px-6 py-2 rounded font-semibold hover:bg-corporate-accent transition-colors flex items-center justify-center gap-2"
                        >
                            <ShoppingCart size={18} />
                            Agregar al Carro
                        </button>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                        <h3 className="font-bold text-lg mb-4">Especificaciones Técnicas</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {product.specs.map((spec, idx) => (
                                <div key={idx} className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="text-sm text-gray-500">{spec.label}</span>
                                    <span className="text-sm font-medium text-slate-900">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                        <button className="mt-6 text-corporate-blue hover:underline flex items-center gap-2 text-sm font-medium">
                            <FileText size={16} /> Descargar Ficha Técnica (PDF)
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
