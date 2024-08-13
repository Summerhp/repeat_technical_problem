import React from 'react';
import { Layout, Col, Row, Form, Input, List, Space } from 'antd';
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, WhatsAppOutlined } from '@ant-design/icons';

const { Footer } = Layout;

type FieldType = {
    mail?: string;
};

const Footer2: React.FC = () => {
    return (
        <Layout>
            <Footer style={{ alignItems: 'center', alignContent: 'center', backgroundColor: '#EDC400' }}>
                <Row>
                    <Col span={10}>
                        <h3>OFERTAS Y PROMOCIONES</h3>
                        <h1>No te pierdas nuestras ofertas!</h1>
                        <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ maxWidth: 600 }} initialValues={{ remember: true }} autoComplete="off">
                            <Form.Item<FieldType> name="mail" rules={[{ required: true, message: 'Ingresa un correo electronico.' }]}>
                                <Input />
                            </Form.Item>
                        </Form>
                        <Row style={{ alignItems: 'center' }} justify="space-between">
                            <Col>
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
                    <Col span={8} offset={2} style={{alignItems: 'center', justifyContent: 'center', alignContent: 'center'}}>
                        <h1>Conversemos!</h1>
                        <p>Loren ipsum dolor sit amet</p>
                        <Space size="large">
                            <a href="#"><FacebookOutlined style={{ fontSize: '35px', color: 'black'}} /></a>
                            <a href="#"><InstagramOutlined style={{ fontSize: '35px', color: 'black' }} /></a>
                            <a href="#"><LinkedinOutlined style={{ fontSize: '35px', color: 'black' }} /></a>
                            <a href="#"><WhatsAppOutlined style={{ fontSize: '35px', color: 'black' }} /></a>
                        </Space>
                    </Col>
                </Row>
            </Footer>
        </Layout>
    );
};

export default Footer2;
