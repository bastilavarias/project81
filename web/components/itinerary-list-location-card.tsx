'use client';

import type React from 'react';
import { MapPin, Ellipsis, Settings, LampIcon as Lighthouse, Building2, Plus } from 'lucide-react';
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

interface ComponentProps {
    image?: string;
    icon?: React.ReactNode;
    location: string;
    timing: string;
    distance?: string;
    action?: {
        label: string
        isLink?: boolean
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
    return (
        <div className="relative">
            <Card
                className="relative z-10 border-gray-4 shadow-none transition-color hover:bg-gray-50 cursor-grab">
                <div className="flex items-center gap-4 p-4">
                    <div
                        className="w-12 h-12 relative rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                        {image ? (
                            <Image src={image || '/placeholder.svg'} alt={location} fill className="object-cover" />
                        ) : (
                            <div className="text-gray-400">{icon}</div>
                        )}
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <p className="text-md font-medium">{location}</p>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                            <div className="w-4 h-4" />
                            {timing}
                        </div>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="ml-auto rounded-full">
                                <Ellipsis />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel
                                className="text-xs font-normal text-gray-500">Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                                View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Set Time
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                Remove
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </Card>

            {/*{!isLast && distance && (*/}
            {/*    <div className="relative">*/}
            {/*        <div*/}
            {/*            className="absolute left-10 top-0 bottom-0 border-l-8 border-dashed border-black -mt-[1px] ml-[1px]" />*/}
            {/*        <div className="pl-8 py-3 text-xs text-gray-500 relative z-10 bg-white w-fit">{distance} mi</div>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
}

