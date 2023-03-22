import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import data from '../data/richmonddata.json'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import ReactDOMServer from 'react-dom/server';

const customIcon = L.divIcon({
    html: ReactDOMServer.renderToString(<FaMapMarkerAlt color="red" size={24} />),
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24]
});




const Map = () => {
    const position = [49.2827, -123.1207];
    const parsed = data.response.collection;
    console.log(parsed)

    function AddMarkersToMap() {
        const map = useMap();

        const markers = parsed.map(function (item) {
            const lat = parseFloat(item.latitude);
            const lng = parseFloat(item.longitude);
            return L.marker([lat, lng], { icon: customIcon });
        });



        markers.forEach(function (marker) {
            marker.addTo(map);
        });

        return null;
    }

    return (
        <MapContainer center={position} zoom={12} style={{ height: '70vh' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <AddMarkersToMap />
        </MapContainer>
    );
};

export default Map;
