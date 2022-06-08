import React from 'react';
import '../styles/components/Information.css';

const Information = () => {
    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Informacion de contacto:</h2>
                </div>
                <div className="Information-form">
                    <form action="">
                        <input type="text" name="name" id="name" placeholder='Nombre completo' />
                        <input type="email" name="email" id="email" placeholder='Email' />
                        <input type="text" name="address" id="address" placeholder='Direccion' />
                        <input type="text" name="apto" id="apto" placeholder='Apto' />
                        <input type="text" name="city" id="city" placeholder='Ciudad' />
                        <input type="text" name="country" id="country" placeholder='Ciudad' />
                        <input type="text" name="state" id="state" placeholder='Estado' />
                        <input type="text" name="cp" id="cp" placeholder='Codigo postal' />
                        <input type="phone" name="phone" id="phone" placeholder='telefono' />
                    </form>
                </div>
                <div className="Information-buttons">
                    <div className="Information-back">Regresar</div>
                    <div className="Information-next">Pagar</div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido:</h3>
                <div className="Information-item">
                    <div className="Information-element">
                        <h4>ITEM name</h4>
                        <span>$10</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;
