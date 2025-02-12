'use client';

import { Search, Heart, MapPin, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

interface TravelCard {
    id: number;
    title: string;
    location: string;
    country: string;
    duration: string;
    image: string;
    author: {
        name: string;
        avatar: string;
    };
}

const travelCards: TravelCard[] = [
    {
        id: 1,
        title: '24-Hour London Adventure: Iconic Sights & Dinner',
        location: 'Greater London',
        country: 'England',
        duration: '1 day',
        image: 'https://mindtrip.ai/cdn-cgi/image/w=750,format=webp,h=563,fit=cover/https://iorigin.mindtrip.ai/attractions/1748/aab4/37f7/e1b3/ab09/a8e0/f9a8/a4ae',
        author: {
            name: 'daniele-farinon',
            avatar: 'https://avatars.githubusercontent.com/u/24890911?s=400&u=edf04f0f718142a139eb312a79a656f96daca726&v=4',
        },
    },
    {
        id: 2,
        title: '3 days in Cartagena: Festival Edition',
        location: 'Cartagena',
        country: 'Colombia',
        duration: '3 days',
        image: 'https://mindtrip.ai/cdn-cgi/image/w=750,format=webp,h=563,fit=cover/https://iorigin.mindtrip.ai/attractions/1748/aab4/37f7/e1b3/ab09/a8e0/f9a8/a4ae',
        author: {
            name: 'katherinedva',
            avatar: 'https://avatars.githubusercontent.com/u/24890911?s=400&u=edf04f0f718142a139eb312a79a656f96daca726&v=4',
        },
    },
    {
        id: 3,
        title: '6 Day St. Thomas Itinerary: Beaches, Dining, and Adventure!',
        location: 'St. John',
        country: 'U.S. Virgin Islands',
        duration: '5 days',
        image: 'https://mindtrip.ai/cdn-cgi/image/w=750,format=webp,h=563,fit=cover/https://iorigin.mindtrip.ai/attractions/1748/aab4/37f7/e1b3/ab09/a8e0/f9a8/a4ae',
        author: {
            name: 'kelsey-travels',
            avatar: 'https://avatars.githubusercontent.com/u/24890911?s=400&u=edf04f0f718142a139eb312a79a656f96daca726&v=4',
        },
    },
    {
        id: 4,
        title: 'Middle Age Prague',
        location: 'Prague',
        country: 'Czech Republic',
        duration: '4 days',
        image: 'https://mindtrip.ai/cdn-cgi/image/w=750,format=webp,h=563,fit=cover/https://iorigin.mindtrip.ai/attractions/1748/aab4/37f7/e1b3/ab09/a8e0/f9a8/a4ae',
        author: {
            name: 'vwwv',
            avatar: 'https://avatars.githubusercontent.com/u/24890911?s=400&u=edf04f0f718142a139eb312a79a656f96daca726&v=4',
        },
    },
    {
        id: 5,
        title: "Vienna's Empire",
        location: 'Vienna',
        country: 'Austria',
        duration: '3 days',
        image: 'https://mindtrip.ai/cdn-cgi/image/w=750,format=webp,h=563,fit=cover/https://iorigin.mindtrip.ai/attractions/1748/aab4/37f7/e1b3/ab09/a8e0/f9a8/a4ae',
        author: {
            name: 'vwwv',
            avatar: 'https://avatars.githubusercontent.com/u/24890911?s=400&u=edf04f0f718142a139eb312a79a656f96daca726&v=4',
        },
    },
    // Add more cards as needed
];

export default function ExplorePage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Inspiration</h1>

            <Tabs defaultValue="all" className="mb-8">
                <TabsList className="gap-2 bg-transparent h-auto p-0">
                    <TabsTrigger
                        value="all"
                        className="rounded-full px-4 py-2 data-[state=active]:bg-black data-[state=active]:text-white"
                    >
                        All
                    </TabsTrigger>
                    <TabsTrigger
                        value="saved"
                        className="rounded-full px-4 py-2 data-[state=active]:bg-black data-[state=active]:text-white"
                    >
                        Own Trips
                    </TabsTrigger>
                </TabsList>
            </Tabs>

            <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                    placeholder="Search for province or city"
                    className="h-12 pl-10 rounded-full transition-colors "
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {travelCards.map((card) => (
                    <Link
                        key={card.id}
                        href="/explore/itinerary-1"
                        legacyBehavior
                    >
                        <Card className="bg-white border-none shadow-none cursor-pointer">
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
                                    <p className="font-semibold">
                                        San Juan Public Beach
                                    </p>
                                </CardTitle>
                                <CardDescription className="space-y-1">
                                    <p className="flex items-center space-x-1">
                                        <MapPin className="w-4 h-4 " />
                                        <span>San Fernando</span>
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src={
                                                card.author.avatar ||
                                                '/placeholder.svg'
                                            }
                                            alt={card.author.name}
                                            width={24}
                                            height={24}
                                            className="rounded-full"
                                        />
                                        <p className="text-sm text-muted-foreground">
                                            {card.author.name}
                                        </p>
                                    </div>
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
