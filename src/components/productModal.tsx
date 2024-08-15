import React, { useState } from 'react';
import { Button, Modal, Row, Col } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import './modal.css';

interface ProductModalProps {
    show: boolean;
    handleClose: () => void;
    product: {
        id: string;
        nombre: string;
        marca: string;
        precio: number;
        reviews: number;
        imagen: string;
        informacion: JSON;
    };
}

const ProductModal: React.FC<ProductModalProps> = ({ product }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [hover, setHover] = useState(false);

    const buttonStyle = {
        backgroundColor: hover ? '#004AC1' : '#FFD300',
        borderColor: hover ? '#004AC1' : '#FFD300',
        marginRight: '10px',
    };

    return (
        <>
            <Button type="primary" onClick={showModal} style={buttonStyle} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>Lo quiero </Button>
            <Modal className="modalStyle" open={isModalOpen} footer={null} onCancel={handleCancel} closable={false} bodyStyle={{ padding: 0, margin: 0 }}>
                <img style={{ width: '520px' }} src='./Modal.png'></img>
                <div className='body-modal'>
                    <Row>
                        <Col span={8}>
                            <img style={{ width: '150px' }} src={product.imagen}></img>
                        </Col>
                        <Col span={16}>
                            <Row justify={'end'} style={{ height: '20px', marginBottom: '20px' }}>
                                <p style={{ color: '#004AC1' }}>${product.precio} x 1</p>
                            </Row>
                            <Row style={{ height: '20px', marginBottom: '5px' }}>
                                <h3>{product.marca} {product.nombre}</h3>
                            </Row>
                            <Row>
                                <p style={{ color: '#7D879C' }}>
                                    Color seleccionado: <span style={{ fontWeight: 'bold' }}>{product.informacion.color}</span>
                                </p>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <Row style={{ borderTop: '1px solid #B4B4B4', borderBottom: '1px solid #B4B4B4', padding: '10px' }}>
                    <Col span={12}>
                        <p>1 ítem en tu carrito</p>
                    </Col>
                    <Col span={12} style={{ textAlign: 'end' }}>
                        <p>
                            Subtotal <span style={{ color: '#004AC1' }}>${product.precio}</span>
                        </p>
                    </Col>
                </Row>
                <br></br>
                <Row justify={'center'}>
                    <div style={{ borderRadius: '50%', width: '50px', height: '50px', border: '2px solid #FFD300', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CheckOutlined style={{ color: '#004AC1', fontSize: '30px' }} />
                    </div>
                </Row>
                <div className='body2-modal'>
                    <Row>
                        <h2 style={{ textAlign: 'center' }}>Te vas a llevar este celular por solo $120 p/semana!</h2>
                    </Row>
                </div>
                <Row justify={'center'}>
                    <Button type="primary" style={{ padding: '30px', backgroundColor: '#fadb14', borderColor: '#fadb14', color: '#000000' }}>
                        COMPRAR A CRÉDITO
                    </Button>
                </Row>
                <br></br>
                <Row align="middle" style={{ marginBottom: '16px' }}>
                    <Col span={4} offset={6}>
                        <div style={{ borderBottom: '1px solid #ccc', width: '100%' }}></div>
                    </Col>
                    <Col span={4} style={{ textAlign: 'center', color: '#B4B4B4', fontStyle: 'italic' }}>
                        <p style={{ margin: 0 }}>o puedes</p>
                    </Col>
                    <Col span={4} >
                        <div style={{ borderBottom: '1px solid #ccc', width: '100%' }}></div>
                    </Col>
                </Row>
                <Row style={{ height: '30px' }} justify={'center'}>
                    <div>
                        <p style={{ color: '#004AC1', marginTop: '0px' }}>Comprar a contado</p>
                    </div>
                </Row>
            </Modal>
        </>
    );
};

export default ProductModal;