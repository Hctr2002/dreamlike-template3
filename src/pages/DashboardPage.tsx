import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AdminProductList } from '../components/AdminProductList';
import { Package, TrendingUp, Users, AlertTriangle, Clock, ShoppingBag } from 'lucide-react';

export const DashboardPage: React.FC = () => {
    const { user, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    if (!user) return null;

    return (
        <div className="max-w-[1600px] mx-auto p-6">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900">Hola, {user.name}</h1>
                <p className="text-slate-500">
                    {user.role === 'admin'
                        ? 'Panel de Administración General'
                        : 'Bienvenido a su panel de cliente'}
                </p>
            </div>

            {user.role === 'admin' ? (
                <div className="space-y-8">
                    {/* Admin Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-medium text-slate-500">Ventas Totales</h3>
                                <TrendingUp className="text-green-500" size={20} />
                            </div>
                            <p className="text-2xl font-bold text-slate-900">$12.450.000</p>
                            <span className="text-xs text-green-600 font-medium">+15% vs mes anterior</span>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-medium text-slate-500">Pedidos Activos</h3>
                                <Package className="text-blue-500" size={20} />
                            </div>
                            <p className="text-2xl font-bold text-slate-900">24</p>
                            <span className="text-xs text-slate-500">8 pendientes de despacho</span>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-medium text-slate-500">Clientes Nuevos</h3>
                                <Users className="text-purple-500" size={20} />
                            </div>
                            <p className="text-2xl font-bold text-slate-900">12</p>
                            <span className="text-xs text-green-600 font-medium">+4 esta semana</span>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-medium text-slate-500">Alertas Stock</h3>
                                <AlertTriangle className="text-orange-500" size={20} />
                            </div>
                            <p className="text-2xl font-bold text-slate-900">5</p>
                            <span className="text-xs text-orange-600 font-medium">Productos bajo mínimo</span>
                        </div>
                    </div>

                    {/* Product Management */}
                    <AdminProductList />
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Client Dashboard */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-6">Pedidos Recientes</h3>
                            <div className="space-y-4">
                                {[1, 2, 3].map((order) => (
                                    <div key={order} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-blue-50 p-3 rounded-lg text-corporate-blue">
                                                <ShoppingBag size={20} />
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-900">Pedido #ORD-2024-{100 + order}</p>
                                                <p className="text-sm text-slate-500">Hace {order * 2} días • 3 artículos</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-slate-900">$145.990</p>
                                            <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                                                Entregado
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Mi Perfil</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">
                                        {user.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-medium text-slate-900">{user.name}</p>
                                        <p>{user.email}</p>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-gray-100">
                                    <p className="text-xs font-bold text-slate-500 uppercase mb-2">Dirección de Envío</p>
                                    <p className="text-sm text-slate-600">Av. Providencia 1234, Of. 601<br />Providencia, Santiago</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-corporate-blue text-white rounded-xl shadow-sm p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Clock size={20} />
                                <h3 className="font-bold">Cotizaciones Pendientes</h3>
                            </div>
                            <p className="text-sm text-blue-100 mb-4">
                                Tiene 2 cotizaciones esperando aprobación.
                            </p>
                            <button className="w-full bg-white text-corporate-blue py-2 rounded font-medium text-sm hover:bg-blue-50 transition-colors">
                                Ver Cotizaciones
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
