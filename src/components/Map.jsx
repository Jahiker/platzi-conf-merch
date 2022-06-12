import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import '../styles/components/Map.css';

// const position = [51.505, -0.09]

const Map = ({ location }) => {

    return (
        <MapContainer center={location} zoom={14}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={location} >
                <Popup icon={'https://unpkg.com/leaflet@1.8.0/dist/images/marker-icon.png'}>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>

            </Marker>
        </MapContainer>

    );
};
export default Map;