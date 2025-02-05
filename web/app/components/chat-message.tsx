import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Plus } from "lucide-react"
import type React from "react" // Added import for React

interface ChatMessageProps {
    isUser?: boolean
    content: React.ReactNode
}

export function ChatMessage({ isUser, content }: ChatMessageProps) {
    return (
        <div className="flex items-start gap-3 py-3">
            {!isUser && (
                <Avatar className="h-8 w-8">
                    <AvatarFallback>AI</AvatarFallback>
                </Avatar>
            )}
            <div className="flex-1 space-y-4">{content}</div>
        </div>
    )
}

export function DaySection({ day, title, children }: { day: number; title: string; children: React.ReactNode }) {
    return (
        <div className="space-y-2">
            <h3 className="flex items-center gap-2 font-medium">
                <Plus className="h-4 w-4" />
                Day {day}: {title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{children}</p>
        </div>
    )
}

