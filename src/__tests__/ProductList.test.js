import { render, screen, waitFor } from '@testing-library/react';
import ProductList from '../components/ProductList';
import axios from 'axios';
import { CartProvider } from '../context/CartContext';

// Mocking axios
jest.mock('axios');

test('renders product list from mock data', async () => {
    axios.get.mockResolvedValue({
        data: [
            { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
            { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150' }
        ]
    });

    render(
        <CartProvider>
            <ProductList />
        </CartProvider>
    );

    await waitFor(() => {
        expect(screen.getByText('Product 1')).toBeInTheDocument();
        expect(screen.getByText('Product 2')).toBeInTheDocument();
    });
});
