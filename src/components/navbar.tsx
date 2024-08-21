import React from 'react';
import { Layout, Menu, theme, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './navbar.css';

const { Header } = Layout;


const Navbar: React.FC = () => {
    const items1: MenuProps['items'] = ['Home', 'Celulares', 'Motocicletas'].map((key) => ({
        key,
        label: `${key}`,
    }));
    return (
        <>
            <Layout>
                <Row style={{ minHeight: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0248B8', position: 'relative' }}>
                    <Col span={2} offset={1}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Link className="navbar-brand" to="/" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                                <img src="../Logotipo-Macropay.svg" alt="MacroPay"></img>
                            </Link>
                        </div>
                    </Col>
                    <Col span={4} offset={11} pull={4}>
                        <div style={{ display: 'flex', justifyContent: 'end' }}>
                            <Button type="primary" style={{ marginRight: '10px', backgroundColor: '#fadb14', borderColor: '#fadb14' }}>
                                Crea Tu Cuenta
                            </Button>
                            <Button type="text" style={{ color: 'white', marginRight: '10px' }}>
                                Iniciar sesión
                            </Button>
                            <ShoppingCartOutlined style={{ fontSize: '24px', color: 'white' }} />
                        </div>
                    </Col>
                    <div className="credit-label">
                        <span>COMPRA A <br /> CRÉDITO</span>
                    </div>
                </Row>
            </Layout>
            <Layout>
                <Header style={{ display: 'flex', alignItems: 'end', alignContent: 'end', backgroundColor: '#ffffff' }}>
                    <Menu mode="horizontal" defaultSelectedKeys={['2']} items={items1} style={{ flex: 1, minWidth: 0 }} />
                </Header>
            </Layout>

        </>
    );
};

export default Navbar;