import React from 'react';
import { useCart } from '../context/CartContext';
import styled from 'styled-components';

const ProductCardContainer = styled.div`
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
    margin: 10px;
`;

const ProductCard = ({ product }) => {
    const { dispatch } = useCart();

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity: 1 } });
    };

    return (
        <ProductCardContainer>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </ProductCardContainer>
    );
};

export default ProductCard;
