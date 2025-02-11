'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Clock, Phone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppSlider from '@/components/app-slider';

export default function DestinationContainer() {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    const images = [
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/15/5b/9e/au-detour-de-la-route.jpg?w=900&h=-1&s=1',
        // Add more image URLs here
    ];

    return (
        <div className="min-h-screen overflow-auto pb-16">
            <div className="space-y-5">
                <div>
                    <h1 className="text-2xl font-bold">Dicasalarin Cove</h1>
                    <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center">
                            <span className="text-lg font-semibold">4.6</span>
                            <span className="mx-2">·</span>
                            <span className="text-muted-foreground">
                                245 reviews
                            </span>
                        </div>
                    </div>
                    <div className="text-muted-foreground">
                        <span>Dipaculao, Central Luzon</span>
                    </div>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-4 grid-rows-2 gap-1 h-[400px]">
                        <div className="col-span-2 row-span-2 relative">
                            <Image
                                src={images[0] || '/placeholder.svg'}
                                alt="Main view of Dicasalarin Cove"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="relative">
                                <Image
                                    src={images[0] || '/placeholder.svg'}
                                    alt={`Gallery image ${i + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <Button
                        variant="secondary"
                        className="absolute bottom-4 right-4 rounded-full"
                        onClick={() => setIsGalleryOpen(true)}
                    >
                        Show all photos
                    </Button>
                    <AppSlider
                        isOpen={isGalleryOpen}
                        title="Dicasalarin Cove Gallery"
                        onClose={() => setIsGalleryOpen(false)}
                    >
                        <div className="container">
                            <div className="grid grid-cols-2 gap-2 p-1 overflow-y-auto h-full">
                                {[...Array(8)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="relative aspect-square"
                                    >
                                        <Image
                                            src={
                                                images[0] || '/placeholder.svg'
                                            }
                                            alt={`Gallery image ${i + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AppSlider>
                </div>

                <div className="">
                    <Tabs
                        defaultValue="overview"
                        className="relative mr-auto w-full"
                    >
                        <TabsList
                            className="flex space-x-5 h-10 border-b"
                            variant="outline"
                        >
                            <TabsTrigger variant="outline" value="overview">
                                Overview
                            </TabsTrigger>
                            <TabsTrigger variant="outline" value="location">
                                Location
                            </TabsTrigger>
                            <TabsTrigger variant="outline" value="reviews">
                                Reviews
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="overview">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-6">
                                    <div className="mt-6 space-y-4">
                                        <div>
                                            <p className="text-sm">
                                                Dicasalarin Cove is a
                                                picturesque and secluded beach
                                                destination located near Baler
                                                in the province of Aurora,
                                                Philippines. Known for its
                                                pristine white sand and clear
                                                blue waters, the cove offers a
                                                tranquil escape from the
                                                bustling city life...
                                            </p>
                                            <Button
                                                variant="link"
                                                className="px-0 text-sm"
                                            >
                                                Read more
                                            </Button>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
                                            <div>
                                                <h3 className="font-semibold">
                                                    Address
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Dicasalarin Cove
                                                    <br />
                                                    Baler, Aurora
                                                    <br />
                                                    Philippines
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <Clock className="h-5 w-5 text-muted-foreground shrink-0" />
                                            <div>
                                                <h3 className="font-semibold">
                                                    Hours of operation
                                                </h3>
                                                <p className="text-sm text-red-500">
                                                    Closed now
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    Daily · 7 AM - 4 PM
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <Phone className="h-5 w-5 text-muted-foreground shrink-0" />
                                            <div>
                                                <h3 className="font-semibold">
                                                    Phone
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    +63 917 844 8371
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <Globe className="h-5 w-5 text-muted-foreground shrink-0" />
                                            <div>
                                                <h3 className="font-semibold">
                                                    Website
                                                </h3>
                                                <a
                                                    href="http://www.costapacificabaler.com"
                                                    className="text-sm text-primary hover:underline"
                                                >
                                                    www.costapacificabaler.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-6"></div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
