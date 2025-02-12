'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface SearchModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function DestinationSearchDialog({
    open,
    onOpenChange,
}: SearchModalProps) {
    const [searchQuery, setSearchQuery] = useState(
        'What adventurous spots are available in La Union?'
    );

    const suggestions = [
        {
            icon: '👨‍👩‍👧‍👦',
            title: 'Family-Friendly',
            description:
                'What are the best family-friendly places in La Union?',
        },
        {
            icon: '🎒',
            title: 'Adventure Seekers',
            description: 'What adventurous spots are available in La Union?',
        },
        {
            icon: '🏢',
            title: 'Local Favorites',
            description:
                'Where can I find the top-rated local places in La Union?',
        },
        {
            icon: '💎',
            title: 'Hidden Gems',
            description: 'What hidden spots should I not miss in La Union?',
        },
        {
            icon: '🧖',
            title: 'Relaxation Spots',
            description: 'Which places are best for relaxation in La Union?',
        },
    ];

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <div className="flex items-center justify-between">
                        <DialogTitle className="text-xl">
                            Search Destination
                        </DialogTitle>
                    </div>
                </DialogHeader>
                <div className="space-y-6 py-4">
                    <div className="relative">
                        <Search className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2" />
                        <Input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="h-12 rounded-full px-10 text-base"
                        />
                    </div>

                    <div className="space-y-4">
                        <p className="text-sm text-muted-foreground flex items-center space-x-1">
                            <Avatar className=" w-6 h-6">
                                <AvatarFallback className="bg-primary text-white p-2 text-xs">
                                    81
                                </AvatarFallback>
                            </Avatar>
                            <span>suggested activities</span>
                        </p>
                        <div className="space-y-2">
                            {suggestions.map((suggestion, index) => (
                                <button
                                    key={index}
                                    className="w-full rounded-md p-4 text-left hover:bg-accent"
                                    onClick={() =>
                                        setSearchQuery(suggestion.description)
                                    }
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">
                                            {suggestion.icon}
                                        </span>
                                        <span className="font-medium">
                                            {suggestion.title}
                                        </span>
                                    </div>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {suggestion.description}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>

                    <Button className="w-full rounded-full" size="lg">
                        Search
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
