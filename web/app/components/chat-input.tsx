import { Button } from "@/components/ui/button"
import { Plus, Send } from "lucide-react"

export function ChatInput() {
    return (
        <div className="flex items-center gap-2 border-t p-4">
            <Button variant="ghost" size="icon" className="rounded-full shrink-0">
                <Plus className="h-4 w-4" />
            </Button>
            <div className="relative flex-1">
                <input
                    type="text"
                    placeholder="Ask anything..."
                    className="w-full rounded-lg bg-muted/50 px-4 py-2 text-sm outline-none"
                />
            </div>
            <Button variant="ghost" size="icon" className="rounded-full shrink-0">
                <Send className="h-4 w-4" />
            </Button>
        </div>
    )
}

