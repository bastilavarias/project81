import Image from 'next/image';
import { Heart, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ItineraryCardProps {
    title: string;
    location: string;
    country: string;
    region: string;
    time?: string;
    description: string;
    image: string;
    onViewDetails: () => void;
    day: number;
}

export function ItineraryCard({
    title,
    location,
    country,
    region,
    time,
    description,
    image,
    onViewDetails,
    day,
}: ItineraryCardProps) {
    return (
        <Card
            className={cn(
                'flex flex-col overflow-hidden border-none shadow-none',
                day % 2 ? 'md:flex-row-reverse' : 'md:flex-row'
            )}
        >
            <div className="relative md:w-[45%] aspect-[4/3] md:aspect-auto">
                <Image
                    src={image || '/placeholder.svg'}
                    alt={title}
                    fill
                    className="object-cover rounded-3xl"
                    priority
                />
                <button
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100"
                    aria-label="Add to favorites"
                >
                    <Heart className="w-5 h-5" />
                </button>
            </div>
            <div className="flex-1 p-6 md:p-8">
                <div className="border-b space-y-2 pb-4">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    {time && <p>{time}</p>}
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <p className="text-muted-foreground">
                            {location}, {region}, {country}
                        </p>
                    </div>
                </div>
                <div className="pt-6">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                        {description}
                    </p>
                </div>
                <Button
                    variant="outline"
                    className="h-9 rounded-full px-4 text-sm border-gray-200"
                    onClick={onViewDetails}
                >
                    View details
                </Button>
            </div>
        </Card>
    );
}
