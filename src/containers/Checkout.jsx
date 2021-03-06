import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';
import AppContext from '../context/AppContext';
import { Helmet } from 'react-helmet';

const Checkout = () => {
    const { state, removeFormCart } = useContext(AppContext);
    const { cart } = state;

    const handeRemoveFormCart = (product) => {
        removeFormCart(product);
    }

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);

        return sum;
    }
    

    return (
        <React.Fragment>
            <Helmet>
                <title>Platzi Conf Merch - Checkout</title>
            </Helmet>
            <div className='Checkout'>
                <div className="Checkout-content">
                    <h3>{ cart.length > 0 ? 'Lista de Pedidos' : 'No tienes pedidos' }</h3>

                    {cart.map(item => (
                        <div className="Checkout-item" key={`product-${item.id}`}>
                            <div className="Checkout-element">
                                <h4>{ item.title }</h4>
                                <span>${ item.price }</span>
                            </div>
                            <button 
                                type='button'
                                onClick={() => handeRemoveFormCart(item)}
                            >
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    ))}
                </div>

                <div className="Checkout-sidebar">
                    <h3>Precio Total: ${handleSumTotal()}</h3>
                    <Link to="/checkout/information">
                        <button type='button' disabled={ cart.length == 0 && 'disabled' }>Continuar pedido</button>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Checkout;
