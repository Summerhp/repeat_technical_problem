import React, { useState }  from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const ProductCard: React.FC<ProductCardProps> = ({ id, nombre, marca, precio, reviews, imagen }) => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img src={imagen} className="card-img-top" alt={nombre} style={{ height: '12rem', objectFit: 'cover' }} />}
        >
            <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
    );
};

export default ProductCard;