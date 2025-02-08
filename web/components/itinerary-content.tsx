'use client';

import type * as React from 'react';
import { ChevronDown, ChevronRight, Clock, ExternalLink, MapPin, RotateCcw, RotateCw, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface DayActivity {
    image: string;
    title: string;
    time: string;
    icon?: React.ReactNode;
    distance?: string;
    details?: boolean;
    site?: boolean;
}

interface Day {
    number: number;
    title: string;
    date: string;
    activities?: DayActivity[];
    isExpanded?: boolean;
}

const days: Day[] = [
    { number: 1, title: 'Manila Food Trip & Chill', date: 'Thu, May 8' },
    { number: 2, title: 'Discovering the Beauty of Baguio', date: 'Fri, May 9' },
    { number: 3, title: 'Cultural Immersion in Banaue', date: 'Sat, May 10' },
    { number: 4, title: 'Exploring Sagada\'s Mysteries', date: 'Sun, May 11' },
    { number: 5, title: 'Vigan\'s Spanish Heritage', date: 'Mon, May 12' },
    {
        number: 6,
        title: 'Beach Day in Pagudpud',
        date: 'Tue, May 13',
        isExpanded: true,
        activities: [
            {
                image: '/placeholder.svg?height=80&width=120',
                title: 'Pagudpud',
                time: 'All day',
                icon: <MapPin className="h-4 w-4" />,
                distance: '7.8 mi',
                details: true,
            },
            {
                image: '/placeholder.svg?height=80&width=120',
                title: 'Saud Beach',
                time: '10:00 AM - 11:30 AM',
                icon: <Clock className="h-4 w-4" />,
                distance: '0.03 mi',
                details: true,
            },
            {
                image: '/placeholder.svg?height=80&width=120',
                title: 'Emohruo Beach Restobar',
                time: '6:00 PM - 8:00 PM',
                icon: <Utensils className="h-4 w-4" />,
                site: true,
            },
        ],
    },
    { number: 7, title: 'Return to Manila', date: 'Wed, May 14' },
];

export function ItineraryContent() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="border-b">
                <div className="px-6 py-4">
                    <h1 className="mb-4 text-2xl font-semibold">Manila Motorcycle Foodie Adventure</h1>
                    <div className="flex flex-wrap gap-3 text-sm">
                        <span className="rounded-full bg-zinc-100 px-3 py-1">Luzon</span>
                        <span className="rounded-full bg-zinc-100 px-3 py-1">May 8 – 14</span>
                        <span className="rounded-full bg-zinc-100 px-3 py-1">2 travelers</span>
                        <span className="rounded-full bg-zinc-100 px-3 py-1">Budget</span>
                    </div>
                </div>

                <div className="flex items-center justify-between px-6 pb-4">
                    <Tabs defaultValue="itinerary">
                        <TabsList>
                            <TabsTrigger value="itinerary" className="font-medium">
                                Itinerary
                            </TabsTrigger>
                            <TabsTrigger value="calendar">Calendar</TabsTrigger>
                            <TabsTrigger value="bookings">Bookings</TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                            <RotateCcw className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <RotateCw className="h-4 w-4" />
                        </Button>
                        <Button variant="outline">Map</Button>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="px-6 py-4">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-medium">Itinerary</h2>
                    <div className="flex items-center gap-2 text-sm">
                        <span>Distances</span>
                        <Switch />
                    </div>
                </div>

                <div className="space-y-1">
                    {days.map((day) => (
                        <div key={day.number} className="rounded-lg hover:bg-zinc-50">
                            <div className="flex items-center gap-3 px-4 py-3">
                                {day.isExpanded ? (
                                    <ChevronDown className="h-4 w-4 text-zinc-400" />
                                ) : (
                                    <ChevronRight className="h-4 w-4 text-zinc-400" />
                                )}
                                <div className="flex-1">
                                    <div className="flex items-baseline justify-between">
                                        <div>
                                            <span className="font-medium">Day {day.number}</span>
                                            <span className="ml-2">{day.title}</span>
                                        </div>
                                        <span className="text-sm text-zinc-500">{day.date}</span>
                                    </div>
                                </div>
                            </div>

                            {day.isExpanded && day.activities && (
                                <div className="space-y-2 px-11 pb-3">
                                    {day.activities.map((activity, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <img
                                                src={activity.image || '/placeholder.svg'}
                                                alt=""
                                                className="h-16 w-24 rounded-lg object-cover"
                                            />
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    {activity.icon}
                                                    <span className="font-medium">{activity.title}</span>
                                                </div>
                                                <div className="text-sm text-zinc-500">{activity.time}</div>
                                                {activity.distance && <div
                                                    className="mt-1 text-xs text-zinc-400">{activity.distance}</div>}
                                            </div>
                                            <div>
                                                {activity.details && (
                                                    <Button variant="outline" size="sm">
                                                        Details
                                                    </Button>
                                                )}
                                                {activity.site && (
                                                    <Button variant="outline" size="sm">
                                                        Site <ExternalLink className="ml-1 h-3 w-3" />
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                    <Button variant="outline" size="sm" className="ml-[108px]">
                                        Add
                                    </Button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
