'use client';

import Image from 'next/image';
import {
    Share2,
    Heart,
    MapPin,
    Building2,
    UtensilsCrossed,
    Footprints,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import React from 'react';

export default function ExplorePostPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full">
                <Image
                    src="https://mindtrip.ai/cdn-cgi/image/w=1600,format=webp,h=563,fit=cover/https://iorigin.mindtrip.ai/attractions/1748/aab4/37f7/e1b3/ab09/a8e0/f9a8/a4ae"
                    alt="Manila cityscape"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40">
                    <div className="container mx-auto h-full flex flex-col justify-end pb-12 px-4">
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
                        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            My Top 10 Favorite Things to Do in Manila,
                            Philippines
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
                                <span>10 places</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>Manila, Philippines</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-8">
                <Tabs
                    defaultValue="All"
                    className="relative mr-auto min-w-full overflow-x-auto"
                >
                    <TabsList
                        className="flex space-x-5 h-10 border-b"
                        variant="outline"
                    >
                        <TabsTrigger variant="outline" value="overview">
                            Overview
                        </TabsTrigger>
                        <TabsTrigger variant="outline" value="places">
                            Places
                        </TabsTrigger>
                    </TabsList>
                </Tabs>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    <div className="lg:col-span-2">
                        <p className="text-gray-700 mb-8">
                            Manila, the capital of the Philippines, offers
                            visitors a blend of history, culture, and modernity.
                            From visiting historical churches to trying the most
                            authentic Filipino dishes dating back to the early
                            1900's, start off your Philippines journey here.
                            Filipino hospitality is on another level, and you'll
                            be craving adobo and lechon by the time you leave.
                        </p>

                        <div className="mb-8">
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

                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold">10 places</h2>

                            {/* Intramuros Card */}
                            <Card>
                                <CardHeader className="p-0">
                                    <div className="relative aspect-video">
                                        <Image
                                            src="/placeholder.svg?height=400&width=600"
                                            alt="Intramuros"
                                            fill
                                            className="object-cover rounded-t-lg"
                                        />
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <Badge variant="secondary" className="mb-2">
                                        Attraction
                                    </Badge>
                                    <h3 className="text-xl font-semibold mb-2">
                                        Wander through Intramuros
                                    </h3>
                                    <p className="text-gray-600">
                                        Most of the time when you think of the
                                        Philippines, you typically aren't more
                                        to tourism and the beaches. But did you
                                        know that there is a historical part of
                                        the Philippines too? Find out all that
                                        in Manila.
                                    </p>
                                    <Button
                                        variant="link"
                                        className="px-0 mt-2"
                                    >
                                        View details
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* San Agustin Church Card */}
                            <Card>
                                <CardHeader className="p-0">
                                    <div className="relative aspect-video">
                                        <Image
                                            src="/placeholder.svg?height=400&width=600"
                                            alt="San Agustin Church"
                                            fill
                                            className="object-cover rounded-t-lg"
                                        />
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <Badge variant="secondary" className="mb-2">
                                        Attraction
                                    </Badge>
                                    <h3 className="text-xl font-semibold mb-2">
                                        Visit San Agustin Church
                                    </h3>
                                    <p className="text-gray-600">
                                        San Agustin Church is easily one of the
                                        most popular churches to visit in
                                        Manila. Built with Baroque architecture
                                        and trompe-l'œil murals, it dates all
                                        the way back to 1607. Plus, it's even
                                        the oldest stone church in the
                                        Philippines and a UNESCO World Heritage
                                        site.
                                    </p>
                                    <div className="mt-4">
                                        <h4 className="font-semibold mb-2">
                                            My tips
                                        </h4>
                                        <p className="text-gray-600">
                                            There are guided tours to san
                                            agustin church, which might be worth
                                            checking out if you want to learn
                                            more about the history! Entrance is
                                            also free, but just be sure to dress
                                            conservatively.
                                        </p>
                                    </div>
                                    <Button
                                        variant="link"
                                        className="px-0 mt-2"
                                    >
                                        View details
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-4">
                            <Button className="w-full" size="lg">
                                Plan a trip
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
