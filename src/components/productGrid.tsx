import React from 'react';
import ProductCard from './productCard.tsx';
import { Row } from 'antd';

interface Product {
    id: string;
    nombre: string;
    marca: string;
    precio: number;
    reviews: number;
    imagen: string;
    favorito: boolean;
    informacion: JSON;
}

interface ProductGridProps {
    products: Product[];
    toggleFavorite: (id: string) => void;
}
const ProductGrid: React.FC<ProductGridProps> = ({ products, toggleFavorite }) => {
    return (
        <Row>
            {products.map((product) => (
                <ProductCard key={product.id} id={product.id} nombre={product.nombre} marca={product.marca} precio={product.precio} reviews={product.reviews} imagen={product.imagen} favorito={product.favorito} informacion={product.informacion} toggleFavorite={toggleFavorite}
                />
            ))}
        </Row>

    );
};

export default ProductGrid;
