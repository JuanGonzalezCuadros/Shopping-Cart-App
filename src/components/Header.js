import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #333;
    color: white;
`;

const CartIcon = styled.div`
    cursor: pointer;
`;

const Header = () => {
    const { state } = useCart();
    const cartCount = state.cart.length;

    return (
        <HeaderContainer>
            <h1>Shopping Cart App</h1>
            <Link to="/cart">
                <CartIcon>Cart ({cartCount})</CartIcon>
            </Link>
        </HeaderContainer>
    );
};

export default Header;
