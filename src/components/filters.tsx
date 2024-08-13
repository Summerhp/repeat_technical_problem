import React from 'react';
import { Form, Checkbox, Input, Row, Col } from 'antd';

interface Brand {
    id: number;
    name: string;
}

interface FiltersProps {
    brands: Brand[];
}

const Filters: React.FC<FiltersProps> = ({ brands }) => {
    return (
        <div style={{ backgroundColor: 'white', padding: '16px' }}>
            <div className="text-start">
                <div className="mb-3">
                    <h5>Marcas</h5>
                    {brands.map((brand, index) => (
                        <Form.Item key={index}>
                            <Checkbox value={brand} id={String(brand.id)}>
                                {brand}
                            </Checkbox>
                        </Form.Item>
                    ))}
                </div>

                <div className="mb-3">
                    <h5>Precio</h5>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item htmlFor="minPrice">
                                <Input type="number" id="minPrice" placeholder="100" min={100} max={5000} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item htmlFor="maxPrice">
                                <Input type="number" id="maxPrice" placeholder="5000" min={100} max={5000} />
                            </Form.Item>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Filters;