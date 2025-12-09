import React, { createContext, useContext, useState, type ReactNode } from 'react';

export interface Product {
    id: number;
    name: string;
    brand: string;
    sku: string;
    stock: number;
    price: number;
    image: string;
    category: string;
}

interface ProductContextType {
    products: Product[];
    addProduct: (product: Omit<Product, 'id'>) => void;
    updateProduct: (id: number, product: Partial<Product>) => void;
    deleteProduct: (id: number) => void;
}

const initialProducts: Product[] = [
    {
        id: 1,
        name: 'Automático Industrial 3P 40A Curva C',
        brand: 'Schneider Electric',
        sku: 'A9F74340',
        stock: 150,
        price: 45990,
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=200',
        category: 'Tableros y Control'
    },
    {
        id: 2,
        name: 'Contactor de Potencia 18A 220V',
        brand: 'Siemens',
        sku: '3RT2016-1AP01',
        stock: 85,
        price: 32500,
        image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=200',
        category: 'Tableros y Control'
    },
    {
        id: 3,
        name: 'Cable THHN 12 AWG Rojo (Rollo 100m)',
        brand: 'Top Cable',
        sku: 'THHN-12-RED',
        stock: 300,
        price: 42900,
        image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=200',
        category: 'Cables Eléctricos'
    },
    {
        id: 4,
        name: 'Variador de Frecuencia 2HP 380V',
        brand: 'Danfoss',
        sku: '131B0042',
        stock: 12,
        price: 285000,
        image: 'https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?auto=format&fit=crop&q=80&w=200',
        category: 'Automatización'
    },
    {
        id: 5,
        name: 'Luminaria LED High Bay 150W',
        brand: 'Philips',
        sku: 'BY698P',
        stock: 45,
        price: 89900,
        image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=200',
        category: 'Iluminación Industrial'
    }
];

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>(initialProducts);

    const addProduct = (product: Omit<Product, 'id'>) => {
        const newProduct = { ...product, id: Date.now() };
        setProducts([...products, newProduct]);
    };

    const updateProduct = (id: number, updatedProduct: Partial<Product>) => {
        setProducts(products.map(p => p.id === id ? { ...p, ...updatedProduct } : p));
    };

    const deleteProduct = (id: number) => {
        setProducts(products.filter(p => p.id !== id));
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error('useProducts must be used within a ProductProvider');
    }
    return context;
};
