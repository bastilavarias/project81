"use client"

import { Button } from "@/components/ui/button"
import { Search, Heart, ChevronRight, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { ChatMessage, DaySection } from "./chat-message"
import { ChatInput } from "./chat-input"
import { LocationBadge } from "./location-badge"

interface ContentSectionProps {
    isCollapsed: boolean
    onToggle: () => void
}

export function ContentSection({ isCollapsed, onToggle }: ContentSectionProps) {
    if (isCollapsed) {
        return (
            <Button
                variant="ghost"
                size="icon"
                className="absolute left-0 top-[72px] h-8 w-8 rounded-full border shadow-sm z-10"
                onClick={onToggle}
            >
                <ChevronRight className="h-4 w-4" />
            </Button>
        )
    }

    return (
        <div className="flex-1 min-w-[400px] flex flex-col relative">
            <div className="flex items-center justify-between border-b p-4">
                <h1 className="text-lg font-medium">La Union 3-Day Trip: Budget Tips</h1>
                <div className="flex items-center gap-2">
                    <Button variant="secondary" size="sm" className="gap-2">
                        <MessageCircle className="h-4 w-4" />
                        Chat
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Search className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Heart className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div className="flex-1 overflow-auto p-4">
                <ChatMessage
                    content={
                        <div className="space-y-6">
                            <h2 className="font-medium">La union 3 day trip with budget of 5000php</h2>

                            <DaySection day={1} title="Arrival and Beach Relaxation">
                                Arrive in <LocationBadge name="La Union Province" verified /> and check in at{" "}
                                <LocationBadge name="San Juan Surf Resort" verified />, a budget-friendly option close to the beach.
                                Spend your day relaxing on <LocationBadge name="San Juan Beach" verified />, famous for its surfing
                                spots and beautiful sunsets. You can rent a surfboard or take a beginner's lesson at a reasonable price.
                            </DaySection>

                            <DaySection day={2} title="Explore Local Culture and Nature">
                                Start your day with a visit to <LocationBadge name="Baluarte Watch Tower" verified />, a historical
                                landmark offering a glimpse into the region's past. Then, head to{" "}
                                <LocationBadge name="Gapuz Grapes Farm" verified /> where you can experience grape picking. In the
                                afternoon, explore <LocationBadge name="Ma-Cho Temple" verified />, a beautiful Taoist temple
                                overlooking the sea.
                            </DaySection>

                            <DaySection day={3} title="Adventure and Departure">
                                Begin your day with an adventure at <LocationBadge name="Tangadan Falls" verified />, where you can
                                enjoy a refreshing swim in the natural pools. Don't forget to try local delicacies at{" "}
                                <LocationBadge name="Halo-Halo de Iloko" verified />, known for its authentic Filipino dishes.
                                Afterward, prepare for your departure with memories of a wonderful trip.
                            </DaySection>

                            <p className="text-sm text-muted-foreground">
                                If you need any more details or have other preferences, feel free to let me know!
                            </p>

                            <Button variant="outline" size="sm">
                                Show itinerary
                            </Button>
                        </div>
                    }
                />
            </div>

            <ChatInput />

            <Button
                variant="ghost"
                size="icon"
                className="absolute -right-4 top-[72px] h-8 w-8 rounded-full border shadow-sm"
                onClick={onToggle}
            >
                <ChevronRight className={cn("h-4 w-4 transition-transform", "rotate-180")} />
            </Button>
        </div>
    )
}

