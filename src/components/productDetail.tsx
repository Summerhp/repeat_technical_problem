import React from 'react';
import { Breadcrumb, Row, Col, Button, Image } from 'antd';
import { useParams } from 'react-router-dom';
import ProductGrid from './productgrid.tsx';
import celulares from '../data/celulares.json';
import motos from '../data/motocicletas.json';
import { StarFilled, StarOutlined } from '@ant-design/icons';

interface Product {
    id: string;
    nombre: string;
    marca: string;
    precio: number;
    reviews: number;
    imagen: string;
    informacion: {
        fabricante?: string;
        peso?: string;
        dimensiones?: string;
        pais_de_origen?: string;
        numero_de_modelo?: string;
        color?: string;
        material?: string;
        cantidad_de_piezas?: number;
        caracteristicas_especiales?: string;
        componentes_incluidos?: string;
        motor?: string;
        potencia?: string;
        transmision?: string;
    };
}

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const normalizeProduct = (product: any): Product => ({ ...product });
    let allProducts: Product[] = [];
    let product: Product | undefined;
    if (id.startsWith('C')) {
        allProducts = celulares.map(normalizeProduct);
        product = allProducts.find((prod) => prod.id === id);
    } else {
        allProducts = motos.map(normalizeProduct);
        product = allProducts.find((prod) => prod.id === id);
    }
    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    const renderStars = (rating: number) => {
        const filledStars = Math.floor(rating);
        const totalStars = 5;
        const starsArray = [];

        for (let i = 0; i < totalStars; i++) {
            if (i < filledStars) {
                starsArray.push(<StarFilled style={{ color: '#FFFF00', fontSize: '30px' }} />);
            } else {
                starsArray.push(<StarOutlined style={{ color: '#FFFF00', fontSize: '30px' }} />);
            }
        }

        return starsArray;
    };
    const relatedProducts = allProducts.filter((prod) => prod.id !== id);

    return (
        <>
            <br></br>
            <Row align={'middle'} justify={'start'}>
                <Col span={3} offset={1}>
                    <Button>
                        Regresar a resultados
                    </Button>
                </Col>
                <Col span={4}>
                    <Breadcrumb>
                        <Breadcrumb.Item>Productos</Breadcrumb.Item>
                        <Breadcrumb.Item>{product.nombre}</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col span={3} offset={1} style={{ flexDirection: 'column', gap: '10px' }}>
                    <Image src={product.imagen} style={{ height: '150px' }} />
                    <Image src={product.imagen} style={{ height: '150px' }} />
                    <Image src={product.imagen} style={{ height: '150px' }} />
                </Col>
                <Col span={6}>
                    <Image src={product.imagen} style={{ height: '450px' }} />
                </Col>
                <Row>
                    <Col span={20} style={{ marginLeft: '50px' }}>
                        <h1>
                            {product.marca} {product.nombre}
                        </h1>
                        {renderStars(product.reviews)}
                    </Col>
                    
                </Row>
            </Row>
        </>
    )
};

export default ProductDetail;