import React, { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader } from '@/components/base-sheet';
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

    /*
     *  Make the outside of sheet clickable.
     * */
    return (
        <Sheet open={isOpen}>
            {/* Using asChild to pass our custom button */}
            <SheetContent
                className={cn(
                    'overflow-y-auto pointer-events-auto',
                    isExpanded
                        ? 'xl:w-full xl:max-w-none '
                        : 'xl:w-[45vw] xl:max-w-none '
                )}
            >
                <SheetHeader>
                    <div className="flex justify-between">
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
                </SheetHeader>

                <div className="container">{children}</div>
            </SheetContent>
        </Sheet>
    );
}
