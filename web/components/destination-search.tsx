'use client';

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DestinationSearchDialog from '@/components/destination-search-dialog';
import { Badge } from '@/components/ui/badge';
import DestinationCard from '@/components/destination-card';

export default function DestinationSearch() {
    const [isSearchDialogOpen, setIsSearchIsDialogOpen] = useState(false);
    const mainTabs = ['All', 'Restaurants', 'Accommodations', 'Things to do'];

    return (
        <div className="flex h-screen">
            {/* Left side - Navigation and Content */}
            <div className="flex flex-col w-full min-w-[600px] max-w-[60%]">
                <div className="flex items-center justify-between mb-4 pr-6">
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
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="outline"
                            className="rounded-full"
                            onClick={() => setIsSearchIsDialogOpen(true)}
                        >
                            <Search />
                            Search
                        </Button>
                        <Button variant="ghost" size="icon">
                            <SlidersHorizontal />
                        </Button>
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
                                <TabsTrigger
                                    variant="outline"
                                    value={tab}
                                    key={key}
                                >
                                    {tab}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>
                </div>

                <div className="pr-6 pb-16 overflow-auto space-y-10 py-6">
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold mb-0">
                            All activities in La Union
                        </h3>

                        <Badge className="bg-secondary text-primary px-3 py-1 rounded-full shadow-none hover:bg-secondary">
                            Beach resorts
                            <button
                                className="ml-1 p-0.5 rounded-full"
                                aria-label="Remove badge"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[...Array(12)].map((_, i) => (
                            <DestinationCard key={i} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Right side - Map */}
            <div className="flex-1">
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

            <DestinationSearchDialog
                open={isSearchDialogOpen}
                onOpenChange={setIsSearchIsDialogOpen}
            />
        </div>
    );
}
