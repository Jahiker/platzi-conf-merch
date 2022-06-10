import React, { useContext } from 'react';
import Product from './Product';
import '../styles/components/Products.css';
import AppContext from '../context/AppContext';

const Products = () => {
    const { state, addToCart } = useContext(AppContext);
    const { products } = state;

    const handleAddTocart = (product) => {
        addToCart(product);
    }

    return (
        <div className='Products'>
            <div className='Products-items'>
                { products.map(product => (
                    <Product 
                        key={product.id}
                        product={product} 
                        handleAddTocart={handleAddTocart}
                    />
                )) }
            </div>
        </div>
    );
}

export default Products;
