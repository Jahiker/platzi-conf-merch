import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import PaypalPay from '../components/PaypalPay';
import {useNavigate } from 'react-router-dom';
import '../styles/components/Payment.css';

const CLIENT_ID = process.env.REACT_APP_PAYPAL_ID;

const Payments = () => {
    const { state } = useContext(AppContext);
    const { cart } = state;
    const navigate = useNavigate()

    const handlePaymentSuccess = () => {
        const newOrder = {
            buyer,
            product: cart
        }

        addNewOrder(newOrder);

        navigate('/checkout/success')
    }

    return (
        <React.Fragment>
            <div className="Payment">
                <div className="Payment-content">
                    <h3>Resumen del pedido:</h3>
                    {cart.map(item => (
                        <div className="Payment-item" key={item.id}>
                            <div className="Payment-element">
                                <h4>{ item.title }</h4>
                                <span>{ item.price }</span>
                            </div>
                        </div>
                    ))}
                    <div className="Payment-button">
                        <PaypalPay
                            CLIENT_ID={CLIENT_ID}
                            onClick={handlePaymentSuccess}
                        />
                        <Link to="/checkout/success">
                            <button className='pay-button'>Pagar</button>
                        </Link>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Payments;
