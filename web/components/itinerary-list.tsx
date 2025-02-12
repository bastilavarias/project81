'use client';

import React, { useState } from 'react';
import { ChevronRight, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import ItineraryListLocationCard from '@/components/itinerary-list-location-card';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import DestinationSearch from '@/components/destination-search';
export default function ItineraryList() {
    return (
        <div className="min-h-screen overflow-auto pb-16">
            <div>
                <div>
                    <h1 className="mb-4 text-4xl font-semibold">
                        A budget-friendly 3-day itinerary for your trip to
                        Antipolo City
                    </h1>
                </div>
                <Accordion
                    type="multiple"
                    className="w-full"
                    value={['day-1', 'day-2', 'day-3']}
                >
                    {Array.from({ length: 3 }, (_, i) => i + 1).map((n) => (
                        <AccordionItem
                            value={`day-${n}`}
                            className="border-b-0 my-0 hover:no-underline"
                            key={n}
                        >
                            <AccordionTrigger className="hover:no-underline">
                                <div className="flex items-center space-x-3">
                                    <ChevronRight className="w-8 h-8" />
                                    <div className="flex flex-col items-start">
                                        <span className="text-lg">
                                            Day {n} Arrival & Basco Exploration
                                        </span>
                                        <span className="text-xs text-muted-foreground mt-0.5">
                                            Thu, May 8 24
                                        </span>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="pl-11 space-y-3 pt-3">
                                    {Array.from(
                                        { length: 3 },
                                        (_, i) => i + 1
                                    ).map((e) => (
                                        <ItineraryListLocationCard
                                            image="https://mindtrip.ai/cdn-cgi/image/w=128,format=webp,h=128,fit=cover/https://iorigin.mindtrip.ai/locations/0927/a377/e413/3465/10ba/41fb/6665/a0c0"
                                            location="Province of Basco"
                                            timing="8:00 AM - 11:30 AM"
                                            distance="10.64"
                                            isLast={e === 3}
                                            key={e}
                                        />
                                    ))}
                                    <Sheet>
                                        <SheetTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className="rounded-full mt-8 shadow-none"
                                            >
                                                <Plus /> Add
                                            </Button>
                                        </SheetTrigger>
                                        <SheetContent
                                            className="w-screen h-screen"
                                            side="bottom"
                                        >
                                            <SheetHeader>
                                                <SheetTitle></SheetTitle>
                                                <SheetDescription></SheetDescription>
                                            </SheetHeader>

                                            <div className="py-3">
                                                <DestinationSearch />
                                            </div>
                                        </SheetContent>
                                    </Sheet>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
