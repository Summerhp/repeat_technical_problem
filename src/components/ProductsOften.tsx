import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import ProductGrid from './productgrid.tsx';
import celulares from '../data/celulares.json';
import motos from '../data/motocicletas.json';

const ProductsOften: React.FC = () => {
    const [oftenProducts, setOftenProducts] = useState<any[]>([]);
    useEffect(() => {
        const allProducts = [...celulares, ...motos];
        const selectedProducts = allProducts.sort(() => 0.5 - Math.random()).slice(0, 4);
        setOftenProducts(selectedProducts);
    }, []);

    return (
        <>
            <Row justify="center">
                <h1>Nuestros Productos Más Vendidos</h1>
            </Row>
            <Row justify="center">
                <Col>
                    <ProductGrid products={oftenProducts} />
                </Col>
            </Row>
        </>
    );
};

export default ProductsOften;
