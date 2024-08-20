import React from 'react';
import { Layout, Col, Row, Form, Input, List, Space } from 'antd';
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, WhatsAppOutlined } from '@ant-design/icons';

const { Footer } = Layout;

type FieldType = {
    mail?: string;
};

const Footer2: React.FC = () => {
    return (
        <Layout style={{ backgroundColor: '#EBEFF4' }}>
            <div style={{ position: 'absolute', right: 0, width: '50%'}}>
                <svg viewBox="0 0 850 235" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M848 1.49999C925.225 0.877985 982.183 12.3337 1034.5 38.5L1035 190C1020.04 176.102 1009.3 168.593 983.5 156C958.706 145.655 946.818 141.607 931.5 139.5C908.309 134.851 892.438 133.005 855.5 132C806.891 133.52 783.512 135.654 748 141.5C703.466 149.55 679.886 155.1 638.5 165.5L532 191C494.024 199.392 472.422 203.854 433.5 211.5C400.231 217.871 381.931 221.168 350 226.5C275.463 234.125 289.379 233.269 239 234C202.592 233.375 179.586 231.686 129.5 224C78.1679 213.462 49.8949 206.412 0.5 191.5C26.9985 190.957 40.7298 190.628 62 188.5C112.383 182.25 139.136 177.325 184 166C257.776 145.927 292.951 135.106 356.5 115C415.316 96.3437 448.996 85.8289 510 67L512.554 66.22C577.866 46.2715 611.695 35.9391 672 21.5C738.509 7.79014 776.463 2.0073 848 1.49999Z" stroke="black" fill="#044AB5"/>
                </svg>
            </div>
            <Footer style={{ height: '500px', width: 'auto', alignItems: 'end', alignContent: 'end', backgroundColor: '#FCD000', padding: '50px', clipPath: `path("M404 38.0001C236.534 -6.67263 129.461 -12.566 1 27.0001V598L1799.5 599.5L1800 147C1789.43 136.141 1781.78 130.524 1764.5 121.5C1723.56 99.2791 1693.76 91.7816 1626 89C1557.24 90.581 1523.49 94.982 1469 107C1400.12 122.876 1364.57 131.912 1300.5 148C1154.46 178.586 1086.45 190.474 1035.5 190C1000.2 191.27 979.775 190.808 942 187.5C908.74 183.84 888.243 180.295 848 171C816.271 163.141 797.789 158.266 762.5 148L592.5 95C498.648 65.5334 447.438 49.514 404 38.0001Z")` }}>
                <Row>
                    <Col span={10}>
                        <h3>OFERTAS Y PROMOCIONES</h3>
                        <h1>¡No te pierdas nuestras ofertas!</h1>
                        <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ maxWidth: 600 }} initialValues={{ remember: true }} autoComplete="off">
                            <Form.Item name="mail" rules={[{ required: true, message: 'Ingresa un correo electrónico.' }]}>
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
        </Layout>
    );
};

export default Footer2;
