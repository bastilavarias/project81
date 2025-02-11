'use client';

import type React from 'react';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPin } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
            {children}
        </div>
    );
}

export default function DestinationPlanner() {
    const [selectedTab, setSelectedTab] = useState('all');

    const categories = [
        { id: 'your-vibes', label: 'Your Vibes', icon: '👤' },
        { id: 'scenic-views', label: 'Scenic Views', icon: '🏔️' },
        { id: 'outdoor', label: 'Outdoor Activities', icon: '🌲' },
        { id: 'cuisine', label: 'Local Cuisine', icon: '🍽️' },
        { id: 'historical', label: 'Historical Sites', icon: '🏛️' },
        { id: 'beachfront', label: 'Beachfront', icon: '🏖️' },
        { id: 'nightlife', label: 'Nightlife', icon: '🌃' },
        { id: 'shopping', label: 'Shopping', icon: '🛍️' },
    ];

    const mainTabs = [
        'All',
        'Restaurants',
        'Stays',
        'Things to do',
        'Guides',
        'People',
    ];

    return (
        <div className="flex h-screen">
            {/* Left side - Navigation and Content */}
            <div className="flex flex-col w-full max-w-[50%] min-w-[600px] p-4 overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <h1 className="text-xl font-semibold">San Juan</h1>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <path d="M21 21l-4.35-4.35" />
                            </svg>
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex gap-4 mb-6 overflow-x-auto">
                    {mainTabs.map((tab) => (
                        <button
                            key={tab}
                            className={`px-4 py-2 whitespace-nowrap ${
                                selectedTab === tab.toLowerCase()
                                    ? 'bg-black text-white rounded-full'
                                    : 'hover:bg-gray-100 rounded-full'
                            }`}
                            onClick={() => setSelectedTab(tab.toLowerCase())}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="flex gap-4 overflow-x-auto pb-4">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className="flex flex-col items-center gap-1 min-w-[80px]"
                        >
                            <span className="text-lg">{category.icon}</span>
                            <span className="text-sm text-gray-500">
                                {category.label}
                            </span>
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
                    <Card>
                        <div className="relative">
                            <img
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kFukHOss4hh3NhRGvaZMYQo5GJAi0N.png"
                                alt="London street with string lights"
                                className="w-full h-48 object-cover"
                            />
                            <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                            </button>
                            <div className="absolute top-2 left-2 px-2 py-1 bg-white/80 rounded-full text-sm">
                                1 day
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold mb-2">
                                24-Hour London Adventure: Iconic Sights & Dinner
                            </h3>
                            <div className="flex items-center gap-2 text-gray-600">
                                <MapPin size={16} />
                                <span className="text-sm">
                                    Greater London, England
                                </span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Right side - Map */}
            <div className="flex-1">
                <MapContainer
                    center={[18.4655, -66.1057]}
                    zoom={13}
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[18.4655, -66.1057]}>
                        <Popup>San Juan, Puerto Rico</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}
