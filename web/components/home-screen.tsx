'use client';

import { useState, useEffect, useRef } from 'react';
import MainConversation from '@/components/main-conversation';
import ItineraryMap from '@/components/itinerary-map';
import ItineraryList from '@/components/itinerary-list';
import AppSlider from '@/components/app-slider';

export default function HomeScreen() {
    const [height, setHeight] = useState(0);
    const [isSliderOpen, setIsSliderOpen] = useState(true);

    const travelPlannerRef = useRef(null);
    const mainConversationContainerRef = useRef(null);

    useEffect(() => {
        const updateHeight = () => {
            if (travelPlannerRef.current) {
                setHeight(
                    window.innerHeight - travelPlannerRef.current.offsetTop
                );
            }
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    return (
        <div
            ref={travelPlannerRef}
            className="flex"
            style={{ height: `${height}px` }}
        >
            <div ref={mainConversationContainerRef} className="w-1/2 h-full">
                <MainConversation />
            </div>
            <ItineraryMap />
            <AppSlider
                isOpen={isSliderOpen}
                onClose={() => setIsSliderOpen(false)}
            >
                <ItineraryList />
            </AppSlider>
        </div>
    );
}
