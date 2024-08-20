import React from 'react';
import { Layout, Menu, theme, Button, Row } from 'antd';
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
                <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0248B8' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Link className="navbar-brand" to="/" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                            <img src="../Logotipo-Macropay.svg" alt="MacroPay"></img>
                        </Link>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Button type="primary" style={{ marginRight: '10px', backgroundColor: '#fadb14', borderColor: '#fadb14' }}>
                            Crea Tu Cuenta
                        </Button>
                        <Button type="text" style={{ color: 'white', marginRight: '10px' }}>
                            Iniciar sesión
                        </Button>
                        <ShoppingCartOutlined style={{ fontSize: '24px', color: 'white' }} />
                        <div style={{ paddingLeft: '' }} className="credit-label">
                            <span>COMPRA A <br /> CRÉDITO</span>
                        </div>
                    </div>
                </Header>
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