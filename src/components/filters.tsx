import React, { useState } from 'react';
import { Form, Checkbox, Input, Row, Col } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';

interface Brand {
    id: number;
    name: string;
}

interface FiltersProps {
    brands: Brand[];
}

const Filters: React.FC<FiltersProps> = ({ brands }) => {
    const [filledStars, setFilledStars] = useState(0);

    const handleStarClick = (index: number) => {
        setFilledStars(index + 1);
    };

    const renderStars = () => {
        const totalStars = 5;
        const starsArray = [];

        for (let i = 0; i < totalStars; i++) {
            if (i < filledStars) {
                starsArray.push(
                    <StarFilled
                        key={i}
                        style={{ color: '#FFFF00', fontSize: '25px', cursor: 'pointer' }}
                        onClick={() => handleStarClick(i)}
                    />
                );
            } else {
                starsArray.push(
                    <StarOutlined
                        key={i}
                        style={{ color: '#FFFF00', fontSize: '25px', cursor: 'pointer' }}
                        onClick={() => handleStarClick(i)}
                    />
                );
            }
        }

        return starsArray;
    };

    return (
        <div style={{ backgroundColor: 'white', padding: '15px', marginRight: '80px' }}>
            <div>
                <div>
                    <h3 style={{ color: '#013E9B' }}>Marcas</h3>
                    <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                        {brands.map((brand, index) => (
                            <Form.Item style={{height: '5px'}} key={index}>
                                <Checkbox value={brand} id={String(brand.id)}>
                                    {brand}
                                </Checkbox>
                            </Form.Item>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 style={{ color: '#013E9B' }}>Precio</h3>
                    <Row gutter={16}>
                        <Col span={10}>
                            <Form.Item htmlFor="minPrice">
                                <Input type="number" id="minPrice" placeholder="100" min={100} max={5000} />
                            </Form.Item>
                        </Col>
                        <Col>
                            -
                        </Col>
                        <Col span={10}>
                            <Form.Item htmlFor="maxPrice">
                                <Input type="number" id="maxPrice" placeholder="5000" min={100} max={5000} />
                            </Form.Item>
                        </Col>
                    </Row>
                </div>
                <div>
                    <h3 style={{ color: '#013E9B' }}>Reviews</h3>
                    <Row>
                        {renderStars()}
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Filters;
