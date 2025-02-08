'use client';

import { useState, useEffect, useRef } from 'react';
import MainConversation from '@/components/main-conversation';
import ItineraryMap from '@/components/itinerary-map';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { ItineraryContent } from '@/components/itinerary-content';
import * as React from 'react';

export default function TravelPlanner() {
    const [height, setHeight] = useState(0);

    const travelPlannerRef = useRef(null);
    const mainConversationContainerRef = useRef(null);

    useEffect(() => {
        const updateHeight = () => {
            if (travelPlannerRef.current) {
                setHeight(window.innerHeight - travelPlannerRef.current.offsetTop);
            }
        };


        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    return (
        <div ref={travelPlannerRef} className="flex" style={{ height: `${height}px` }}>
            <div ref={mainConversationContainerRef} className="w-1/2 h-full">
                <MainConversation />
            </div>
            <ItineraryMap />
            <ItineraryContentSlide isOpen={true} />
        </div>
    );
}


function ItineraryContentSlide({ isOpen }: { isOpen: boolean }) {
    return (
        <div
            className={cn(
                'w-[40vw] bg-white h-screen z-10 fixed inset-y-0 top-0 right-0 transform shadow-xl transition-transform duration-300 ease-in-out',
                isOpen ? 'translate-x-0' : 'translate-x-full',
            )}
        >
            <div className="absolute right-4 top-4 z-50">
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white">
                    <X className="h-4 w-4" />
                </Button>
            </div>
            <div className="h-full overflow-auto">
                <ItineraryContent />
            </div>
        </div>
    );
}





