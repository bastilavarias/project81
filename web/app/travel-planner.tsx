"use client"

import * as React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Bot, Calendar, ChevronDown, Heart, MessageCircle, Search, User, X, Mic, Plus, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import "leaflet/dist/leaflet.css"

const markers = [
    { id: 1, position: [14.5866, 121.1828], label: "Altaroca Mountain Resort" },
    { id: 2, position: [14.5876, 121.1838], label: "Pinto Art Museum" },
    { id: 3, position: [14.5896, 121.1858], label: "Antipolo Cathedral" },
    { id: 4, position: [14.5906, 121.1868], label: "Hinulugang Taktak" },
    { id: 5, position: [14.5916, 121.1878], label: "Crescent Moon Cafe" },
]

export default function TravelPlanner() {
    const [isMapVisible, setIsMapVisible] = React.useState(true)

    return (
        <div className="flex h-screen flex-col">
            {/* Navbar */}
            <header className="flex h-14 items-center justify-between border-b px-4">
                <div className="flex items-center gap-2">
                    <h1 className="text-lg font-medium">La Union Adventure: 3-Day Itinerary</h1>
                    <ChevronDown className="h-4 w-4 text-zinc-400" />
                </div>
                <div className="flex items-center gap-6 text-sm text-zinc-600">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        May 5-7
                    </div>
                    <div>2 travelers</div>
                    <div>$</div>
                    <Button variant="outline" size="sm">
                        Invite
                    </Button>
                    <Button size="sm">
                        Trip
                        <span className="ml-1 rounded-full bg-blue-100 px-1.5 py-0.5 text-xs text-blue-600">1</span>
                    </Button>
                </div>
            </header>

            <div className="relative flex flex-1">
                {/* Chat Section */}
                <div className={`flex flex-1 flex-col ${isMapVisible ? "w-1/2" : "w-full"}`}>
                    {/* Floating Action Buttons */}
                    <div className="absolute right-4 top-4 z-10 flex gap-2 rounded-full bg-white px-2 py-1.5 shadow-lg">
                        <Button size="sm" variant="ghost" className="h-8 w-8 rounded-full p-0">
                            <MessageCircle className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 rounded-full p-0">
                            <Search className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 rounded-full p-0">
                            <Heart className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="flex-1 overflow-auto px-6">
                        <div className="space-y-6 py-6">
                            <div className="flex items-start gap-4">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100">
                                    <User className="h-4 w-4 text-zinc-600" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-zinc-600">
                                        Give me a budget friendly 3 days itinerary in Antipolo Philippines
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100">
                                    <Bot className="h-4 w-4 text-zinc-600" />
                                </div>
                                <div className="flex-1 space-y-4">
                                    <p className="text-sm font-medium">
                                        Here's a budget-friendly 3-day itinerary for your trip to Antipolo City:
                                    </p>

                                    <div className="space-y-1">
                                        <h3 className="text-sm font-medium">Day 1: Arrival and Scenic Views</h3>
                                        <p className="text-sm text-zinc-600">
                                            Begin your adventure by checking into Altaroca Mountain Resort. Visit Pinto Art Museum in the
                                            afternoon.
                                        </p>
                                    </div>

                                    <div className="space-y-1">
                                        <h3 className="text-sm font-medium">Day 2: Nature and Spirituality</h3>
                                        <p className="text-sm text-zinc-600">
                                            Visit Antipolo Cathedral and Hinulugang Taktak waterfall park.
                                        </p>
                                    </div>

                                    <div className="space-y-1">
                                        <h3 className="text-sm font-medium">Day 3: Local Culture</h3>
                                        <p className="text-sm text-zinc-600">
                                            Explore Antipolo Public Market for local culture and souvenirs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ChatInput/>
                </div>

                {/* Map Section */}
                {isMapVisible && (
                    <div className="relative w-1/2 border-l">
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute left-4 top-4 z-[999] h-8 w-8 rounded-full bg-white shadow-lg"
                            onClick={() => setIsMapVisible(false)}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                        <MapContainer center={[14.5866, 121.1828]} zoom={14} className="h-full w-full" zoomControl={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {markers.map((marker) => (
                                <Marker key={marker.id} position={marker.position}>
                                    <Popup>{marker.label}</Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>
                )}
            </div>
        </div>
    )
}

function ChatInput() {
    return (
        <div className="px-4 py-4">
            <div className="relative">
                <div className="relative rounded-full border border-black bg-white shadow-sm">
                    <div className="flex items-center px-3 py-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-zinc-100">
                            <Plus className="h-5 w-5 text-zinc-500" />
                            <span className="sr-only">Add attachment</span>
                        </Button>
                        <input
                            type="text"
                            placeholder="Ask anything..."
                            className="flex-1 bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-zinc-500"
                        />
                        <div className="flex gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-zinc-100">
                                <Mic className="h-5 w-5 text-zinc-500" />
                                <span className="sr-only">Voice input</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-zinc-100">
                                <Send className="h-5 w-5 text-zinc-500" />
                                <span className="sr-only">Send message</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <p className="mt-1.5 text-center text-xs text-zinc-500">Mindtrip can make mistakes. Check important info.</p>
            </div>
        </div>
    )
}
