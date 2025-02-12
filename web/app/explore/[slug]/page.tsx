'use client';

import Image from 'next/image';
import {
    Share2,
    Heart,
    MapPin,
    Building2,
    UtensilsCrossed,
    Footprints,
    Map,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { ItineraryCard } from '@/components/itinerary-card';
import AppSlider from '@/components/app-slider';
import DestinationContainer from '@/components/destination-container';
import { cn } from '@/lib/utils';

export default function ExplorePostPage() {
    const [isSliderOpen, setIsSliderOpen] = useState(false);

    return (
        <div className="min-h-screen relative">
            <div className="relative h-[60vh] w-full">
                <Image
                    src="https://mindtrip.ai/cdn-cgi/image/w=1600,format=webp,h=563,fit=cover/https://iorigin.mindtrip.ai/attractions/1748/aab4/37f7/e1b3/ab09/a8e0/f9a8/a4ae"
                    alt="Manila cityscape"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40">
                    <div className="container mx-auto h-full flex flex-col justify-end pb-6">
                        <div className="flex justify-between items-center text-white mb-6">
                            <Button
                                variant="ghost"
                                className="text-white"
                                size="icon"
                            >
                                <Share2 className="h-5 w-5" />
                            </Button>
                            <Button
                                variant="ghost"
                                className="text-white"
                                size="icon"
                            >
                                <Heart className="h-5 w-5" />
                            </Button>
                        </div>
                        <h1 className="text-white text-4xl lg:text-5xl font-bold mb-4">
                            Explore the magnificent beauty of San Fernando La
                            Union
                        </h1>
                        <div className="flex items-center gap-4 text-white">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="https://avatars.githubusercontent.com/u/24890911?s=400&u=edf04f0f718142a139eb312a79a656f96daca726&v=4"
                                    alt="bastilavarias"
                                    width={32}
                                    height={32}
                                    className="rounded-full"
                                />
                                <span>bastilavarias</span>
                                <span>•</span>
                                <span>3 days & 10 places</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>La Union, Philippines</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto lg:px-24">
                {/* Content Section */}
                <div className="bg-white pt-6 sticky top-0 z-20 space-y-2">
                    <div className="flex justify-between">
                        <div className="flex-1"></div>
                        <Button className="rounded-full">
                            Use this Itinerary <Map />
                        </Button>
                    </div>
                    <Tabs
                        defaultValue="overview"
                        className="relative mr-auto min-w-full overflow-x-auto"
                    >
                        <TabsList
                            className="flex space-x-5 h-10 border-b"
                            variant="outline"
                        >
                            <TabsTrigger variant="outline" value="overview">
                                Overview
                            </TabsTrigger>
                            <TabsTrigger variant="outline" value="itinerary">
                                Itinerary
                            </TabsTrigger>
                            <TabsTrigger variant="outline" value="map">
                                Author
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
                <div className="py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 space-x-8">
                        <div className="lg:col-span-1 space-y-8">
                            <div>
                                <p className="text-muted-foreground">
                                    Manila, the capital of the Philippines,
                                    offers visitors a blend of history, culture,
                                    and modernity. From visiting historical
                                    churches to trying the most authentic
                                    Filipino dishes dating back to the early
                                    1900's, start off your Philippines journey
                                    here. Filipino hospitality is on another
                                    level, and you'll be craving adobo and
                                    lechon by the time you leave.
                                </p>

                                <Button variant="link" className="px-0 text-sm">
                                    Read more
                                </Button>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-4">
                                    Places and Experiences
                                </h2>
                                <div className="flex gap-6">
                                    <div className="flex items-center gap-2">
                                        <Building2 className="h-5 w-5" />
                                        <span>7 Attractions</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <UtensilsCrossed className="h-5 w-5" />
                                        <span>2 Restaurants</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Footprints className="h-5 w-5" />
                                        <span>1 Activity</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="w-auto h-96 overflow-hidden bg-secondary rounded-3xl">
                                <MapContainer
                                    center={[16.6159, 120.3209]}
                                    zoom={13}
                                    style={{ width: '100%', height: '100%' }}
                                    className="rounded-lg"
                                >
                                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                    <Marker position={[16.6159, 120.3209]}>
                                        <Popup>A small map example!</Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t" />
                <div className="py-12">
                    <div className="space-y-6">
                        <div className="text-center space-y-2">
                            <h2 className="text-3xl font-bold">Itinerary</h2>
                            <Badge variant="outline" className="rounded-full">
                                3 Days
                            </Badge>
                        </div>
                        <div className="space-y-24">
                            {/*
                                Switch the layout of itinerary dipends on day
                            */}
                            {[...Array(3)].map((_, y) => (
                                <div className="space-y-8" key={y}>
                                    <div className="w-full lg:w-3/4">
                                        <h5 className="text-2xl font-semibold">
                                            Day {y + 1}
                                        </h5>
                                        <p className="text-muted-foreground">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Ad
                                            alias atque dignissimos inventore
                                            minus molestiae, nam necessitatibus
                                            nemo officiis porro possimus quae
                                            qui, quibusdam quidem sequi, tempore
                                            tenetur. Blanditiis, error?
                                        </p>
                                    </div>
                                    <div className="space-y-6">
                                        {[...Array(4)].map((_, i) => (
                                            <ItineraryCard
                                                title="Soho"
                                                location="San Fernando"
                                                region="La Union"
                                                country="Philippines"
                                                time="8:00 AM - 9:00 AM"
                                                description="A vibrant and bustling area, filled with a rich history and a thriving arts scene. Home to numerous galleries and theaters, it's a paradise for art lovers. Food enthusiasts will appreciate the wide variety of restaurants offering cuisines from around the world. The area is also known for its nightlife, with many bars, clubs, and live music venues. Shoppers will find numerous boutiques and high-end shops. Despite its many attractions, visitors should be aware that it can get very crowded, and the cost of living is high."
                                                image="https://mindtrip.ai/cdn-cgi/image/w=1600,format=webp,h=563,fit=cover/https://iorigin.mindtrip.ai/attractions/1748/aab4/37f7/e1b3/ab09/a8e0/f9a8/a4ae"
                                                onViewDetails={() =>
                                                    setIsSliderOpen(true)
                                                }
                                                day={y}
                                                key={i}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="border-t" />
                <div className="py-6">
                    <div className="bg-secondary p-6 rounded-3xl">
                        <h2 className="text-xl font-semibold mb-6">
                            About the author
                        </h2>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative h-12 w-12">
                                    <Image
                                        src="https://avatars.githubusercontent.com/u/24890911?s=400&u=edf04f0f718142a139eb312a79a656f96daca726&v=4"
                                        alt="bastilavarias"
                                        fill
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium">
                                        Sebastian Lavarias
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        @bastilavarias
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Button
                                    variant="outline"
                                    className="h-9 px-4 rounded-full border-gray-200"
                                >
                                    View profile
                                </Button>
                                <Button
                                    variant="outline"
                                    className="h-9 px-4 rounded-full border-gray-200"
                                >
                                    Follow
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AppSlider
                isOpen={isSliderOpen}
                onClose={() => setIsSliderOpen(false)}
            >
                <DestinationContainer />
            </AppSlider>
        </div>
    );
}
