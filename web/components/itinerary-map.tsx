import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import React from 'react';

export default function ItineraryMap() {
    return (
        <div className="relative w-1/2 border-l">
            <MapContainer
                center={[16.6159, 120.3209]}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[16.6159, 120.3209]}>
                    <Popup>San Juan</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
