import { Button } from "@/components/ui/button"
import { Calendar, Users, DollarSign } from "lucide-react"
import Logo from "@/app/logo";

export function Navbar() {
    return (
        <div className="h-14 px-4 flex items-center justify-between bg-background">
            <div className="flex items-center gap-2">
                <Logo/>
                <div className="flex items-center gap-4 ml-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        May 5-7
                    </div>
                    <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />2 travelers
                    </div>
                    <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        Budget Trip
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                    Invite
                </Button>
                <Button variant="outline" size="sm">
                    Trip
                    <span className="ml-1 h-4 w-4 rounded-full bg-blue-600 text-[10px] font-medium text-white grid place-items-center">
            1
          </span>
                </Button>
            </div>
        </div>
    )
}

