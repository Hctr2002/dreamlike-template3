import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { CatalogPage } from '../pages/CatalogPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { QuotePage } from '../pages/QuotePage';

export const Layout: React.FC = () => {
    const location = useLocation();
    const showSidebar = location.pathname === '/catalog';

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
            <Header />

            <div className="flex flex-1 w-full max-w-[1600px] mx-auto">
                {showSidebar && <Sidebar />}

                <main className="flex-1 min-w-0 pb-12">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/catalog" element={<CatalogPage />} />
                        <Route path="/product/:id" element={<ProductPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/quote" element={<QuotePage />} />
                    </Routes>
                </main>
            </div>
            <Footer />
        </div>
    );
};
