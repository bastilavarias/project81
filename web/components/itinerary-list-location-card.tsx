'use client';

import React, { useState } from 'react';
import { MapPin, Ellipsis, Clock } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import AppSlider from '@/components/app-slider';
import DestinationContainer from '@/components/destination-container';

interface ComponentProps {
    image?: string;
    icon?: React.ReactNode;
    location: string;
    timing: string;
    distance?: string;
    action?: {
        label: string;
        isLink?: boolean;
    };
    isLast?: boolean;
}

export default function ItineraryListLocationCard({
    image,
    icon,
    location,
    timing,
    distance,
    action,
    isLast,
}: ComponentProps) {
    const [isSliderOpen, setIsSliderOpen] = useState(false);

    return (
        <Card className="border-gray-4 shadow-none transition-color hover:bg-gray-50 cursor-grab p-2">
            <div className="flex items-center">
                <div className="w-16 h-16 relative rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                    {image ? (
                        <Image
                            src={image || '/placeholder.svg'}
                            alt={location}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="text-gray-400">{icon}</div>
                    )}
                </div>
                <div className="flex-1 pl-2">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <p className="text-md font-medium">{location}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                        <div className="w-4 h-4" />
                        <p className="text-xs text-gray-500">{timing}</p>
                    </div>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="ml-auto rounded-full"
                        >
                            <Ellipsis />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel className="text-xs font-normal text-gray-500">
                            Actions
                        </DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => setIsSliderOpen(true)}>
                            View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>Set Time</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Remove</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <AppSlider
                isOpen={isSliderOpen}
                onClose={() => setIsSliderOpen(false)}
            >
                <DestinationContainer />
            </AppSlider>

            {/*{!isLast && distance && (*/}
            {/*    <div className="relative">*/}
            {/*        <div*/}
            {/*            className="absolute left-10 top-0 bottom-0 border-l-8 border-dashed border-black -mt-[1px] ml-[1px]" />*/}
            {/*        <div className="pl-8 py-3 text-xs text-gray-500 relative z-10 bg-white w-fit">{distance} mi</div>*/}
            {/*    </div>*/}
            {/*)}*/}
        </Card>
    );
}
