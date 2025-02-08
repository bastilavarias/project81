import { Send, MessageCircle, Map, LayoutList, User, X } from 'lucide-react';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ItineraryContent } from '@/components/itinerary-content';
import { useState } from 'react';

export default function MainConversation() {

    return (
        <div className="h-full flex flex-col justify-between overflow-hidden bg-transparent relative">
            <div className="flex justify-center bg-transparent relative">
                <FloatingActionButtonGroup />
            </div>

            <div className="flex-1 pt-16 overflow-auto px-14">
                <div className="space-y-5 py-5">
                    {
                        Array.from({ length: 1 }, (_, i) => i + 1).map(() => (
                            <>
                                <SelfMessage />
                                <SystemMessage />
                            </>
                        ))
                    }

                </div>
            </div>

            <ChatInput />


        </div>
    );
}

function FloatingActionButtonGroup() {
    return (
        <div className="absolute top-6 left-50">
            <div className="bg-white inline-block shadow rounded-full">
                <div className="flex justify-center gap-2 ">
                    <Button variant="ghost" className="rounded-full">
                        <MessageCircle />
                        Chat
                    </Button>
                    <Button variant="ghost" className="rounded-full">
                        <Map />
                        Map
                    </Button>
                    <Button variant="ghost" className="rounded-full">
                        <LayoutList />
                        List
                    </Button>
                </div>
            </div>
        </div>
    );
}


function ChatInput() {
    return (
        <div className="px-14 py-4">
            <div className="relative space-y-3">
                <div className="relative rounded-full border border-zinc-100 bg-white shadow">
                    <div className="flex items-center px-5 py-2">
                        {/*<Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-secondary">*/}
                        {/*    <Plus className="h-5 w-5 text-zinc-500"/>*/}
                        {/*    <span className="sr-only">Add attachment</span>*/}
                        {/*</Button>*/}
                        <input
                            type="text"
                            placeholder="Ask anything..."
                            className="flex-1 bg-transparent px-2 py-4 text-sm outline-none placeholder:text-zinc-500"
                            autoFocus={true}
                        />
                        <div className="flex gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-secondary">
                                <Send className="h-5 w-5 text-zinc-500" />
                                <span className="sr-only">Send message</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <p className="text-center text-xs text-zinc-500">Project81 can make mistakes. Check important info.</p>
            </div>
        </div>
    );
}

function SelfMessage() {
    return (
        <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <User className="h-5 w-5" />
            </div>
            <div className="flex-1">
                <p className="font-medium">
                    Give me a budget friendly 3 days itinerary in Antipolo City Philippines.
                </p>
            </div>
        </div>
    );
}

function SystemMessage() {
    const [isItineraryContentSlideOpen, setIsItineraryContentSlideOpen] = useState(false);

    return (
        <>
            <div className="flex items-start gap-4 bg-secondary rounded-3xl p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                    <span className="font-bold text-white">81</span>
                </div>
                <div className="flex-1 space-y-6">
                    <p className="font-medium">
                        A budget-friendly 3-day itinerary for your trip to Antipolo City:
                    </p>
                    {
                        Array.from({ length: 3 }, (_, i) => i + 1).map((day) => (
                            <div key={day}>
                                <p className="font-medium mb-5">Day {day}: Lorem ipsum dolor sit amet.</p>

                                <div className="space-y-3">
                                    {
                                        Array.from({ length: 5 }, (_, i) => i + 1).map((hour) => (
                                            <div className="flex flex-col space-y-2" key={hour}>
                                                <small className="text-xs text-gray-500">{hour + 7}:00 AM</small>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
                                                    possimus unde. Consequuntur, eius facere possimus sit tenetur totam
                                                    ut.
                                                    Iste.
                                                </p>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        ))
                    }

                    <Button variant="outline" className="rounded-full"
                            onClick={() => setIsItineraryContentSlideOpen(true)}>Show
                        Itinerary</Button>
                </div>

            </div>

        </>
    );
}



