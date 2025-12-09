import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, AlertTriangle, ShieldCheck, BarChart3, Package, FileText, ArrowRight, Lock, TrendingDown } from 'lucide-react';

const PresentationPage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 'pain',
            content: (
                <div className="h-full flex flex-col justify-center px-12 md:px-24 bg-slate-50 text-slate-900">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="p-3 bg-red-100 rounded-lg border border-red-200">
                                <AlertTriangle className="text-red-600" size={32} />
                            </div>
                            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">EL COSTO DEL SILENCIO</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <h3 className="text-6xl font-bold text-slate-900 leading-tight">
                                    ¿Cuánto vale tu <span className="text-red-600">Stock</span> hoy?
                                </h3>
                                <p className="text-2xl text-slate-600 font-light">
                                    La incertidumbre operativa no es un riesgo. Es una pérdida garantizada.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <span className="text-red-600 font-bold text-xl">01</span>
                                        <p className="text-slate-700 font-medium">Fugas de inventario invisibles.</p>
                                    </div>
                                    <div className="flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <span className="text-red-600 font-bold text-xl">02</span>
                                        <p className="text-slate-700 font-medium">Dependencia crítica de procesos manuales.</p>
                                    </div>
                                    <div className="flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <span className="text-red-600 font-bold text-xl">03</span>
                                        <p className="text-slate-700 font-medium">Ceguera financiera en tiempo real.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-red-500/5 blur-[100px] rounded-full"></div>
                                <div className="relative bg-white border border-slate-200 p-8 rounded-2xl shadow-xl">
                                    <div className="flex justify-between items-end mb-8">
                                        <div className="space-y-1">
                                            <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Pérdida Estimada Mensual</p>
                                            <p className="text-5xl font-bold text-slate-900 tracking-tighter">$2.5M+</p>
                                        </div>
                                        <div className="text-red-600 flex items-center gap-1 text-sm font-bold bg-red-50 px-3 py-1 rounded-full border border-red-100">
                                            <TrendingDown size={16} /> -15% Margen
                                        </div>
                                    </div>
                                    <div className="h-48 flex items-end gap-2">
                                        {[40, 65, 45, 70, 50, 30, 45, 20].map((h, i) => (
                                            <div key={i} className="flex-1 bg-slate-100 rounded-t-sm relative overflow-hidden group">
                                                <div
                                                    className="absolute bottom-0 left-0 w-full bg-red-500/80 transition-all duration-500 group-hover:bg-red-600"
                                                    style={{ height: `${h}%` }}
                                                ></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'dashboard',
            content: (
                <div className="h-full flex flex-col justify-center px-8 md:px-16 bg-slate-50 text-slate-900">
                    <div className="max-w-7xl mx-auto w-full h-[85vh] flex flex-col">
                        <div className="flex justify-between items-end mb-8 shrink-0">
                            <div>
                                <div className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-bold tracking-wide mb-3">
                                    MVP VISTA 1 // CERO ERROR
                                </div>
                                <h2 className="text-4xl font-bold text-slate-900 tracking-tight">DASHBOARD_CENTRAL.HTML</h2>
                                <p className="text-slate-500 mt-2 text-lg">Control total en una sola pantalla. La verdad operativa.</p>
                            </div>
                        </div>

                        {/* Mockup Container */}
                        <div className="flex-1 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xl relative flex flex-col">
                            {/* Mock Header */}
                            <div className="h-14 bg-slate-900 border-b border-slate-800 flex items-center px-6 justify-between shrink-0">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="text-xs text-slate-400 font-mono">DREAMLIKE_OS v1.0</div>
                            </div>

                            {/* Mock Content */}
                            <div className="p-8 grid grid-cols-3 gap-8 h-full bg-slate-50/50">
                                {/* Stat Cards */}
                                <div className="col-span-3 grid grid-cols-4 gap-6 h-32">
                                    {[
                                        { label: 'Ventas Hoy', val: '$1.2M', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-100' },
                                        { label: 'Pedidos Activos', val: '24', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
                                        { label: 'Stock Crítico', val: '3 Items', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-100' },
                                        { label: 'Clientes Nuevos', val: '+12', color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100' }
                                    ].map((stat, i) => (
                                        <div key={i} className={`bg-white border ${stat.border} rounded-xl p-6 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow`}>
                                            <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">{stat.label}</p>
                                            <p className={`text-3xl font-bold ${stat.color} mt-2`}>{stat.val}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Main Chart Area */}
                                <div className="col-span-2 bg-white border border-slate-200 rounded-xl p-6 relative shadow-sm">
                                    <div className="absolute inset-0 flex items-center justify-center opacity-5">
                                        <BarChart3 size={120} className="text-slate-900" />
                                    </div>
                                    <div className="h-full flex items-end justify-between px-4 pb-4 gap-4">
                                        {[30, 45, 35, 60, 50, 75, 65, 80, 70, 55, 40, 50].map((h, i) => (
                                            <div key={i} className="w-full bg-blue-50 rounded-t-sm relative group h-full flex items-end">
                                                <div className="w-full bg-blue-600 rounded-t-sm transition-all duration-500 group-hover:bg-blue-700" style={{ height: `${h}%` }}></div>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-slate-900 text-sm font-bold absolute top-6 left-6">RENDIMIENTO EN TIEMPO REAL</p>
                                </div>

                                {/* Activity Feed */}
                                <div className="col-span-1 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                                    <p className="text-slate-900 text-sm font-bold mb-6">ACTIVIDAD RECIENTE</p>
                                    <div className="space-y-4">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <div key={i} className="flex items-start gap-3 text-sm text-slate-600 p-3 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100">
                                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 shrink-0"></div>
                                                <div>
                                                    <p className="font-medium text-slate-900">Nueva orden #202{i}</p>
                                                    <p className="text-xs text-slate-400">Hace {i * 5} minutos</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'inventory',
            content: (
                <div className="h-full flex flex-col justify-center px-8 md:px-16 bg-slate-50 text-slate-900">
                    <div className="max-w-7xl mx-auto w-full h-[85vh] flex flex-col">
                        <div className="flex justify-between items-end mb-8 shrink-0">
                            <div>
                                <div className="inline-block px-3 py-1 bg-green-50 border border-green-100 rounded-full text-green-700 text-xs font-bold tracking-wide mb-3">
                                    MVP VISTA 2 // AUTONOMÍA
                                </div>
                                <h2 className="text-4xl font-bold text-slate-900 tracking-tight">GESTION_DE_INVENTARIO.HTML</h2>
                                <p className="text-slate-500 mt-2 text-lg">Blindaje de stock. Nunca más una venta perdida.</p>
                            </div>
                        </div>

                        {/* Mockup Container */}
                        <div className="flex-1 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xl relative flex flex-col">
                            {/* Mock Header */}
                            <div className="h-14 bg-white border-b border-slate-200 flex items-center px-6 justify-between shrink-0">
                                <div className="flex gap-8 text-sm font-medium text-slate-500">
                                    <span className="text-corporate-blue border-b-2 border-corporate-blue pb-4 translate-y-4">Inventario</span>
                                    <span className="hover:text-slate-800 cursor-pointer transition-colors">Movimientos</span>
                                    <span className="hover:text-slate-800 cursor-pointer transition-colors">Proveedores</span>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                                </div>
                            </div>

                            {/* Mock Table */}
                            <div className="p-8 bg-slate-50/50 h-full">
                                <div className="w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                    <div className="grid grid-cols-5 bg-slate-50 p-4 text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                                        <div className="col-span-2">Producto</div>
                                        <div>SKU</div>
                                        <div>Stock</div>
                                        <div className="text-right">Estado</div>
                                    </div>
                                    {[
                                        { name: 'Taladro Percutor 18V', sku: 'MAK-18V-001', stock: 15, status: 'Optimal', color: 'text-green-600', bg: 'bg-green-50' },
                                        { name: 'Sierra Circular Pro', sku: 'BOS-CIR-002', stock: 4, status: 'Low Stock', color: 'text-amber-600', bg: 'bg-amber-50' },
                                        { name: 'Set Brocas Titanio', sku: 'MIL-SET-003', stock: 42, status: 'Optimal', color: 'text-green-600', bg: 'bg-green-50' },
                                        { name: 'Lijadora Orbital', sku: 'DEW-LIJ-004', stock: 0, status: 'Critical', color: 'text-red-600', bg: 'bg-red-50' },
                                        { name: 'Esmeril Angular', sku: 'MAK-ESM-005', stock: 8, status: 'Warning', color: 'text-amber-600', bg: 'bg-amber-50' },
                                        { name: 'Kit Destornilladores', sku: 'STA-KIT-006', stock: 25, status: 'Optimal', color: 'text-green-600', bg: 'bg-green-50' },
                                    ].map((item, i) => (
                                        <div key={i} className="grid grid-cols-5 p-5 border-b border-slate-100 items-center hover:bg-slate-50 transition-colors group last:border-0">
                                            <div className="col-span-2 flex items-center gap-4">
                                                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all border border-slate-200">
                                                    <Package size={18} className="text-slate-500 group-hover:text-corporate-blue" />
                                                </div>
                                                <span className="text-slate-900 font-semibold">{item.name}</span>
                                            </div>
                                            <div className="text-slate-500 text-sm font-mono">{item.sku}</div>
                                            <div className="text-slate-900 font-bold">{item.stock}</div>
                                            <div className="text-right">
                                                <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.color} ${item.bg}`}>
                                                    {item.status}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'finance',
            content: (
                <div className="h-full flex flex-col justify-center px-8 md:px-16 bg-slate-50 text-slate-900">
                    <div className="max-w-7xl mx-auto w-full h-[85vh] flex flex-col">
                        <div className="flex justify-between items-end mb-8 shrink-0">
                            <div>
                                <div className="inline-block px-3 py-1 bg-amber-50 border border-amber-100 rounded-full text-amber-700 text-xs font-bold tracking-wide mb-3">
                                    MVP VISTA 3 // PREPARACIÓN
                                </div>
                                <h2 className="text-4xl font-bold text-slate-900 tracking-tight">MODULO_DE_FINANZAS.HTML</h2>
                                <p className="text-slate-500 mt-2 text-lg">Facturación simplificada. Listo para escalar.</p>
                            </div>
                        </div>

                        {/* Mockup Container */}
                        <div className="flex-1 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xl relative flex">
                            {/* Sidebar */}
                            <div className="w-64 bg-slate-50 border-r border-slate-200 p-6 hidden md:block">
                                <div className="space-y-2">
                                    <div className="p-3 bg-white border border-slate-200 text-corporate-blue rounded-lg font-semibold flex items-center gap-3 shadow-sm">
                                        <FileText size={18} /> Facturas
                                    </div>
                                    <div className="p-3 text-slate-500 hover:bg-white hover:shadow-sm rounded-lg transition-all flex items-center gap-3 cursor-pointer">
                                        <BarChart3 size={18} /> Reportes
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-12 flex flex-col items-center justify-center bg-slate-50/30">
                                <div className="bg-white text-slate-900 w-full max-w-lg rounded-xl shadow-2xl border border-slate-100 p-10 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                    <div className="flex justify-between items-center mb-10">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-corporate-blue rounded-lg flex items-center justify-center text-white">
                                                <FileText size={20} />
                                            </div>
                                            <h3 className="font-bold text-2xl tracking-tight text-slate-900">INVOICE</h3>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Número</p>
                                            <p className="text-sm text-slate-900 font-mono font-bold">#INV-2025-001</p>
                                        </div>
                                    </div>
                                    <div className="space-y-6 mb-10">
                                        <div className="space-y-2">
                                            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Cliente</p>
                                            <div className="h-6 bg-slate-100 rounded w-2/3"></div>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Detalles</p>
                                            <div className="h-4 bg-slate-50 rounded w-full"></div>
                                            <div className="h-4 bg-slate-50 rounded w-3/4"></div>
                                        </div>
                                    </div>
                                    <div className="border-t border-b border-slate-100 py-6 space-y-3 mb-8">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-600">Servicios Digitales</span>
                                            <span className="font-mono font-medium text-slate-900">$100.000</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-600">Implementación</span>
                                            <span className="font-mono font-medium text-slate-900">$50.000</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-lg text-slate-900">TOTAL</span>
                                        <span className="font-bold text-3xl text-corporate-blue font-mono">$150.000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'closing',
            content: (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-12 px-4 bg-slate-50 text-slate-900">
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-100 blur-[80px] rounded-full"></div>
                        <ShieldCheck size={100} className="text-corporate-blue relative z-10" />
                    </div>

                    <div className="space-y-6 relative z-10">
                        <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight">
                            BLINDAJE <span className="text-corporate-blue">INMEDIATO</span>
                        </h2>
                        <p className="text-2xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                            100 UF. Autonomía Operativa. <br />
                            <span className="text-slate-400 text-lg font-medium">El primer paso hacia el Ecosistema Total (1500 UF).</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl relative z-10">
                        <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                            <h4 className="text-slate-900 font-bold mb-2 text-xl">Fase I (AHORA)</h4>
                            <p className="text-slate-500">Control de Stock & Dashboard</p>
                        </div>
                        <div className="flex items-center justify-center text-slate-300">
                            <ArrowRight size={32} />
                        </div>
                        <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm opacity-60 hover:opacity-100 transition-opacity">
                            <h4 className="text-slate-700 font-bold mb-2 text-xl">Fase II (VISIÓN)</h4>
                            <p className="text-slate-400">Ecosistema Total & IA</p>
                        </div>
                    </div>

                    <button className="relative z-10 group bg-corporate-blue text-white px-12 py-5 rounded-full text-xl font-bold transition-all flex items-center gap-4 hover:shadow-xl hover:shadow-blue-900/20 hover:scale-105">
                        <Lock size={20} className="text-blue-200" />
                        ACTIVAR FASE I
                    </button>
                </div>
            )
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="fixed inset-0 bg-slate-50 text-slate-900 font-sans overflow-hidden z-[100]">
            {/* Content Container */}
            <div className="relative z-10 w-full h-full animate-fade-in">
                {slides[currentSlide].content}
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-12 right-12 flex gap-4 z-20">
                <button
                    onClick={prevSlide}
                    className="p-4 rounded-full bg-white hover:bg-slate-100 text-slate-700 shadow-lg border border-slate-200 transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="p-4 rounded-full bg-corporate-blue hover:bg-slate-800 text-white shadow-lg shadow-blue-900/20 transition-colors"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Progress Indicator */}
            <div className="absolute bottom-12 left-12 flex gap-3 z-20">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-16 bg-corporate-blue' : 'w-4 bg-slate-300'
                            }`}
                    />
                ))}
            </div>

            {/* Slide Counter */}
            <div className="absolute top-12 right-12 font-mono text-slate-400 text-sm font-bold">
                {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </div>
        </div>
    );
};

export default PresentationPage;
