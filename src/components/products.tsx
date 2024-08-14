import React, { useState, useEffect } from 'react';
import celulares from '../data/celulares.json';
import motos from '../data/motocicletas.json';
import { Form, Col, Row, Select, Input } from 'antd';
import Filters from './filters.tsx';
import ProductGrid from './productGrid.tsx';
import { SearchOutlined } from '@ant-design/icons';

const { Option } = Select;

interface Celular {
    id: string;
    nombre: string;
    marca: string;
    precio: number;
    reviews: number;
    favorito: boolean;
    informacion: {
        fabricante: string;
        peso: string;
        dimensiones: string;
        pais_de_origen: string;
        numero_de_modelo: string;
        color: string;
        material: string;
        cantidad_de_piezas: number;
        caracteristicas_especiales: string;
        componentes_incluidos: string;
    };
}

interface Moto {
    id: string;
    nombre: string;
    marca: string;
    precio: number;
    reviews: number;
    favorito: boolean;
    informacion: {
        motor: string;
        potencia: string;
        peso: string;
        transmision: string;
    };
}

interface Product {
    id: string;
    nombre: string;
    marca: string;
    precio: number;
    reviews: number;
    imagen: string;
}

interface Brand {
    id: number;
    name: string;
}

const normalizeProduct = (product: Celular | Moto): Product => ({ ...product, });

const getBrandsFromMotos = (): Brand[] => {
    const products: Moto[] = motos as Moto[];
    const brands = products.map(product => product.marca);
    return Array.from(new Set(brands));
};

const getBrandsFromCelulares = (): Brand[] => {
    const products: Celular[] = celulares as Celular[];
    const brands = products.map(product => product.marca);
    return Array.from(new Set(brands));
};

const getAllBrands = (): Brand[] => {
    const brandsFromJSON1 = getBrandsFromMotos();
    const brandsFromJSON2 = getBrandsFromCelulares();
    return [...brandsFromJSON1, ...brandsFromJSON2];
};


const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

const Products: React.FC = () => {
    const allBrands = getAllBrands();    
    const allProducts: Product[] = [
        ...celulares.map(normalizeProduct),
        ...motos.map(normalizeProduct)
    ];
    const [filteredProducts, setFilteredProducts] = useState(allProducts);
    return (
        <>
            <Row style={{ alignItems: 'center' }}>
                <Col span={2} offset={2}>
                    Ordenar por:
                </Col>
                <Col span={4}>
                    <Select defaultValue="review" style={{ width: '175px' }}>
                        <Option value="review">Mejores reviews</Option>
                        <Option value="asc">Precio ascendente</Option>
                        <Option value="desc">Precio descendente</Option>
                    </Select>
                </Col>
                <Col span={10}>
                    <Form style={{ alignItems:'center'}}>
                        <Row>
                            <Col span={12}>
                                <Form.Item>
                                    <Input style={{borderBottomLeftRadius: '20px', borderTopLeftRadius:'20px'}} prefix={<SearchOutlined />} placeholder="Encuentra el producto que necesitas." />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item>
                                    <Select defaultValue="all-categories">
                                        <Option value="all-categories">Todas las categorías</Option>
                                        <Option value="celulares">Celulares</Option>
                                        <Option value="motocicletas">Motos</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col span={6} offset={2}>
                    <Filters brands={allBrands} />
                </Col>
                <Col span={16} offset={0}>
                    <ProductGrid products={filteredProducts} />
                </Col>
            </Row>
        </>

    );
};

export default Products;