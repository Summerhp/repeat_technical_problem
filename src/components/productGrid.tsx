import React from 'react';
import ProductCard from './productCard.tsx';
import { Col, Row } from 'antd';

interface Product {
    id: string;
    nombre: string;
    marca: string;
    precio: number;
    reviews: number;
    imagen: string;
}

interface ProductGridProps {
    products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
    return (
        <Row>
            {products.map((product) => (
                <ProductCard id={product.id} nombre={product.nombre} marca={product.marca} precio={product.precio} reviews={product.reviews} imagen={product.imagen} />
            ))}
        </Row>

    );
};

export default ProductGrid;
