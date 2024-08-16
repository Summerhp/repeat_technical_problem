import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'antd';
import { HeartOutlined, HeartFilled, StarFilled, StarOutlined } from '@ant-design/icons';
import ProductModal from './productModal.tsx';
import './card.css';

const ProductCard: React.FC<ProductCardProps> = ({ id, nombre, marca, precio, reviews, imagen, informacion }) => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const [isHeartFilled, setIsHeartFilled] = useState(false);

    const renderStars = (rating: number) => {
        const filledStars = Math.floor(rating);
        const totalStars = 5;
        const starsArray = [];

        for (let i = 0; i < totalStars; i++) {
            if (i < filledStars) {
                starsArray.push(<StarFilled style={{ color: '#FFFF00', fontSize: '20px' }} />);
            } else {
                starsArray.push(<StarOutlined style={{ color: '#FFFF00', fontSize: '20px' }} />);
            }
        }

        return starsArray;
    };

    const changeHeart = () => {
        setIsHeartFilled(!isHeartFilled);
    };
    return (
        <>
            <div style={{ marginRight: '2rem', marginBottom: '2rem', backgroundColor: '#EBEFF4' }}>
                <Card className="cardStyle" extra={<Button type="text" style={{fontSize: '35px'}} onClick={() => changeHeart()}>{isHeartFilled ? <HeartFilled /> : <HeartOutlined />}</Button>} hoverable style={{ width: '18rem' }} cover={<img src={imagen} alt={nombre} />}>
                    <Row>
                        <Col span={12}>
                            <h4>{marca} {nombre}</h4>
                            {renderStars(reviews)}
                            <p style={{ color: '#7D879C' }}>$120 p/semana o $520 p/mes</p>
                        </Col>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#004AC1', margin:'0px', marginBottom: '30px' }}>${precio.toFixed(2)}</h2>
                            <ProductModal show={showModal} handleClose={handleClose} product={{ marca, nombre, precio, imagen, informacion }} />
                        </Col>
                    </Row>
                </Card >
            </div>
        </>
    );
};

export default ProductCard;