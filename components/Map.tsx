import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Container } from '@chakra-ui/react';

const Map = () => {
    let position = [49.2827, -123.1207];

    return (
            <MapContainer center={position} zoom={12} style={{ height: '50vh' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
    );
};

export default Map;
