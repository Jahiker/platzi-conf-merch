import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useAddress from '../hooks/useAddress';
import '../styles/components/Success.css';

const Success = () => {
    const { state } = useContext(AppContext);

    const location = useAddress();

    const { buyer } = state;

    return (
        <div className="Success">
            <div className="Succes-content">
                <h2>{buyer[0] ? `${buyer[0].name} Gracias por tu compra!` : `Gracias por tu compra!`}</h2>
                <span>Tu pedido llegara en 3 dias a tu direccion</span>
                <div className="Success-map">
                    { location.loc && <Map location={location.loc} /> }
                </div>
            </div>
        </div>
    );
}

export default Success;
