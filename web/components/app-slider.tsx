import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface AppSliderProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function AppSlider({ isOpen, onClose, children }: AppSliderProps) {
    return (
        <div
            className={cn(
                'w-[45vw] bg-white h-screen z-10 fixed inset-y-0 top-0 right-0 transform shadow-2xl transition-transform duration-300 ease-in-out',
                isOpen ? 'translate-x-0' : 'translate-x-full',
            )}
        >
            <div className="flex justify-between pt-5 px-5">
                <div className="flex-1"></div>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white" onClick={onClose}>
                    <X className="h-4 w-4" />
                </Button>
            </div>
            <div className="h-full overflow-auto">
                {children}
            </div>
        </div>
    );
}