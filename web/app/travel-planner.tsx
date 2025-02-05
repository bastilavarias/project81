"use client"

import { useState } from "react"
import { Navbar } from "./components/navbar"
import { CollapsibleSidebar } from "./components/collapsible-sidebar"
import { ContentSection } from "./components/content-section"


export default function TravelPlanner() {
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false)
    const [isContentCollapsed, setContentCollapsed] = useState(false)

    return (
        <div className="flex h-screen flex-col">
            <Navbar />
            <div className="flex flex-1 relative">
                <CollapsibleSidebar
                    isCollapsed={isSidebarCollapsed}
                    onToggle={() => setSidebarCollapsed(!isSidebarCollapsed)}
                />

                <ContentSection isCollapsed={isContentCollapsed} onToggle={() => setContentCollapsed(!isContentCollapsed)} />

                {/* Map Section */}
                <div className="flex-1 bg-gray-100 relative">
                    <div className="absolute inset-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61759.02419665797!2d120.3893!3d16.6162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a34b969ea249%3A0x9ff6e9f006e9c58f!2sSan%20Juan%2C%20La%20Union!5e0!3m2!1sen!2sph!4v1701234567890!5m2!1sen!2sph"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

