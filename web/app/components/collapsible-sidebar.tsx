"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MessageCircle, Heart, Search, Bell, Compass, PlusCircle, ChevronRight } from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    isCollapsed: boolean
    onToggle: () => void
}

export function CollapsibleSidebar({ isCollapsed, onToggle, className }: SidebarProps) {
    const navItems = [
        { icon: MessageCircle, label: "Planner", badge: "1" },
        { icon: Compass, label: "Explore" },
        { icon: Heart, label: "Likes" },
    ]

    return (
        <div className={cn("relative flex flex-col border-r bg-background", className)}>
            <div className={isCollapsed ? "w-[52px]" : "w-60"}></div>

            <div className="flex-1 overflow-auto">
                <nav className="flex flex-col gap-1 p-2">
                    {navItems.map((item) => (
                        <Button
                            key={item.label}
                            variant="ghost"
                            className={cn("justify-start gap-2", isCollapsed && "w-10 px-0 justify-center")}
                        >
                            <item.icon className="w-20" />
                            {!isCollapsed && (
                                <>
                                    <span className="text-md">{item.label}</span>
                                    {item.badge && <span className="ml-auto bg-primary/10 px-2 rounded-full text-xs">{item.badge}</span>}
                                </>
                            )}
                        </Button>
                    ))}
                </nav>
            </div>

            <div className="p-2 border-t">
                <Button variant="outline" className={cn("w-full", isCollapsed && "w-10 px-0")}>
                    {isCollapsed ? "+" : "New chat"}
                </Button>
            </div>

            <Button
                variant="ghost"
                size="icon"
                className="absolute -right-4 top-[72px] h-8 w-8 rounded-full border shadow-sm"
                onClick={onToggle}
            >
                <ChevronRight className={cn("h-4 w-4 transition-transform", isCollapsed && "rotate-180")} />
            </Button>
        </div>
    )
}

