import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const markers = [
    { id: 1, position: [14.5866, 121.1828], label: 'Altaroca Mountain Resort' },
    { id: 2, position: [14.5876, 121.1838], label: 'Pinto Art Museum' },
    { id: 3, position: [14.5896, 121.1858], label: 'Antipolo Cathedral' },
    { id: 4, position: [14.5906, 121.1868], label: 'Hinulugang Taktak' },
    { id: 5, position: [14.5916, 121.1878], label: 'Crescent Moon Cafe' },
];


export default function ItineraryMap() {
    return (
        <div className="relative w-1/2 border-l">
            <MapContainer center={[14.5866, 121.1828]} zoom={14} className="h-full w-full z-0"
                          zoomControl={false}>

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers.map((marker) => (
                    <Marker key={marker.id} position={marker.position}>
                        <Popup>{marker.label}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}