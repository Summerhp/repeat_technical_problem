import React from 'react';
import { Layout, Col, Row, Form, Input, List, Space } from 'antd';
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, WhatsAppOutlined } from '@ant-design/icons';
import backgroundImage from '../assets/Vector 4.png';
import './footer.css';
const { Footer } = Layout;

const Footer2: React.FC = () => {
    return (
        <Footer style={{ alignContent: 'end', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '500px' }}>
            <Row>
                <Col span={10}>
                    <h3>OFERTAS Y PROMOCIONES</h3>
                    <h1>¡No te pierdas nuestras ofertas!</h1>
                    <div style={{ alignItems: 'center' }}>
                        <Form size='large' name="basic" labelCol={{ span: 10 }} wrapperCol={{ span: 16 }} style={{ maxWidth: 600, borderBottom: '2px solid #000000', textAlign: 'center' }} initialValues={{ remember: true }} autoComplete="off">
                            <Form.Item name="mail">
                                <Input placeholder="Tu dirección de correo electrónico" style={{width: '500px', height: 'auto'}} className="custom-input" addonAfter={<svg color='#004AC1' xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                                </svg>} />
                            </Form.Item>
                        </Form>
                    </div>
                    <br></br>
                    <br></br>
                    <Row style={{ alignItems: 'center' }} justify="space-between">
                        <Col style={{ backgroundColor: '#0038AE', border: '10px solid #0038AE', borderRadius: '15px' }}>
                            <img src="../Logotipo-Macropay.svg" alt="MacroPay" />
                        </Col>
                        <Col>
                            <List>
                                <List.Item>Envios y devoluciones</List.Item>
                                <List.Item>Preguntas frecuentes</List.Item>
                            </List>
                        </Col>
                        <Col>
                            <List>
                                <List.Item>Aviso de privacidad</List.Item>
                                <List.Item>Términos y condiciones</List.Item>
                            </List>
                        </Col>
                    </Row>
                </Col>
                <Col span={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="../Happy_face.svg" alt="MacroPay" style={{ width: '60%' }} />
                </Col>
                <Col span={8} offset={2} style={{ alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                    <h1 style={{ fontSize: '40px' }}>¡Conversemos!</h1>
                    <p style={{ fontSize: '15px' }}>Loren ipsum dolor sit amet</p>
                    <Space size="large">
                        <a href="#">
                            <FacebookOutlined style={{ fontSize: '40px', color: 'black' }} />
                        </a>
                        <a href="#">
                            <InstagramOutlined style={{ fontSize: '40px', color: 'black' }} />
                        </a>
                        <a href="#">
                            <LinkedinOutlined style={{ fontSize: '40px', color: 'black' }} />
                        </a>
                        <a href="#">
                            <WhatsAppOutlined style={{ fontSize: '40px', color: 'black' }} />
                        </a>
                    </Space>
                </Col>
            </Row>
        </Footer>
    );
};

export default Footer2;
