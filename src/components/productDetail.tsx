import React, { useState } from 'react';
import { Breadcrumb, Row, Col, Button, Image, Space, Descriptions, Tabs, Typography, List, Slider } from 'antd';
import { useParams } from 'react-router-dom';
import ProductGrid from './productGrid.tsx';
import celulares from '../data/celulares.json';
import motos from '../data/motocicletas.json';
import { StarFilled, StarOutlined, CreditCardOutlined, ArrowRightOutlined, CheckOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/Vector 3.png';
import './productDetail.css';

const { Title, Text } = Typography;

interface Product {
    id: string;
    nombre: string;
    marca: string;
    precio: number;
    reviews: number;
    imagen: string;
    favorito: boolean;
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
const { TabPane } = Tabs;

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
    const [isHeartFilled, setIsHeartFilled] = useState(product.favorito);
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
    const changeHeart = () => {
        setIsHeartFilled(!isHeartFilled);
    }
    const relatedProducts = allProducts.filter((prod) => prod.id !== id).slice(0, 4);
    return (
        <>
            <br></br>
            <Row align={'middle'} justify={'start'}>
                <Col span={3} offset={1}>
                    <Link className="navbar-brand" to="/">
                        <Button>
                            Regresar a resultados
                        </Button>
                    </Link>

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
                    <Image src={product.imagen} style={{ height: '150px', width: '150px' }} />
                    <Image src={product.imagen} style={{ height: '150px', width: '150px' }} />
                    <Image src={product.imagen} style={{ height: '150px', width: '150px' }} />
                </Col>
                <Col span={6}>
                    <Image src={product.imagen} style={{ height: '450px' }} />
                    <Button type="text" style={{ fontSize: '35px', padding: '0px', height: 'auto', position: 'absolute', top: '10px', right: '10px', zIndex: 1 }} onClick={() => changeHeart()}>{isHeartFilled ? <HeartFilled /> : <HeartOutlined />}</Button>
                </Col>
                <Col span={14}>
                    <Row justify={'space-between'}>
                        <Col style={{ marginLeft: '50px' }}>
                            <h1 style={{ fontSize: '2rem' }}>
                                {product.marca} {product.nombre}
                            </h1>
                            {renderStars(product.reviews)}
                        </Col>
                        <Col pull={1} style={{ textAlign: 'right' }}>
                            <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#004AC1' }}>${product.precio.toFixed(2)}</h1>
                            <Space size={'large'}>
                                <CreditCardOutlined style={{ fontSize: '50px' }} />
                                <CreditCardOutlined style={{ fontSize: '50px' }} />
                                <CreditCardOutlined style={{ fontSize: '50px' }} />
                                <CreditCardOutlined style={{ fontSize: '50px' }} />
                            </Space>
                        </Col>

                    </Row>
                    <br></br>
                    <Row>
                        <Col style={{ marginLeft: '50px', marginRight: '30px' }}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius mi eu eleifend ornare. Donec pretium lobortis massa eu euismod. Suspendisse ex felis, lacinia nec pretium eget, semper et ipsum. Etiam ut libero tempus, euismod sem et, suscipit leo. Vestibulum nec libero massa. Sed placerat porttitor nisi, ut ultricies mi. Vivamus nisi leo, pellentesque nec libero eu, malesuada mattis metus.
                            </p>
                        </Col>
                    </Row>
                    <Row justify={'end'} style={{ marginRight: '30px' }} align={'middle'}>
                        <Row style={{ backgroundColor: '#D3D8E0', border: '2px solid #D3D8E0', borderRadius: '15px' }}>
                            <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-shield" viewBox="0 0 16 16">
                                    <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
                                </svg>
                            </Col>
                            <Col style={{ marginLeft: '10px', marginRight: '30px' }}>
                                <h3>
                                    Compra segura con Macropay Protect
                                </h3>
                                <p>Devolución gratis(30 días)/12 meses de garantía de frábrica.</p>
                            </Col>
                        </Row>
                    </Row>
                    <Row justify={'end'} style={{ marginRight: '30px' }} align={'middle'}>
                        <p>
                            La promoción vence en 24d 12h:43m
                        </p>
                    </Row>
                    <Row align="top" style={{ marginRight: '30px' }}>
                        <Col span={6}>
                            <img src='../Product Detail.png' alt="Product" style={{ width: '100%', height: 'auto' }}
                            />
                        </Col>
                        <Col span={18}>
                            <Row justify="space-between" style={{ background: '#ffffff', borderRadius: '10px', padding: '20px' }}>
                                <Col span={7} style={{ textAlign: 'center', borderRight: '1px solid #e0e0e0' }}>
                                    <div>
                                        <div style={{ fontSize: '24px', color: '#ffffff', background: '#4B566B', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0' }}>1</div>
                                        <p style={{ fontWeight: 'bold', color: '#4B566B', textAlign: 'start', fontSize: '18px' }}>¡Aplica a tu crédito!</p>
                                    </div>
                                </Col>

                                <Col span={7} style={{ textAlign: 'center', borderRight: '1px solid #e0e0e0' }}>
                                    <div>
                                        <div style={{ fontSize: '24px', color: '#ffffff', background: '#4B566B', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0' }}>2</div>
                                        <p style={{ fontWeight: 'bold', color: '#4B566B', textAlign: 'start', fontSize: '18px' }}>Verifica tu compra</p>
                                    </div>
                                </Col>

                                <Col span={7} style={{ textAlign: 'center' }}>
                                    <div>
                                        <div style={{ fontSize: '24px', color: '#ffffff', background: '#4B566B', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0' }}>3</div>
                                        <p style={{ fontWeight: 'bold', color: '#4B566B', textAlign: 'start', fontSize: '18px' }}>Disfruta tu celular</p>
                                    </div>
                                </Col>
                            </Row>
                            <div style={{ textAlign: 'right' }}>
                                <Button type="primary" style={{ padding: '30px', marginBottom: '20px', background: '#ffcc00', color: '#002f87', fontWeight: 'bold' }}>
                                    LO QUIERO A CRÉDITO <ArrowRightOutlined style={{ fontSize: '24px', color: '#ffffff', background: '#004AC1', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0' }} />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Col >
            </Row >
            <Row>
                <Col span={10} offset={1}>
                    <h2>Información detallada del producto</h2>
                </Col>
            </Row>
            <Row>
                <Col span={10} offset={1}>
                    <Row gutter={[16, 16]}>
                        {[1, 2, 3, 4].map((_, index) => (
                            <Col key={index} span={12}>
                                <div style={{ border: '1px solid #f0f0f0', borderRadius: '8px', textAlign: 'center' }}>
                                    <img src={product.imagen} style={{ width: '100%', height: '558px', borderRadius: '8px' }} />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col span={13}>
                    <Row style={{ minHeight: '558px' }}>
                        <Col offset={1}>
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="Otras Especificaciones" key="1">
                                    <Descriptions className='tableStyle' bordered column={1} labelStyle={{ fontWeight: 'bold', width: '200px' }}>
                                        {product.informacion.fabricante && <Descriptions.Item label="Fabricante: ">{product.informacion.fabricante}</Descriptions.Item>}
                                        {product.informacion.peso && <Descriptions.Item label="Peso del producto: ">{product.informacion.peso}</Descriptions.Item>}
                                        {product.informacion.dimensiones && <Descriptions.Item label="Dimensiones: ">{product.informacion.dimensiones}</Descriptions.Item>}
                                        {product.informacion.pais_de_origen && <Descriptions.Item label="País de Origen: ">{product.informacion.pais_de_origen}</Descriptions.Item>}
                                        {product.informacion.numero_de_modelo && <Descriptions.Item label="Número de modelo: ">{product.informacion.numero_de_modelo}</Descriptions.Item>}
                                        {product.informacion.color && <Descriptions.Item label="Color: ">{product.informacion.color}</Descriptions.Item>}
                                        {product.informacion.material && <Descriptions.Item label="Material: ">{product.informacion.material}</Descriptions.Item>}
                                        {product.informacion.cantidad_de_piezas && <Descriptions.Item label="Cantidad de piezas: ">{product.informacion.cantidad_de_piezas}</Descriptions.Item>}
                                        {product.informacion.caracteristicas_especiales && <Descriptions.Item label="Características especiales: ">{product.informacion.caracteristicas_especiales}</Descriptions.Item>}
                                        {product.informacion.componentes_incluidos && <Descriptions.Item label="Componentes incluidos: ">{product.informacion.componentes_incluidos}</Descriptions.Item>}
                                        {product.informacion.motor && <Descriptions.Item label="Motor: ">{product.informacion.motor}</Descriptions.Item>}
                                        {product.informacion.potencia && <Descriptions.Item label="Potencia: ">{product.informacion.potencia}</Descriptions.Item>}
                                        {product.informacion.transmision && <Descriptions.Item label="Transmisión: ">{product.informacion.transmision}</Descriptions.Item>}
                                    </Descriptions>
                                </TabPane>
                                <TabPane tab="Reviews (3)" key="2">
                                </TabPane>
                            </Tabs>
                        </Col>
                    </Row>
                    <Row align={'middle'} style={{ minHeight: '558px', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} >
                        <Col span={8} style={{ borderRadius: '8px', padding: '20px' }}>
                            <Title level={3} style={{ color: '#fff' }}>
                                Lleva este celular a Crédito!
                            </Title>
                            <Text style={{ color: '#FFD300', fontSize: '18px' }}>¿Qué necesitas?</Text>
                            <List
                                style={{ marginTop: '10px', color: '#FFFF00' }}
                                dataSource={[
                                    'Tu cuenta de Facebook',
                                    'Tu INE Vigente',
                                    'Correo electrónico',
                                ]}
                                renderItem={(item) => (
                                    <List.Item style={{ color: '#FFFFFF', fontSize: '16px' }}>
                                        <CheckOutlined style={{ marginRight: '8px', color: '#A2D456' }} />
                                        {item}
                                    </List.Item>
                                )}
                            />
                        </Col>
                        <Col span={10} offset={4} style={{ background: '#fff', borderRadius: '8px' }}>
                            <div style={{ margin: '20px', height: '400px', alignContent: 'center' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '48px', color: '#0049A1', marginBottom: '10px' }}><img src="../Happy_face.svg" alt="MacroPay" style={{ width: '20%' }} /></div>
                                    <Title level={4}>¿Te falta una lanita?</Title>
                                    <Text style={{ fontSize: '17px' }}>ENGANCHE $520,00</Text>
                                    <br />
                                    <Text style={{ fontSize: '17px' }}>PAGO SEMANAL $125,00</Text>
                                </div>
                                <div style={{ marginTop: '20px' }}>
                                    <Slider
                                        defaultValue={15}
                                        style={{ marginBottom: '10px' }}
                                    />
                                    <Text>Enganche</Text>
                                </div>
                                <Row>
                                    <Button type="primary" block style={{ background: '#FFD300', color: '#004AC1', fontSize: '25px', padding: '30px', fontWeight: 'bold' }}>
                                        Aplica ahora
                                    </Button>
                                </Row>
                                <Text type="secondary" style={{ display: 'block', marginTop: '10px', fontSize: '12px', textAlign: 'center' }}>
                                    *Hasta $2,000 de manera fácil, rápida y confiable
                                </Text>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row justify={'center'}>
                <h1>Productos Relacionados</h1>
            </Row>
            <Row justify={'center'}>
                <Col>
                    <ProductGrid products={relatedProducts} />
                </Col>
            </Row>
        </>
    )
};

export default ProductDetail;