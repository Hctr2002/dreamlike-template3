import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, CreditCard } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
            <div className="max-w-[1600px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Company Info */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-6 tracking-tight">DREAMLIKE</h3>
                        <p className="text-sm leading-relaxed mb-6 text-slate-400">
                            Líderes en distribución de materiales eléctricos y automatización industrial.
                            Comprometidos con la calidad y el servicio técnico especializado para sus proyectos.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm">
                                <MapPin size={18} className="text-corporate-blue-light" />
                                <span>Av. Industrial 1234, Santiago, Chile</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Phone size={18} className="text-corporate-blue-light" />
                                <span>+56 2 2345 6789</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Mail size={18} className="text-corporate-blue-light" />
                                <span>ventas@dreamlike.cl</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Navegación</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
                            <li><Link to="/catalog" className="hover:text-white transition-colors">Catálogo de Productos</Link></li>
                            <li><Link to="/quote" className="hover:text-white transition-colors">Cotización Rápida</Link></li>
                            <li><Link to="/cart" className="hover:text-white transition-colors">Mi Carro</Link></li>
                            <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Customer Service */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Servicio al Cliente</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Centro de Ayuda</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Política de Envíos</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Cambios y Devoluciones</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Garantía de Productos</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Suscríbase al Boletín</h4>
                        <p className="text-sm text-slate-400 mb-4">
                            Reciba ofertas exclusivas y novedades técnicas directamente en su correo.
                        </p>
                        <form className="flex gap-2 mb-6">
                            <input
                                type="email"
                                placeholder="Su email corporativo"
                                className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded w-full text-sm focus:outline-none focus:border-slate-500"
                            />
                            <button className="bg-white text-slate-900 px-4 py-2 rounded font-bold text-sm hover:bg-slate-200 transition-colors">
                                OK
                            </button>
                        </form>
                        <div className="flex gap-4">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500">
                        © 2025 Dreamlike Electrical Solutions. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center gap-4 text-slate-500">
                        <CreditCard size={24} />
                        <span className="text-xs">WebPay Plus / Transferencia / Orden de Compra</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
