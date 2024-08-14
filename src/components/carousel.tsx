import React from 'react';
import { Carousel, Row, Col } from 'antd';

const Carrusel: React.FC = () => {
    return (
        <Row>
            <Col span={12} offset={6}>
                <Carousel arrows infinite={false}>
                    <div>
                        <img src="../Test.png" />

                    </div>
                    <div>
                        <img src="../Test2.png" />
                    </div>
                    <div>
                        <img src="../Test3.png" />
                    </div>
                </Carousel>
            </Col>
        </Row>
    )
}

export default Carrusel;