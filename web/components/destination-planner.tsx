'use client';

import type React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

function DestinationCard() {
    return (
        <Card className="bg-white border-none shadow-none">
            <div className="relative w-full h-80">
                <Image
                    src="https://mindtrip.ai/cdn-cgi/image/w=750,format=webp,h=563,fit=cover/https://iorigin.mindtrip.ai/attractions/1748/aab4/37f7/e1b3/ab09/a8e0/f9a8/a4ae"
                    alt="Beautiful landscape of St. Thomas"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-3xl"
                />
            </div>

            <CardHeader className="px-0 pt-2">
                <CardTitle className="font-semibold mt-2">
                    San Juan Public Beach
                </CardTitle>
                <CardDescription>
                    <p className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 " /><span>St. John, U.S. Virgin Islands</span>
                    </p>
                </CardDescription>
            </CardHeader>
        </Card>
    );
}


export default function DestinationPlanner() {
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
        'Accommodations',
        'Activities',
    ];

    return (
        <div className="flex h-screen">
            {/* Left side - Navigation and Content */}
            <div className="flex flex-col w-full max-w-[50%] min-w-[600px]">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <h1 className="text-xl font-semibold">La Union</h1>
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

                <div className="flex flex-col space-y-5">
                    <Tabs
                        defaultValue="All"
                        className="relative mr-auto min-w-full overflow-x-auto"
                    >
                        <TabsList
                            className="flex space-x-5 h-10 border-b"
                            variant="outline"
                        >
                            {mainTabs.map((tab, key) => (
                                <TabsTrigger variant="outline" value={tab} key={key}>
                                    {tab}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>

                    <div className="flex gap-4">
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
                </div>

                <div className="pr-6 pb-16 overflow-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        {[...Array(12)].map((_, i) => (
                            <DestinationCard key={i} />
                        ))}
                    </div>
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
