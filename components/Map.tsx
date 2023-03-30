
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import data from '../data/vancouverData.json'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import ReactDOMServer from 'react-dom/server';
import styles from '../styles/mapping.module.css'
import Link from 'next/link';

const customIcon = L.divIcon({
    html: ReactDOMServer.renderToString(<FaMapMarkerAlt color="red" size={24} />),
    className: "custom-icon",
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24]
});

const parsedData = data.response.collection;




const Map = () => {
    const position = [49.2827, -123.1207];
    const parsed = data.response.collection;
    console.log(parsed)

    function AddMarkersToMap() {
        const map = useMap();
        

        const markers = parsed.map(function (item) {
            const link = `https://www.google.com/maps/search/?api=1&query=${item.latitude},${item.longitude}`;
            const lat = parseFloat(item.latitude);
            const lng = parseFloat(item.longitude);
            const marker = L.marker([lat, lng], { icon: customIcon });
            //marker.bindPopup(item.name); // set the popup content to the item name
            marker.bindPopup(
                item.url ? `<strong>${item.name}</strong></br>${item.address1}</br><a href=${item.url}>${item.url}</a>
                <br/>
                <a href=${link}
                 target="_blank">Get directions<a>`
                : `<strong>${item.name}</strong></br>${item.address1} ${item.postalcode}
                <br/>
                <a href=link
                 target="_blank">Get directions<a>`);
            return marker;
        });


        markers.forEach(function (marker) {
            marker.addTo(map);
        });

        return null;
    }

    return (
        <MapContainer center={position} zoom={12} style={{ height: '100vh' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <AddMarkersToMap />
        </MapContainer>
    );
};

export default Map;
