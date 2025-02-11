import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { X, Maximize2, Minimize2 } from 'lucide-react';
import AppTooltip from '@/components/app-tooltip';

interface AppSliderProps {
    isOpen: boolean;
    title?: string | null | undefined;
    onClose: () => void;
    children: React.ReactNode;
}

export default function AppSlider({
    isOpen,
    title = null,
    onClose,
    children,
}: AppSliderProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className={cn(
                'bg-white min-h-screen z-10 fixed inset-y-0 top-0 right-0 transform shadow-2xl transition-transform duration-300 ease-in-out',
                isOpen ? 'translate-x-0' : 'translate-x-full',
                isExpanded ? 'w-[100vw]' : 'w-[45vw]'
            )}
        >
            <div className="container mx-auto overflow-auto">
                <div className="flex justify-between py-5">
                    {isExpanded ? (
                        <AppTooltip label="Minimize">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-full bg-white"
                                onClick={() => setIsExpanded(false)}
                            >
                                <Minimize2 className="h-4 w-4" />
                            </Button>
                        </AppTooltip>
                    ) : (
                        <AppTooltip label="Maximize">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-full bg-white"
                                onClick={() => setIsExpanded(true)}
                            >
                                <Maximize2 className="h-4 w-4" />
                            </Button>
                        </AppTooltip>
                    )}

                    {title ?? <span>{title}</span>}

                    <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-white"
                        onClick={onClose}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
}
