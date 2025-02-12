import React from 'react';
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { MapPin, Star } from 'lucide-react';

export default function DestinationCard() {
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
                <CardTitle className="mt-2 flex justify-between items-start">
                    <p className="font-semibold">San Juan Public Beach</p>
                    <p className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />{' '}
                        <span className="font-normal">4.6</span>
                    </p>
                </CardTitle>
                <CardDescription>
                    <p className="flex items-center space-x-1">Beach</p>
                    <p className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4 " />
                        <span>San Fernando</span>
                    </p>
                </CardDescription>
            </CardHeader>
        </Card>
    );
}
