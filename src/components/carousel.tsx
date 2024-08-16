import React from 'react';
import { Carousel, Row, Col } from 'antd';

const Carrusel: React.FC = () => {
    return (
        <Row>
            <Col span={20} offset={2} style={{ textAlign: 'center' }}>
                <h2>Ofertas y promociones</h2>
                <Carousel arrows infinite={false}>
                    <div>
                        <img src="../Test.png" style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div>
                        <img src="../Test.png" style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div>
                        <img src="../Test.png" style={{ width: '100%', height: 'auto' }} />
                    </div>
                </Carousel>
            </Col>
        </Row>
    )
}

export default Carrusel;