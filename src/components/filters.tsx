import React, { useState } from 'react';
import { Form, Checkbox, Input, Row, Col, InputNumber } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';

interface Brand {
    id: number;
    name: string;
}

interface FiltersProps {
    brands: Brand[];
    onFiltersChange: (filters: { brands: string[]; reviews: number; priceRange: { min: number; max: number } }) => void;
}

const Filters: React.FC<FiltersProps> = ({ brands, onFiltersChange }) => {

    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedReviews, setSelectedReviews] = useState<number>(0);
    const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: Infinity });

    const handleBrandChange = (checkedValues: any) => {
        setSelectedBrands(checkedValues);
        onFiltersChange({ brands: checkedValues, reviews: selectedReviews, priceRange });
    };

    const handleReviewsChange = (reviews: number) => {
        setFilledStars(reviews);
        setSelectedReviews(reviews);
        onFiltersChange({ brands: selectedBrands, reviews, priceRange });
    };

    const handlePriceChange = (min: number, max: number) => {
        setPriceRange({ min, max });
        onFiltersChange({ brands: selectedBrands, reviews: selectedReviews, priceRange: { min, max } });
    };

    const [filledStars, setFilledStars] = useState(0);

    const renderStars = () => {
        const totalStars = 5;
        const starsArray = [];

        for (let i = 0; i < totalStars; i++) {
            if (i < filledStars) {
                starsArray.push(
                    <StarFilled
                        key={i}
                        style={{ color: '#FFFF00', fontSize: '25px', cursor: 'pointer' }}
                        onClick={() => handleReviewsChange(i+1)}
                    />
                );
            } else {
                starsArray.push(
                    <StarOutlined
                        key={i}
                        style={{ color: '#FFFF00', fontSize: '25px', cursor: 'pointer' }}
                        onClick={() => handleReviewsChange(i+1)}
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
                                <Checkbox onChange={handleBrandChange} value={brand} id={String(brand.id)}>
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
                                <InputNumber onChange={(value) => handlePriceChange(value, priceRange.max)} type="number" id="minPrice" placeholder="100" min={100} max={5000} />
                            </Form.Item>
                        </Col>
                        <Col>
                            -
                        </Col>
                        <Col span={10}>
                            <Form.Item htmlFor="maxPrice">
                                <InputNumber onChange={(value) => handlePriceChange(priceRange.min, value)}  id="maxPrice" placeholder="5000" min={100} max={5000} />
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
