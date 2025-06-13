import React from 'react';
import { useCart } from '../context/CartContext';
import styled from 'styled-components';

const CartContainer = styled.div`
    padding: 20px;
`;

const CartItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
`;

const Cart = () => {
    const { state, dispatch } = useCart();
    const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <CartContainer>
            {state.cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                state.cart.map((item) => (
                    <CartItem key={item.id}>
                        <div>
                            {item.name} - ${item.price} x {item.quantity}
                        </div>
                        <div>
                            <button onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: item })}>+</button>
                            <button onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: item })}>-</button>
                            <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item })}>Remove</button>
                        </div>
                    </CartItem>
                ))
            )}
            <h3>Total: ${total}</h3>
        </CartContainer>
    );
};

export default Cart;
