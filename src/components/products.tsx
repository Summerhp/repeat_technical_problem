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
    informacion: JSON;
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

const getAllProducts = (): Product[] => {
    return [...celulares.map(normalizeProduct), ...motos.map(normalizeProduct)
    ]
}


const Products: React.FC = () => {
    const allProducts = [
        ...celulares.map((product) => ({ ...product, id: `C${product.id}` })),
        ...motos.map((product) => ({ ...product, id: `M${product.id}` })),
    ];

    const [filteredProducts, setFilteredProducts] = useState(allProducts);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all-categories');
    const [sortOrder, setSortOrder] = useState('review');
    const [allBrands, setAllBrands] = useState(getAllBrands());
    const [selectedFilters, setSelectedFilters] = useState({
        brands: [],
        reviews: 0,
        priceRange: { min: 0, max: Infinity }
    });

    useEffect(() => {
        let filtered = allProducts.filter((product) => {
            const fullName = `${product.marca.toLowerCase()} ${product.nombre.toLowerCase()}`;
            const matchesSearchTerm = fullName.includes(searchTerm.toLowerCase());

            const matchesCategory =
                selectedCategory === 'all-categories' ||
                (selectedCategory === 'celulares' && product.id.startsWith('C')) ||
                (selectedCategory === 'motocicletas' && product.id.startsWith('M'));

            const matchesBrands = selectedFilters.brands.length === 0 || selectedFilters.brands.includes(product.marca);
            const matchesReviews = product.reviews >= selectedFilters.reviews;

            const matchesPrice =
                product.precio >= selectedFilters.priceRange.min &&
                product.precio <= selectedFilters.priceRange.max;

            return matchesSearchTerm && matchesCategory && matchesBrands && matchesReviews && matchesPrice;
        });

        // Lógica de ordenamiento
        if (sortOrder === 'asc') {
            filtered = filtered.sort((a, b) => a.precio - b.precio);
        } else if (sortOrder === 'desc') {
            filtered = filtered.sort((a, b) => b.precio - a.precio);
        } else if (sortOrder === 'review') {
            filtered = filtered.sort((a, b) => b.reviews - a.reviews);
        }

        setFilteredProducts(filtered);
    }, [searchTerm, selectedCategory, sortOrder, selectedFilters, allProducts]);

    useEffect(() => {
        // Actualizar marcas en función de la categoría seleccionada
        if (selectedCategory === 'celulares') {
            setAllBrands(getBrandsFromCelulares());
        } else if (selectedCategory === 'motocicletas') {
            setAllBrands(getBrandsFromMotos());
        } else {
            setAllBrands(getAllBrands());
        }
    }, [selectedCategory]);

    const handleFiltersChange = (filters) => {
        setSelectedFilters(filters);
    };
    return (
        <>
            <Row align={'middle'}>
                <Col span={2} offset={2}>
                    Ordenar por:
                </Col>
                <Col span={4}>
                    <Select onChange={(value) => setSortOrder(value)} defaultValue="review" style={{ width: '175px' }}>
                        <Option value="review">Mejores reviews</Option>
                        <Option value="asc">Precio ascendente</Option>
                        <Option value="desc">Precio descendente</Option>
                    </Select>
                </Col>
                <Col span={10}>
                    <Form>
                        <Row>
                            <Col span={12}>
                                <Form.Item>
                                    <Input onChange={(e) => setSearchTerm(e.target.value)} style={{ borderBottomLeftRadius: '20px', borderTopLeftRadius: '20px' }} prefix={<SearchOutlined />} placeholder="Encuentra el producto que necesitas." />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item>
                                    <Select onChange={(value) => setSelectedCategory(value)} defaultValue="all-categories">
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
                    <Filters brands={allBrands} onFiltersChange={handleFiltersChange} />
                </Col>
                <Col span={16} offset={0} style={{ maxHeight: '700px', overflowY: 'auto' }}>
                    <ProductGrid products={filteredProducts} />
                </Col>
            </Row>
        </>

    );
};

export default Products;